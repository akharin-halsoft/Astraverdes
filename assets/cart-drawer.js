class CartDrawer extends HTMLElement {
  constructor() {
    super();

    
    this.header = document.querySelector('sticky-header');
    this.onBodyClick = this.handleBodyClick.bind(this);
    
    this.onInit = this.onInit.bind(this);
    
    this.onInit()
    let $this = this;
    
//     document.querySelectorAll('a[href="/cart"]').forEach((cartIconLink) => {
     
//       cartIconLink.addEventListener('click', function(e) {
        
//         e.preventDefault();
//         renderDrawer($this);
   
//       });
//     });
    
//     document.getElementById('cart-icon-bubble').addEventListener('click', function(e) {

//       e.preventDefault();
//       renderDrawer($this);

//     });
    

  }
  
  onInit(){
    
    const $this = this;
    this.notification = document.getElementById('cart-drawer');
    this.notificationParent = document.querySelector('.cart-drawer-main-wrapper');
    this.notification.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
   
    
    this.querySelectorAll('button[type="button"].cart-drawer__close ').forEach((closeButton) =>
      closeButton.addEventListener('click', this.close.bind(this))
    );
    
    this.querySelectorAll('[data-item-remove]').forEach((cartItemToRemove) => {
      cartItemToRemove.addEventListener('click', function(e) {

        e.preventDefault();

        let itemKey = this.dataset.itemKey;
        let data = {};
        data[itemKey] = 0;

        cartUpdate(data, $this)
      });
    });

    this.querySelectorAll('[data-item-update]').forEach((cartItemToUpdate) => {

      cartItemToUpdate.addEventListener('change', function(e) {

        e.preventDefault();

        let itemKey = this.dataset.itemKey;
        let data = {};
        data[itemKey] = parseInt(this.value, 10);
        //console.log(data)
        cartUpdate(data, $this);
      });
    });
  }

  open() {
    this.notification.classList.add('animate', 'active');
    this.notificationParent.classList.add('active');

    document.querySelector('body').classList.add('cart-drawer-active');
    document.querySelector('body').classList.add('cart--opened');
    this.notification.addEventListener('transitionend', () => {
      this.notification.focus();
      trapFocus(this.notification);
    }, { once: true });

    document.body.addEventListener('click', this.onBodyClick);

    let $this = this;
 /*   this.querySelectorAll('[data-item-remove]').forEach((cartItemToRemove) => {
        cartItemToRemove.addEventListener('click', function(e) {

          e.preventDefault();

           let itemKey = this.dataset.itemKey;
          let data = {};
          data[itemKey] = 0;
          
         cartUpdate(data, $this)
        });
      });

    this.querySelectorAll('[data-item-update]').forEach((cartItemToUpdate) => {
     
        cartItemToUpdate.addEventListener('change', function(e) {

          e.preventDefault();

           let itemKey = this.dataset.itemKey;
          let data = {};
          data[itemKey] = parseInt(this.value, 10);
          console.log(data)
         cartUpdate(data, $this);
        });
      });*/
  }
  
  close() {
    this.notification.classList.remove('active');
    this.notificationParent.classList.remove('active');
    document.querySelector('body').classList.remove('cart-drawer-active');
    document.querySelector('body').classList.remove('cart--opened');
    
    document.body.removeEventListener('click', this.onBodyClick);

    removeTrapFocus(this.activeElement);
  }

  renderContents(parsedState) {
    
      this.getSectionsToRender().forEach((section => {
        
        if(section.class) {
        
          document.querySelectorAll(section.class).forEach(item => {
            item.innerHTML = this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
          });
        } else {
        
         document.getElementById(section.id).innerHTML =
          this.getSectionInnerHTML(parsedState.sections[section.id], section.selector)
                                   
        }
        
      }));
    
    this.onInit()

      if (this.header) this.header.reveal();
    
      this.open();
  }

  getSectionsToRender() {
    return [
      /*{
        id: 'cart-drawer-products',
        //selector: `.cart-drawer-products-list`,
        selector: `.cart-drawer-products`,
      },*/
      {
        id: 'mini-cart',
        selector: `.cart-drawer-main-wrapper`,
        class: `.cart-drawer-main-wrapper`,
      },
      {
        id: 'cart-icon-bubble',
//      /   class: '.cart-icon-bubble'
      },
      {
      
        id: 'cart-subtotals'
      },
     /* {
      
        id: 'cart-drawer-heading'
      }*/
    ];
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector) ? new DOMParser()
      .parseFromString(html, 'text/html')
    .querySelector(selector).innerHTML : '';
  }

  handleBodyClick(evt) {
    const target = evt.target;
    if (target !== this.notification && !target.closest('cart-drawer')) {
      const disclosure = target.closest('details-disclosure');
      this.activeElement = disclosure ? disclosure.querySelector('summary') : null;
      this.close();
    }
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

function renderDrawer($this) {

  fetch(`${routes.cart_url}?sections=mini-cart,cart-icon-bubble,cart-subtotals,cart-subtotals,cart-drawer-heading`)
  .then((response) => response.json())
  .then((response) => {
    
    if (response.status) {
      return;
    }

    $this.renderContents({sections: response});
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(() => {

           });
}

function cartUpdate(data,$this) {

  fetch(`${routes.cart_update_url}.js`, {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({updates: data })

  })
  .then((response) => response.json())
  .then((response) => {
    if (response.status) {
      return;
    }

    renderDrawer($this);
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(() => {

           });
}

customElements.define('cart-drawer', CartDrawer);


if (window.matchMedia("(min-width: 950px)").matches) {
$(document).on({
    mouseenter: function () {
       $("body").addClass("cart--opened");
    },
    mouseleave: function (e) {
      
      
//          $("body").removeClass("cart--opened");
    }


}, ".header__icon--cart, .cart-drawer-main-wrapper");
}

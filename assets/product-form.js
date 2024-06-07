if (!customElements.get('product-form')) {
  customElements.define('product-form', class ProductForm extends HTMLElement {
    constructor() {
      super();

      this.form = this.querySelector('form');
      this.form.querySelector('[name=id]').disabled = false;
      this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
      
      window.cartType = this.dataset.cartType;
    
      if(cartType == "notification") {
        this.cartNotification = document.querySelector('cart-notification');
      }
      if(cartType == "drawer") {
        this.cartNotification = document.querySelector('cart-drawer');
      }
      }
  
    onSubmitHandler(evt) {
      evt.preventDefault();
      const submitButton = this.querySelector('[type="submit"]');
      if (submitButton.classList.contains('loading')) return;

      this.handleErrorMessage();
      
      this.cartNotification?.setActiveElement(document.activeElement);

      submitButton.setAttribute('aria-disabled', true);
      submitButton.classList.add('loading');
      this.querySelector('.loading-overlay__spinner').classList.remove('hidden');

      const config = fetchConfig('javascript');
      config.headers['X-Requested-With'] = 'XMLHttpRequest';
      delete config.headers['Content-Type'];

      const formData = new FormData(this.form);
      formData.append('sections', this.cartNotification?.getSectionsToRender().map((section) => section.id));
      formData.append('sections_url', window.location.pathname);
      config.body = formData;

      fetch(`${routes.cart_add_url}`, config)
        .then((response) => response.json())
        .then((response) => {
          if (response.status) {
            this.handleErrorMessage(response.description);
            return;
          }

          if(cartType == "page") {
            window.location.href = routes.cart_url;
          }
          this.cartNotification?.renderContents(response);
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          submitButton.classList.remove('loading');
          submitButton.removeAttribute('aria-disabled');
          this.querySelector('.loading-overlay__spinner').classList.add('hidden');
        });
    }

    handleErrorMessage(errorMessage = false) {
      this.errorMessageWrapper = this.errorMessageWrapper || this.querySelector('.product-form__error-message-wrapper');
      this.errorMessage = this.errorMessage || this.errorMessageWrapper.querySelector('.product-form__error-message');

      this.errorMessageWrapper.toggleAttribute('hidden', !errorMessage);

      if (errorMessage) {
        this.errorMessage.textContent = errorMessage;
      }
    }
  });
}


if (!customElements.get('product-grid-form')) {
  customElements.define('product-grid-form', class ProductGridForm extends HTMLElement {
    constructor() {
      super();

      this.form = this.querySelector('form');

      this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
      
      window.cartType = this.dataset.cartType;
    
      if(cartType == "notification") {
        this.cartNotification = document.querySelector('cart-notification');
      }
      if(cartType == "drawer") {
        this.cartNotification = document.querySelector('cart-drawer');
      }
    
      }
  
    onSubmitHandler(evt) {
      evt.preventDefault();

      const submitButton = evt.submitter
      if (submitButton.classList.contains('loading')) return;

      this.handleErrorMessage();
      
      this.cartNotification?.setActiveElement(document.activeElement);

      submitButton.setAttribute('aria-disabled', true);
      submitButton.classList.add('loading');
//      this.querySelector('.loading-overlay__spinner').classList.remove('hidden');

      const config = fetchConfig('javascript');
      config.headers['X-Requested-With'] = 'XMLHttpRequest';
      delete config.headers['Content-Type'];

      const formData = new FormData(this.form);
      formData.append('sections', this.cartNotification?.getSectionsToRender().map((section) => section.id));
      formData.append('sections_url', window.location.pathname);
      formData.append('id', submitButton.value);
      config.body = formData;

      fetch(`${routes.cart_add_url}`, config)
        .then((response) => response.json())
        .then((response) => {
          if (response.status) {
            this.handleErrorMessage(response.description);
            return;
          }


          if(cartType == "page") {
            fetch(`${window.routes.cart_url}.js`).then(response => response.json()).then(response => {
              
          if(document.querySelector("#cart-icon-bubble").querySelector(".cart-count-bubble")) {
            document.querySelector(".cart-count-bubble").innerHTML = `<span aria-hidden="true">${response.item_count}</span><span class="visually-hidden">>${response.item_count} פריטים</span>`;
          
          } else {

            document.querySelector("#cart-icon-bubble").innerHTML += ` <div class="cart-count-bubble"><span aria-hidden="true">${response.item_count}</span><span class="visually-hidden">${response.item_count} פריט</span>
                          </div>`;
           
          }
            
          });
          }
          
          this.cartNotification?.renderContents(response);
          let target = evt.target;
          let quickView = target.closest('#shopify-section-product-quick-view');
        
          if(quickView) {

            document.querySelector('.product-quick-view-main-wrapper').classList.remove('open_mobile_quick_view_size');
            document.querySelector('.product-quick-view-main-wrapper').classList.add('show_cart_confirmation');
            
            document.querySelector('.cart-product-details').querySelector('.option-value').innerHTML = response.variant_title;
            
            if(response.image){
             document.querySelector('.cart-product-details').querySelector('.product-featured-image').src=response.image;
            }
            
          }
        
        if(document.querySelector('.cart--opened')) {
        
          document.querySelectorAll('.recommended_product').forEach(recommendedProduct => {

            recommendedProduct.querySelector('.size-options-wrapper').classList.remove('show-size-options-wrapper');
          });
        }
 
        
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          submitButton.classList.remove('loading');
          submitButton.removeAttribute('aria-disabled');
         // this.querySelector('.loading-overlay__spinner').classList.add('hidden');
        });
    }

    handleErrorMessage(errorMessage = false) {
      
      if(errorMessage){
      alert(errorMessage);
        return;
      }
    
    }
  });
}

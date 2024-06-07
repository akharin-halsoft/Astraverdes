$('.blocks-wrapper').slick({
  rtl: true,
  infinite: false,
  slidesToShow: 5.3,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots:false,
  prevArrow: '<button class="slick-prev slick-arrow"><svg data-v-be7a40d8="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 10" class="category-slider__nav-icon category-slider__nav-icon--prev"><path fill="none" stroke="#222" d="M.5 9.5l4-4.5L.5.5"></path></svg></button>',
  nextArrow: '<button class="slick-next slick-arrow"><svg data-v-be7a40d8="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 10" class="category-slider__nav-icon category-slider__nav-icon--next"><path fill="none" stroke="#222" d="M.5 9.5l4-4.5L.5.5"></path></svg></button>',
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4.3
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3.3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1.3,
        centerMode: false,  
      }
    }
  ]
});
  
  if (window.matchMedia("(max-width: 949px)").matches) {
    $('.product__media-wrapper .slider-mobile-gutter .product__media-list').slick({
      rtl: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      dots:true  
    });
  }




function initGenderSlider() {


  $(".men .gender-products:not('.slick-initialized')").slick({
   rtl: true,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots:false,
  prevArrow: '<button class="slick-prev slick-arrow"><svg data-v-4f4cfa84="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 10" class="variant-slider__navigation-icon"><path fill="none" stroke="#222" d="M.5 9.5l4-4.5L.5.5"></path></svg></button>',
  nextArrow: '<button class="slick-next slick-arrow"><svg data-v-4f4cfa84="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 10" class="variant-slider__navigation-icon"><path fill="none" stroke="#222" d="M.5 9.5l4-4.5L.5.5"></path></svg></button>'
});

$(".women .gender-products:not('.slick-initialized')").slick({
  rtl: true,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots:false,
  prevArrow: '<button class="slick-prev slick-arrow"><svg data-v-4f4cfa84="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 10" class="variant-slider__navigation-icon"><path fill="none" stroke="#222" d="M.5 9.5l4-4.5L.5.5"></path></svg></button>',
  nextArrow: '<button class="slick-next slick-arrow"><svg data-v-4f4cfa84="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 10" class="variant-slider__navigation-icon"><path fill="none" stroke="#222" d="M.5 9.5l4-4.5L.5.5"></path></svg></button>'
}); 

  
$(".unisex .gender-products:not('.slick-initialized')").slick({
  rtl: true,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots:false,
  prevArrow: '<button class="slick-prev slick-arrow"><svg data-v-4f4cfa84="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 10" class="variant-slider__navigation-icon"><path fill="none" stroke="#222" d="M.5 9.5l4-4.5L.5.5"></path></svg></button>',
  nextArrow: '<button class="slick-next slick-arrow"><svg data-v-4f4cfa84="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 10" class="variant-slider__navigation-icon"><path fill="none" stroke="#222" d="M.5 9.5l4-4.5L.5.5"></path></svg></button>'
}); 
  
}

window.initGenderSlider = initGenderSlider;

// Init gender slider on page load
initGenderSlider();

$(document).on('click', '[data-size-chart]', function(e) {

e.preventDefault();
  
$(".size-chart-page-content-wrapper").remove();
  
let productUrl = $(this).data('product-url');

 let sizeChartUrl = `${productUrl}?sections=product-size-chart`;
  
   fetch(sizeChartUrl).then(response =>  response.json()).then(response => {
  
      let $sizeChartWrapper = $(response['product-size-chart']);
    
      let  $sizeChartHtml = $sizeChartWrapper.find(".size-chart-page-content-wrapper");
     
     if($sizeChartHtml.length){
      
       $sizeChartHtml.remove();
     }
     $('body').append($sizeChartHtml);
     $('body').addClass('size-chart-shown');
   });
});

$(document).on('click', '[data-size-chart-close]', function(e) {

e.preventDefault();

  $(this).closest(".size-chart-page-content-wrapper").remove();
  $('body').removeClass('size-chart-shown');

});

$(document).on("click", '[data-product-color]', function(e) {

  e.preventDefault();
  
  
  let productUrl = $(this).data('product-url');
  let productId = $(this).data('product-id');
  let colorProductUrl = `${productUrl}?sections=product-grid-section`;
  let $colorProductOldHtml = $(this).closest('[data-product-card]')
  fetch(colorProductUrl).then(response =>  response.json()).then(response => {

    let $colorProductWrapper = $(response['product-grid-section']);

    let  $colorProductHtml = $colorProductWrapper.find(".product-grid-section-wrapper").find('[data-product-card]');

    if($colorProductHtml.length){

      $colorProductOldHtml.replaceWith($colorProductHtml);
      
      let $currentProductGrid = $(`[data-product-card][data-product-id="${productId}"]`);
      
      // Init gender slider on color change
      initGenderSlider();

    }

  });

  
});

 if (window.matchMedia("(max-width: 768px)").matches) {
$(document).on("click", '[data-product-card], [data-product-color-mobile]', function(e) {

  e.preventDefault();
  
  let productUrl = $(this).data('product-url');

  if (productUrl.includes("?")) {
      productUrl = productUrl.substring(0, productUrl.indexOf("?"));
  }
  
  if($(this).closest(".predictive-search").length) {
   window.location = productUrl;
  }
  
  let productId = $(this).data('product-id');
  let quickviewProductUrl = `${productUrl}?sections=product-quick-view`;
  fetch(quickviewProductUrl).then(response =>  response.json()).then(response => {

    let $quickViewProductWrapper = $(response['product-quick-view']);
    /*if($("#shopify-section-product-quick-view").length) {
    
      $("#shopify-section-product-quick-view").remove();
    }*/
    
    $('[data-product-quick-view-wrapper]').html($quickViewProductWrapper);
    $('body').addClass("quick-view-opened");
    
    $('.product-quick-view-main-wrapper .product-images-list').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      dots:false
    });

    $('.product-quick-view-main-wrapper .custom-gender-product-wrapper').slick({
      infinite: false,
      slidesToShow: 5.5,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      dots:false
    });

    

  });
});

$(document).on("click", '[data-action="close-quick-view"], [data-continue-shopping]', function(e) {

  e.preventDefault();
  
  $("#shopify-section-product-quick-view").remove();
  $('body').removeClass("quick-view-opened");
  
});
   
 }
$(document).on("click", ".quick-add-wrapper", function() {

  $(this).addClass("hide-size-button"),
  $(this).siblings().addClass("show-size-options-wrapper")
  
});

$(document).on({
    mouseenter: function () {
       $(this).addClass("show-size-options");
    },
    mouseleave: function () {
         $(this).addClass("show-size-options");
    }
}, ".quick-add-wrapper");


$(document).on("mouseleave", ".card-wrapper", function() {
  
  $(this).parent().find(".size-options-wrapper").removeClass("show-size-options-wrapper");
  
});



// $(document).on({
//     mouseenter: function () {
//        $("body").addClass("show-search-wrapper");
//     },
//     mouseleave: function (e) {
      
      
//          $("body").removeClass("show-search-wrapper");
//     }
// }, ".header__search, #main_search_popup");



$(document).on("click", ".sub-childs > a", function() {  
    if ($(this).parent().hasClass("opne_sub_menu")) {
      $(this).parent().removeClass("opne_sub_menu");
      $(this)
        .siblings(".menu-drawer__sub_menu")
        .slideUp(200);     
    } else {      
      $(".sub-childs > a").parent().removeClass("opne_sub_menu");
      $(this).parent().addClass("opne_sub_menu");
      $(".menu-drawer__sub_menu").slideUp(200);
      $(this)
        .siblings(".menu-drawer__sub_menu")
        .slideDown(200);
    }
  });





$(document).on("click", ".footer-block--menu > .footer-block__heading", function() {  
  if ($(this).parent().hasClass("open_sub_menu")) {
    $(this).parent().removeClass("open_sub_menu");
    $(this)
    .siblings(".footer-block--menu > .footer-block__details-content")
    .slideUp(200);     
  } else {      
    $(".footer-block--menu > .footer-block__heading").parent().removeClass("open_sub_menu");
    $(this).parent().addClass("open_sub_menu");
    $(".footer-block--menu > .footer-block__details-content").slideUp(200);
    $(this)
    .siblings(".footer-block--menu > .footer-block__details-content")
    .slideDown(200);
  }
});


$(document).on("click", "#FacetsWrapperDesktop > .facets__disclosure>.facets__summary", function() {  
  if ($(this).parent().hasClass("open_filter_menu")) {
    $(this).parent().removeClass("open_filter_menu");
    $(this)
    .siblings("#FacetsWrapperDesktop>.facets__disclosure>.facets__display")
    .slideUp(400);     
  } else {      
    $("#FacetsWrapperDesktop > .facets__disclosure>.facets__summary").parent().removeClass("open_filter_menu");
    $(this).parent().addClass("open_filter_menu");
    $("#FacetsWrapperDesktop>.facets__disclosure>.facets__display").slideUp(400);
    $(this)
    .siblings("#FacetsWrapperDesktop>.facets__disclosure>.facets__display")
    .slideDown(400);
  }
});


$(document).on("click", ".toggle_filter_title", function() {  
  if ($(this).parent().hasClass("open_filter_menu")) {
    $(this).parent().removeClass("open_filter_menu");
    $(this)
    .siblings(".side-bar-menu ul.menu-drawer__menu")
    .slideUp(400);     
  } else {      
    $(".toggle_filter_title").parent().removeClass("open_filter_menu");
    $(this).parent().addClass("open_filter_menu");
    $(".side-bar-menu ul.menu-drawer__menu").slideUp(400);
    $(this)
    .siblings(".side-bar-menu ul.menu-drawer__menu")
    .slideDown(400);
  }
});


$(document).on("click", ".accordion-item__label", function() {  
  if ($(this).parent().hasClass("open_mobile_filter")) {
    $(this).parent().removeClass("open_mobile_filter");
    $(this)
    .siblings(".mobile-facets__submenu")
    .slideUp(400);     
  } else {      
    $(".accordion-item__label").parent().removeClass("open_mobile_filter");
    $(this).parent().addClass("open_mobile_filter");
    $(".mobile-facets__submenu").slideUp(400);
    $(this)
    .siblings(".mobile-facets__submenu")
    .slideDown(400);
  }
});


$(document).on("click", ".product-actions-container .atc-button button.btn.atc-button", function() {  
  if ($(this).parent().parent().parent().parent().hasClass("open_mobile_quick_view_size")) {
    $(this).parent().removeClass("open_mobile_filter");
        
  } else {      
    $(".product-actions-container .atc-button button.btn.atc-button").parent().parent().parent().parent().removeClass("open_mobile_quick_view_size");
    $(this).parent().parent().parent().parent().addClass("open_mobile_quick_view_size");
    
  }
});


$(document).on("click", ".quick-view-sizes__back", function() {  
  $(".product-quick-view-main-wrapper").removeClass("open_mobile_quick_view_size");
});

$(document).on("click", ".search-modal.modal__content .modal__close-button.link", function() {  
  $("body").removeClass("show-search-wrapper");
});



$(document).on("click", ".custom-sorting-wrapper .sort_by_eading", function() {  
  $(this).parent().toggleClass("active");
});
 
$(document).on("click", ".cart-drawer__close", function() {       
  $("body").removeClass("cart--opened");    
});

$(document).on("click", ".collection_top_bar .custom-sorting-wrapper h2.sort_by_eading ", function() {  
  $("body").addClass("open_sort_mobile");
});
 

$(document).on("click", ".custom_sort_by_wrapper .sort_mobile_popup_header span.overlay__close, .button-wrapper > button", function() {  
  $("body").removeClass("open_sort_mobile");
});
 

$(document).on("click", ".mobile_filter_trigger", function() {  
  $("body").addClass("open_filter_mobile");
});
 

$(document).on("click", ".mobile-facets__heading_wrapper .overlay__close, .mobile-facets__footer .button.button--primary", function() {  
  $("body").removeClass("open_filter_mobile");
});


$('.highlight-content').hover(function(){
  let handle =  $(this).data('handle');
   $('.highlight-content').removeClass('active');
  $('.highlight-image').removeClass('active');
  $(`.highlight-content[data-handle="${handle}"]`).addClass('active');
  $(`.highlight-image[data-handle="${handle}"]`).addClass('active'); 
});


$(document).on("click", ".play_button .media-caption__play-button", function() {
  $("body").addClass("show_video_popup");
});


$(document).on("click", ".videoModal .modal-header button.close", function() {
  $("body").removeClass("show_video_popup");
});

$(document).on('click', '.accordion-trigger', function(){
  var $this = $(this),
      $target = $this.closest('div').find('.accordion-content');
  if($this.hasClass('accordion-active')) {
    $this.removeClass('accordion-active');
    $target.slideUp();
  } else {
    $this.addClass('accordion-active');
    $target.slideDown();
  }
  return false;
});


 
  $(document).on("change", '[data-select-collection]', function(e) {

  e.preventDefault();
  
  
  let collectionUrlValue = $(this).val();
    if(!collectionUrlValue){
    
      return;
    }
  let collectionUrl = `${collectionUrlValue}?sections=collection-specifications`;
  let $specificationOldHtml = $(this).closest('.product-compare-specifications-wrapper');
  fetch(collectionUrl).then(response =>  response.json()).then(response => {
    let $specificationHtmlWrapper = $(response['collection-specifications']); 
    
    
    let  $specificationHtml = $specificationHtmlWrapper.find(".product-compare-specifications-wrapper");

    if($specificationHtml.length){
      
      $specificationOldHtml.replaceWith($specificationHtml);      
      disableCompareCurrentSelection();
      
    }

  });

  
});

function disableCompareCurrentSelection() {

  let $compareFrom = $(".compare-from");
  let $compareTo = $(".compare-to");
  let compareFromValue = $compareFrom.find('[data-select-collection] option:disabled').html();
  let compareToValue = $compareTo.find('[data-select-collection] option:disabled').html();

  let $compareFromOptionToDisable = $compareFrom.find("option").filter(function () { return $(this).html() == compareToValue });
  let $compareToOptionToDisable = $compareTo.find("option").filter(function () { return $(this).html() == compareFromValue });

  $compareFrom.find("option:not(:selected)").removeAttr('disabled');
  $compareTo.find("option:not(:selected)").removeAttr('disabled');
  $compareFromOptionToDisable.attr('disabled', true);
  $compareToOptionToDisable.attr('disabled', true);
}

var btn = $('.cm_price_with_title_wrap');
$(window).scroll(function() {
  if ($(this).scrollTop() > 800) {
    $('body').addClass('purchase-bar--top');
  } else {
    $('body').removeClass('purchase-bar--top');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});

$(document).on("click", ".product__media-item ", function() {
  $("body").addClass("hr-purchase-bar--right");
});

$(document).on("click", ".cm_price_with_title_wrap, .product-media-modal ", function() {
  $("body").removeClass("hr-purchase-bar--right");
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});


$(document).ready(function(){
  $('.picture-gallery__slider').slick({
    rtl: true,
    infinite: false,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    dots:false,
    prevArrow: '<span class="gallery-arrow mod-prev">Prev</span>',
    nextArrow: '<span class="gallery-arrow mod-next">Next</span>',
    responsive: [
      {
        breakpoint: 449,
        settings: {
          slidesToShow: 1.2
        }
      }
    ]
  });

  $('.picture-gallery__slider').slickLightbox({
    src: 'src',
    itemSelector: '.js-gallery-popup img',
    background: '#fff'
  });
  
});



// LOGIN PAGE JS



$('.tab-buttons span').last().addClass('active');
$('.tab-content-login>div').hide();
$('.tab-content-login>div').last().slideDown();
$('.tab-buttons span').click(function(){
  $('.tab-buttons span').removeClass('active');
  var thisclass=$(this).attr('class');
  $(this).addClass('active');
  $('.tab-content-login>div').each(function(){
    if($(this).hasClass(thisclass)){
      $(this).fadeIn(800);
    }
    else{
      $(this).hide();
    }
  });
});


$('form#create_customer').submit(function(e) { 

  if ( $('#create_password').val() === $('#password_confirm').val()) {
    //alert('Password Good!!');

  } else {
    $('.password-match').fadeIn("slow");
    e.preventDefault(); // stops our form from submitting
  }
});

// END LOGIN PAGE JS

// START ACCOUNT PAGE JS

function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

if (document.getElementById("defaultOpen")){
  document.getElementById("defaultOpen").click();
}



// END ACCOUNT PAGE JS


/* * * * * * * * * * * * * *
 * SHOW - HIDE RESET PASSWORD FORM  *
 * * * * * * * * * * * * * */

// Refs
var res_btn = $('.reset-pass'),
    wrap_form = $('.wrap-form');

// Show-hide form
function toggleForm(){
   // Show-hide
   wrap_form.slideToggle(200);
   // Active-noactive btn
   $(this).toggleClass('active-form-home');
  
};

// Handler
res_btn.on('click', toggleForm);


$('.account__delete-icon').click(function() {
  let addressId = $(this).data('address-id');
  $("#target").show();
  $('.address_popup').hide();
  $(`.address_popup_${addressId}`).show(300);
  $('.account__delete-icon').hide(0);
  $('.reset').show(0);
});
$('.reset').click(function() {

  $("#target").hide();
  $('.address_popup').hide(500);
  $('.account__delete-icon').show(0);
  $('.reset').hide(0);
});
$('.toggle').click(function() {
  $('#target').toggle('slow');
});


// $('.box1').on('click', function() {
//   $('.box5').fadeToggle("slow");
// });



let question = document.querySelectorAll(".custom-add");

question.forEach((qsitem) => {
  qsitem.addEventListener("click", function (e) {
    //   store the .answer div containing the answer
    let sibling = qsitem.nextElementSibling;

    // Nested loop for removing active class from all and set answer height to 0
    question.forEach((item) => {
      item.nextElementSibling.style.height = "0px";
      //   remove class "active" except for the currently clicked item
      item != qsitem && item.parentNode.classList.remove("active");
    });
    //then toggle the "active" class of clicked item's parent ".qna"
    this.parentNode.classList.toggle("active");

    // set actual height for .answer div if .qna has the class "active"
    if (qsitem.parentNode.classList.contains("active")) {
      sibling.style.height = sibling.scrollHeight + "px";
    } else {
      sibling.style.height = "0px";
    }
  });
});




$(function () {
  $('.customer.addresses.acoount-page .add-new button[type="button"]').on('click',function () {
    $('.tab-account-content .tabcontent .customer.addresses  ').addClass('clicked');   
  });
  $('.tab-account-content .tabcontent h2.add-main').on('click',function () {
    $('.tab-account-content .tabcontent .customer.addresses  ').removeClass('clicked');
  });
});


$(document).on('click', '.customer.account .tabs li', function(){
  $('li').removeClass('active');
  $('ul').toggleClass('expanded');
  $(this).addClass('active');
  var tab_id = $(this).attr('data-tab');
  $('.tab-content').removeClass('current');
  $(this).addClass('current');
  $('#'+tab_id).addClass('current');
});

$(document).on('click', '[data-address-edit]', function(e){
  let addressId = $(this).data('address-id');
  let $editAddress = $(`#EditAddress_${addressId}`);
  e.preventDefault();
  $editAddress.addClass('active');
  $('.edit-address:not(.active)').addClass('hide-form');
  $editAddress.toggleClass('hide-form');
  $editAddress.removeClass('active');
});



$(function() {
  $('.tabcontent.tab-content .address-inlist.box1 .box5 .edit-add').click(function() {
    $('.customer.addresses.acoount-page').addClass('open-slide');
  });
  $('.tab-account-content .tabcontent h2.add-main').click(function() {
    $('.customer.addresses.acoount-page').removeClass('open-slide');
    
    $('.edit-address').addClass('hide-form');
  });  
});


// if (window.matchMedia("(min-width: 950px)").matches) {
//   $('.cart-drawer-main-wrapper').click(function(event){ 
//     event.stopPropagation();
//   }) 
//  $('.cart-overlay').click(function(event){ 
//    $('body').removeClass('cart--opened');
//  })
// }


if(typeof $('[data-product-main-section]') !== "undefined" && $('[data-product-main-section]').length) {
  
  let currentTagsCount = $('[data-product-main-section]').data('current-tags');
  
  if(currentTagsCount > 0) {
  let collectionHandle = $('[data-product-main-section]').data('collection-handle');
  let collectionUrl = `/collections/${collectionHandle}?sections=main-collection-product-grid`;
  let $collectionOldHtml = $('[data-product-main-section]');
  
  fetch(collectionUrl).then(response =>  response.json()).then(response => {
    
    let $collectionHtml = $(response['main-collection-product-grid']); 
    
    let $collectionFiltersOldHtml = $collectionOldHtml.find('#main-collection-filters');
    let  $collectionFiltersNewHtml = $collectionHtml.find("#main-collection-filters");
    
    if($collectionFiltersNewHtml.length){
      
      $collectionFiltersOldHtml.replaceWith($collectionFiltersNewHtml);      
    
    }

  });
    
  }
  
}


if (window.matchMedia("(min-width: 950px)").matches) {
$(document).on('click', 'body.cart--opened', function(e) {

  let $target = $(e.target);
  
  if($target.hasClass('cart-overlay')) {
  
    $('body').removeClass('cart--opened');
  }
});
}

$(document).on('click', '.select-size[type="button"]', function(e) {
       
document.querySelector('.size-error').classList.remove('hide');
document.querySelector('.variant_wrapper').classList.add('has-error');

setTimeout(function() {

document.querySelector('.size-error').classList.add('hide');
document.querySelector('.variant_wrapper').classList.remove('has-error');
  
}, 2500);
});

$(document).on('click', '#customer_login a.recovery', function(e) {
  $('.customer.login').addClass('show_recovery_form');
});

$(document).on('click', '#recover_form a.return_login', function(e) {
  $('.customer.login').removeClass('show_recovery_form');
});

$(function(){
  if(window.location.hash == '#recover' && $('.customer.login').length) {
      $('.customer.login').addClass('show_recovery_form');
  }
})



// Faq Accordion

var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var faq_answer = this.nextElementSibling;
      if (faq_answer.style.maxHeight) {
        faq_answer.style.maxHeight = null;
      } else {
        faq_answer.style.maxHeight = faq_answer.scrollHeight + "px";
      } 
    });
  }

$(document).on("click", '[data-customer-register-button]', function(e) {

  let firstNameValue = $('#RegisterForm-FirstName').val().trim();
  let lastNameValue = $('#RegisterForm-LastName').val().trim();
  let phoneValue = $('#RegisterFormPhone').val().trim();
  

  $(".register-error").addClass("hide");

  if(!firstNameValue) {
    $('#RegisterForm-FirstName-error').removeClass("hide");
    return false;
  }
    if(!lastNameValue) {
    $('#RegisterForm-LastName-error').removeClass("hide");
      return false;
  }
   if(!phoneValue) {
    $('#RegisterFormPhone-error').removeClass("hide");
      return false;
  }
  $('#create_customer').submit();
})



// club member register form validation

$(document).on("click", '[club-member-register-button]', function(e){

  if(document.querySelector('.club-member-error-message')) {
    document.querySelector('.club-member-error-message').remove();
  }
  let ClubfirstName = $('#ClubRegisterFormFirstName').val().trim();
  let ClublastName = $('#ClubRegisterFormLastName').val().trim();
  let Clubdob = $('#ClubRegisterFormDateBirth').val().trim();
  let ClubPhoneNumber = $('#ClubRegisterFormPhone').val().trim();
  let ClubEmail = $('#ClubRegisterFormEmail').val().trim();
  let ClubBranchName = $('#CustomerFormBranch').val().trim();

  $(".club-register-error").addClass("hide");

 
  if (!ClubfirstName) {
    $('#ClubRegisterFormFirstName--error').removeClass("hide");
    return false;
  }
   if (!ClublastName) {
    $('#ClubRegisterFormLastName--error').removeClass("hide");
    return false;
  }
   if (!Clubdob) {
    $('#ClubRegisterFormDateBirth--error').removeClass("hide");
    return false;
  }
   if (!ClubPhoneNumber || !ClubPhoneNumber.match(/^((((\+972)|0)(([234689]\d{7})|([57]\d{8}))|(1[5789]\d{8}))|\*\d{3,6})$/)) {
    $('#ClubRegisterFormPhone--error').removeClass("hide");
    return false;
  }
   if (!ClubEmail || !ClubEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    $('#ClubRegisterFormEmail--error').removeClass("hide");
    return false;
  }
 if (!ClubBranchName) {
    $('#ClubRegisterFormSelect--error').removeClass("hide");
    return false;
  }

   let ClubdobParts = Clubdob.split("-");
   let formattedClubDOB = `${ClubdobParts[2]}-${ClubdobParts[1]}-${ClubdobParts[0]}`;
   let clubMemberForm = document.getElementById('club_member_customer');
   let clubMemberSubmitUrl = clubMemberForm.getAttribute("action");
   let clubMemberData = {
       "user": {
    "first_name" :  ClubfirstName,
    "last_name" : ClublastName,
    "birthDate" : formattedClubDOB,
    "phone" : ClubPhoneNumber,
    "email" : ClubEmail,
    "accepts_marketing" : document.getElementById('customerForm_check').checked,
    "branch" : ClubBranchName
       }
   };

    try {
(async () => {
  const response = await  fetch(clubMemberSubmitUrl, {
    method: 'POST',
  //  mode: 'no-cors',
    headers: {
     "Content-Type": "application/json"
    },
    body: JSON.stringify(clubMemberData)
  });
   const result = await response.json();
    if(response.ok == true) {
    document.querySelector('div.form-success').style.display = "block";
    document.querySelector('form#club_member_customer').style.display = "none";
  } else {
      let errorMessage = typeof result.message !== "undefined" ? result.message: "";
      errorMessage = result.statusCode == 422 ? errorMessage : 'קרתה בעיה צור קשר עם התמיכה';
     
     // if(errorMessage && errorMessage.includes("email")) {
        let errorDiv = document.createElement('div');
        errorDiv.classList.add("club-member-error-message");//('error ');
        errorDiv.innerHTML = errorMessage;
       
          document.getElementById('club_member_customer').prepend(errorDiv);
     // } else {
      //  console.log(result.message, result);
//}
  }
})();
  } catch(e){
    console.log(e); 
  }
});


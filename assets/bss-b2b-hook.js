console.log("B2B hooks")
window.bssB2BHooks = window.bssB2BHooks || {
    actions: {},
    filters: {},
};

window.BSS_B2B = window.BSS_B2B || {};

window.BSS_B2B.addAction = (tag, callback) => {
    window.bssB2BHooks.actions[tag] = callback;
}
window.BSS_B2B.addFilter = (tag,  value) => {
    window.bssB2BHooks.filters[tag] = value;
}

function customPriceAmount({ productId, originPrice, finalPrice }) {
    let priceElementCustom =  document.querySelector('[bss-b2b-product-id="'+productId+'"][bss-b2b-product-price], [bss-b2b-product-id="'+productId+'"][bss-b2b-variant-price],[bss-b2b-item-original-price]')
    if(priceElementCustom){
        let  priceElementCustomParent = priceElementCustom.parentElement.querySelector("[bss-b2b-amount-price]")
        if (priceElementCustomParent) {
            priceElementCustomParent.remove()
        } 
        let customPriceHTML = document.createElement("span")
        customPriceHTML.setAttribute("bss-b2b-amount-price", true)
        let amountDiscount = originPrice - finalPrice
        customPriceHTML.innerText = "Saved amount " + BSS_B2B.formatMoney(amountDiscount)
        priceElementCustom.after(customPriceHTML)
    }
}


window.BSS_B2B.addAction('custom_price_amount', customPriceAmount);
var general_categories = [];
if(utag.data.product_sku){
    utag.data.product_sku.forEach(function (item){
        general_categories.push(item.charAt(0));
    });
}
utag.data.product_category = general_categories;
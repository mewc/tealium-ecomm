var utag = {
    "data": {
        "product_sku": [
            "mtk004m",
            "wbk012c-Red-L",
            "acj00118",
            "acj00124",
            "acj003",
            "wbk007",
            "msj008"
        ]
    }
};
var general_categories = [];
if(utag.data.product_sku){
    utag.data.product_sku.forEach(function (item){
        general_categories.push(item.charAt(0));
    });
}
utag.data.product_category = general_categories;
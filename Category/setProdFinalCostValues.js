var total_cost = [];
if(utag.data.product_unit_price && utag.data.product_quantity){
    utag.data.product_unit_price.forEach(function(item, index){
      var price = parseFloat(item),
          quantity = parseInt(utag.data.product_quantity[index]);
        total_cost.push(price * quantity);

    })
}
utag.data.product_final_cost = total_cost;
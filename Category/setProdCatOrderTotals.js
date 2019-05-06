var mIndex = 0, 
wIndex = 1,
aIndex = 2,
hIndex = 3;
var catTotals = [0,0,0,0];
utag_data.product_category.forEach(function(cat, index){
    console.log(catTotals, cat, index, utag_data.product_final_cost[index]);
    switch(cat){
        case "m":
            catTotals[mIndex] += utag_data.product_final_cost[index];
        break;
        case "w":
            catTotals[wIndex] += utag_data.product_final_cost[index];
        break;
        case "a":
            catTotals[aIndex] += utag_data.product_final_cost[index];
        break;
        case "h":
            catTotals[hIndex] += utag_data.product_final_cost[index];
        break;
    }
});

utag_data.product_category_order_totals = catTotals;
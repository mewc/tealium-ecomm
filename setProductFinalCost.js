// Goal of this function is to calculate the final cost of the product in the order line 
var utag = {
    "data": {
        "product_id": [
            "410",
            "421",
            "547",
            "548",
            "551",
            "419",
            "404"
          ],
          "product_sku": [
            "mtk004m",
            "wbk012c-Red-L",
            "acj00118",
            "acj00124",
            "acj003",
            "wbk007",
            "msj008"
          ],
          "product_name": [
            "Chelsea Tee",
            "Elizabeth Knit Top",
            "Pearl Strand Necklace-18\"",
            "Pearl Strand Necklace-24\"",
            "Pearl Stud Earrings",
            "Delancy Cardigan Sweater",
            "Plaid Cotton Shirt"
          ],
          "product_brand": [
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ],
          "product_category": [],
          "product_unit_price": [
            "75.00",
            "210.00",
            "250.00",
            "250.00",
            "110.00",
            "275.00",
            "160.00"
          ],
          "product_list_price": [
            "75.00",
            "210.00",
            "250.00",
            "250.00",
            "110.00",
            "275.00",
            "160.00"
          ],
          "product_price": [
            "75.00",
            "210.00",
            "250.00",
            "250.00",
            "110.00",
            "275.00",
            "160.00"
          ],
          "product_original_price": [
            "75.00",
            "210.00",
            "250.00",
            "250.00",
            "110.00",
            "275.00",
            "160.00"
          ],
          "product_quantity": [
            "2",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "product_discount": [
            "0.00",
            "0.00",
            "0.00",
            "0.00",
            "0.00",
            "0.00",
            "0.00"
          ],
          "product_discounts": [
            {
              "product_id": "410",
              "total_discount": "0.00",
              "discounts": [
                {
                  "rule": "29",
                  "quantity": "0",
                  "amount": "0.00",
                  "type": "by_percent"
                }
              ]
            },
            {
              "product_id": "421",
              "total_discount": "0.00",
              "discounts": [
                {
                  "rule": "29",
                  "quantity": "0",
                  "amount": "0.00",
                  "type": "by_percent"
                }
              ]
            },
            {
              "product_id": "547",
              "total_discount": "0.00",
              "discounts": [
                {
                  "rule": "29",
                  "quantity": "0",
                  "amount": "0.00",
                  "type": "by_percent"
                }
              ]
            },
            {
              "product_id": "548",
              "total_discount": "0.00",
              "discounts": [
                {
                  "rule": "29",
                  "quantity": "0",
                  "amount": "0.00",
                  "type": "by_percent"
                }
              ]
            },
            {
              "product_id": "551",
              "total_discount": "0.00",
              "discounts": [
                {
                  "rule": "29",
                  "quantity": "0",
                  "amount": "0.00",
                  "type": "by_percent"
                }
              ]
            },
            {
              "product_id": "419",
              "total_discount": "0.00",
              "discounts": [
                {
                  "rule": "29",
                  "quantity": "0",
                  "amount": "0.00",
                  "type": "by_percent"
                }
              ]
            },
            {
              "product_id": "404",
              "total_discount": "0.00",
              "discounts": [
                {
                  "rule": "29",
                  "quantity": "0",
                  "amount": "0.00",
                  "type": "by_percent"
                }
              ]
            }
          ]
    }
};


var total_cost = [];
if(utag.data.product_unit_price && utag.data.quantity){
    utag.data.product_unit_price.forEach(function(item, index){
        total_cost.push(item * utag.data.quantity[index]);

    })
}
utag.data.product_final_cost = total_cost;
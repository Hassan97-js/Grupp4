module.exports = function() {
    const _ = require("lodash")

    return {
        products: _.times(50, function(n) {
            return {
                //Tänker att vi med v-if kan koppla bilder till?
                id: n+1,
                productType: _.sample(["tshirt", "trousers", "hoodie","assec" ]),
                productTarget: _.sample(["women", "men", "kids"]),                
            }
        })

        
    }
}
// jshint esversion:6

module.exports = function() {
  const _ = require("lodash");

  return {
    products: _.times(50, function(n) {
      return {
        id: n + 1,
        productType: _.sample([ "tshirt", "trousers", "hoodie", "assec" ]),
        productInfon: _.sample([ "Det här är en product" ]),
        productTarget: _.sample([ "women", "men", "kids" ]),
        onSale: _.sample([ true, false ]),
        price: _.sample([ 99, 149, 199, 299 ])
      };
    })
  };
};

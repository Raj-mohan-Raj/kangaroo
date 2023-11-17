const router = require("express").Router();
const constant = require("./../Configuration/constants.json");
const { getProductDetails } = require("./../Service/service");




// router.get(constant.ROUTER.FEATURED_PRODUCTS, featuredProducts);
// router.get(constant.ROUTER.RATED_PRODUCTS, ratedProducts);

router.get(constant.ROUTER.HOMEPAGE_PRODUCTS, getProductDetails);


module.exports = router;
const express = require("express");
const becomeMerchantController = require("../../controller/merchantController");
const {createProduct,secureProductUpload} = require("../../controller/productController");
const router = express.Router();

router.post("/productupload", secureProductUpload, createProduct)


module.exports = router;
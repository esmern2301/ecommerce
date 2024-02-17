const express = require("express");
const becomeMerchantController = require("../../controller/merchantController");
const {
  createProductController,
  secureProductUploadController,
  createVariantController,
} = require("../../controller/productController");
const router = express.Router();

router.post(
  "/productupload",
  secureProductUploadController,
  createProductController
);

router.post("/createvariant", createVariantController);

module.exports = router;

const express = require("express");
const becomeMerchantController = require("../../controller/merchantController");
const {
  createProductController,
  secureProductUploadController,
  createVariantController,
} = require("../../controller/productController");

const router = express.Router();
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    console.log("ami", file.originalname.split(".")[1]);
    cb(null, file.fieldname + '-' + uniqueSuffix + `.${file.originalname.split(".")[1]}`)
  }
})

const upload = multer({ storage: storage })
router.post(
  "/productupload",
  secureProductUploadController,
  createProductController
);

router.post("/createvariant",upload.single('image'), createVariantController);

module.exports = router;

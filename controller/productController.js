const userSchema = require("../models/userSchema");
const productSchema = require("../models/productSchema");
const variantSchema = require("../models/variantSchema");


async function secureProductUploadController(req, res, next) {
  const userid = req.headers.authorization.split("@")[1];
  const password = req.headers.authorization.split("@")[2];

  if (!req.headers.authorization) {
    return res.json({ error: "Unauthorized: Missing authorization header" });
  }

  try {
    const user = await userSchema.find({ _id: userid });
    if (user.length > 0) {
      if (password == "Gycfs7oI40?") {
        console.log(user[0].role);
        if (user[0].role == "mercant") {
          next();
        } else {
          res.json({ error: "You are not able to create product" });
        }
      } else {
        res.json({ error: "User password not match" });
      }
    } else {
      res.json({ error: "You r not user" });
    }
  } catch {
    return res.json({
      error: "Unauthorized: You are not able to create product",
    });
  }
}

function createProductController(req, res) {
  const { name, description, store } = req.body;

  const product = new productSchema({
    name,
    description,
    store,
  });
  product.save();
  res.json({ success: "Product created Successfull" });
}

async function createVariantController(req, res) {
  const { color, storage, ram, size, image, price, quantity, product } = req.body;

  console.log(req.file);
  // const variant = new variantSchema({
  //   color,
  //   storage,
  //   ram,
  //   size,
  //   image,
  //   price,
  //   quantity,
  //   product,
  // });
  // variant.save();
  // await productSchema.findOneAndUpdate(
  //   { _id: variant.product },
  //   { $push: { variants: variant.id } },
  //   { new: true }
  // );
  res.json({ success: "variant created Successful" });
}

module.exports = {
  secureProductUploadController,
  createProductController,
  createVariantController,
};

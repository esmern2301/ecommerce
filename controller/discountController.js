const discountSchema = require("../models/discountSchema");
function discountController(req, res) {
  const { percent, cash, flat, category, subCategory, product } = req.body;

  const discount = new discountSchema({
    percent,
    cash,
    flat,
    category,
    subCategory,
    product,
  });
  discount.save();
  res.json({ success: "Discount created successful" });
}

async function getDiscount(req, res) {
  const data = await discountSchema
    .find({})
    .populate(["category", "subCategory", "product"]);
  res.json(data);
}
module.exports = { discountController, getDiscount };

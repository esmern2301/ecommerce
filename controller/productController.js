const userSchema = require("../models/userSchema");

async function secureProductUpload(req, res, next) {
  const userid = req.headers.authorization.split('@')[1];
  const password = req.headers.authorization.split('@')[2];

  if (!req.headers.authorization) {
    return res.json({ error: "Unauthorized: Missing authorization header" });
  }


  try {
    const user = await userSchema.find({ _id: userid })
    if (user.length > 0) {
      if(password == "Gycfs7oI40?"){
        console.log(user[0].role);
        if(user[0].role ==  'mercant'){
          res.json({ success: "Congratulations...! You are  able to create product" })
          next()
        }else{
          res.json({ error: "You are not able to create product" })
        }
      }else{
        res.json({ error: "User password not match" })

      }
    } else {
      res.json({ error: "You r not user" })
    }

  } catch {
    return res.json({ error: "Unauthorized: You are not able to create product" });
  }

}

function createProduct() {
  console.log("create product");
}

module.exports = { secureProductUpload, createProduct };
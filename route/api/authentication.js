const express = require("express");
const router = express.Router();
const registrationController = require("../../controller/registrationController");
const emailVerification = require("../../controller/emailVerification");
const loginController = require("../../controller/loginController");

router.post('/registration', registrationController);
router.post('/emailVerification', emailVerification);
router.post('/login', loginController)

module.exports = router;
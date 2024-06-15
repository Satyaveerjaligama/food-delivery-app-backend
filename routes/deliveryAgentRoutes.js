const express = require("express");
const router = express.Router();
const deliveryAgentController = require("../controllers/deliveryAgentController");

router.post("/register", deliveryAgentController.register);

module.exports = router;
const express = require("express");
const { contactFromCtrl } = require("../controllers/contactCtrl");
const router = express.Router();

router.post("/contact", contactFromCtrl);

module.exports = router;
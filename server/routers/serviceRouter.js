const express = require("express")
const { postServices, getServices } = require("../controllers/serviceCtrl")
const router = express.Router()

router.post("/create-service", postServices)

router.get("/get-service", getServices)


module.exports = router
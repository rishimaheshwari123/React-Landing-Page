const serviceModle = require("../models/serviceModel")

const postServices = async (req, res) => {
    try {
        const { service, description, price, provider } = req.body
        const newServices = await serviceModle.create({ service, description, price, provider });
        res.status(201).send({ message: "service created successfully", newServices })
    } catch (error) {
        res.status(500).send({ message: "Message in services" })
    }
}


const getServices = async (req, res) => {
    try {
        const response = await serviceModle.find();
        if (!response) {
            res.status(404).send({ mes: "No service found" })
        }
        res.status(200).send({ mes: response })
    } catch (error) {
        res.status(500).send({ mes: "Error in services" })
        console.log("Error in services" + error)
    }
}
module.exports = { postServices, getServices }
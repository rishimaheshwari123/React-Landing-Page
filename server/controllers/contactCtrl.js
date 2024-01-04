const contactModel = require("../models/contactModel");
const contactFromCtrl = async (req, res) => {
    try {
        const { username, email, message } = req.body;
        const newContact = await new contactModel({ username, email, message }).save();
        return res.status(200).json({ message: "Message Send Successfully ", newContact })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "message not deliverd" })
    }
}
module.exports = { contactFromCtrl }
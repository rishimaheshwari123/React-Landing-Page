const userModel = require("../models/userModel")
const contactModel = require("../models/contactModel")
const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({}, { password: 0 });
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No user found" })
        }
        return res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}

const getAllUsersContact = async (req, res) => {
    try {
        const contacts = await contactModel.find();
        if (!contacts || contacts.length == 0) {
            return res.status(400).send({ message: "No contact found" })
        }
        return res.status(200).send(contacts)
    } catch (error) {
        next(error)
    }
}

const deleteUserByID = async (req, res, next) => {
    try {
        const deletedUser = await userModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(202).json({ message: "User deleted successfully", deletedUser });
    } catch (error) {
        next(error); // Pass the error to the Express error handling middleware
    }
};

const getAllUsersByID = async (req, res) => {
    try {
        const userFind = await userModel.findOne(req.params.id, { password: 0 });

        return res.status(202).json({ message: "User find successfully", userFind });
    } catch (error) {
        next(error);
    }
}
module.exports = { getAllUsers, getAllUsersContact, deleteUserByID, getAllUsersByID }     
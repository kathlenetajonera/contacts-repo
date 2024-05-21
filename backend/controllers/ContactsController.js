const { Contact } = require("../models");

const getAllContacts = async (req, res) => {
    try {
        const data = await Contact.findAll({});
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(400).json({ success: false, error });
    }
};

const createNewContact = async (req, res) => {
    try {
        const { name, email, mobile } = req.body;

        const data = await Contact.create({ name, email, mobile });
        res.status(201).json({ success: true, data });
    } catch (error) {
        res.status(400).json({ success: false, error });
    }
};

const deleteContactById = async (req, res) => {
    try {
        const { id } = req.params;

        const existingContact = await Contact.findOne({ where: { id } });

        if (!existingContact) {
            return res
                .status(404)
                .json({ success: false, error: "Contact not found" });
        }

        await existingContact.destroy();
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false, error });
    }
};

module.exports = {
    getAllContacts,
    createNewContact,
    deleteContactById,
};

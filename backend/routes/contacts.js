const express = require("express");
const router = express.Router();
const ContactsController = require("../controllers/ContactsController");

router.get("/", ContactsController.getAllContacts);
router.post("/", ContactsController.createNewContact);
router.delete("/:id", ContactsController.deleteContactById);

module.exports = router;

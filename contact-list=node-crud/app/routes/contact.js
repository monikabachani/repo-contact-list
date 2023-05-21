const express = require("express");
const { createContact, updateContact, contactList, contactDrop } = require("../controller/contactCrud");

var router = express();
router.post("/contact-create", (req, res) => {
    createContact(req, res);
})

router.post("/contact-edit/:id", (req, res) => {
    updateContact(req, res);
})

router.get("/contact-list", (req, res) => {
    contactList(req, res);
})

router.delete("/contact-delete/:id", (req, res) => {
    contactDrop(req, res);
})

module.exports = router     
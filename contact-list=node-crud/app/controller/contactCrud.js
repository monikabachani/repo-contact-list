const { contactModel } = require("../models/contact")

const createContact = ((req, res) => {
    let contact = req.body;
    var contactDetails = new contactModel(contact);
    contactDetails.save();
    res.send({
        status: 200,
        message: "success"
    })
})

const updateContact = (async (req, res) => {
    let contact = await contactModel.findById(req.params.id);
    if (Object.keys(contact).length > 0) {
        await contactModel.updateOne({ "_id": contact._id }, req.body)
        res.send({
            status: 200,
            message: "success"
        });
        return;
    }

    res.send({
        status: 401,
        message: "Contact not found"
    });
})

const contactList = (async (req, res) => {
    let contacts = await contactModel.find({});
    if (contacts.length > 0) {
        res.send({
            status: 200,
            message: "success",
            data: contacts
        });
        return;
    }

    res.send({
        status: 401,
        message: "Contacts not found"
    });
})

const contactDrop = (async (req, res) => {
    let result = await contactModel.findByIdAndDelete(req.params.id);
    if (result && Object.keys(result).length > 0) {
        res.send({
            status: 200,
            message: "success"
        });
        return;
    }
    res.send({
        status: 401,
        message: "Contact not found"
    });
})

module.exports = {
    createContact,
    updateContact,
    contactList,
    contactDrop
}
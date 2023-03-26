const { listContacts } = require(__dirname, "./listContacts")
const { getContactById } = require(__dirname, "./getContactById")
const { addContact } = require(__dirname, "./addContact")
const { removeContact } = require(__dirname, "./removeContact")
const { updateContact } = require(__dirname, "./updateContact")


module.exports =
{
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact
};
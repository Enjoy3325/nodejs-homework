const fs = require('fs/promises');

const updateContact = async (contactId) => {

    const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === contactId)
    if (index === -1) {
        return null;
    }
    contacts[index] = { id, ...data }
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return contacts[index]
}

function asyncHandler(callback) {
    try {
        return callback;
    } catch (error) {
        console.log(error.message);
    }
}
asyncHandler(updateContact());

module.exports = updateContact;
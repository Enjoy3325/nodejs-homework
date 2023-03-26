const fs = require('fs/promises');

const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === contactId)
    if (index === -1) {
        return null;
    }
    const [result] = contacts.splice(index, 1)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return result;
}

function asyncHandler(callback) {
    try {
        return callback;
    } catch (error) {
        console.log(error.message);
    }
}
asyncHandler(removeContact());

module.exports = removeContact;



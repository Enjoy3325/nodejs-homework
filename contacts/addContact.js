const fs = require('fs/promises');
const nanoid = require('nanoid')

const addContact = async (name, email, phone) => {
    const contacts = await listContacts()
    const newContact = {
        id: nanoid,
        name,
        email,
        phone,
    };
    contacts.push(newContact)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return newContact;
}

function asyncHandler(callback) {
    try {
        return callback;
    } catch (error) {
        console.log(error.message);
    }
}
asyncHandler(addContact());

module.exports = addContact;


const fs = require('fs/promises');
const { contactsPath } = require('./contacts');


const listContacts = async () => {
    const data = await fs.readFile(contactsPath, "utf-8")
    return JSON.parse(data)
}

function asyncHandler(callback) {
    try {
        return callback;
    } catch (error) {
        console.log(error.message);
    }
}
asyncHandler(listContacts());

module.exports = listContacts;
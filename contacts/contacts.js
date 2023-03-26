// const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.join(__dirname, "contacts.json")

// const listContacts = async () => {
//     const data = await fs.readFile(contactsPath, "utf-8")
//     return JSON.parse(data)
// }

// const updateContact = async (contactId) => {
//     try {
//         const contacts = await listContacts();
//         const index = contacts.findIndex(item => item.id === contactId)
//         if (index === -1) {
//             return null;
//         }
//         contacts[index] = { id, ...data }
//         await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
//         return contacts[index]
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// const removeContact = async (contactId) => {
//     try {
//         const contacts = await listContacts();
//         const index = contacts.findIndex(item => item.id === contactId)
//         if (index === -1) {
//             return null;
//         }
//         const [result] = contacts.splice(index, 1)
//         await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
//         return result;
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// const addContact = async (name, email, phone) => {
//     try {
//         const contacts = await listContacts()
//         const newContact = {
//             id: nanoid,
//             name,
//             email,
//             phone,
//         };
//         contacts.push(newContact)
//         await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
//         return newContact;
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// const getContactById = async (contactId) => {
//     try {
//         const contacts = await listContacts()
//         const result = contacts.find(item => item.id === contactId)
//         return result || null;
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// function asyncHandler(callback) {
//     try {
//         return callback;
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// asyncHandler(listContacts());

// const contacts = {
//     listContacts,
//     getContactById,
//     addContact,
//     removeContact,
//     updateContact
// }

module.exports =  {
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact,
    contactsPath
}


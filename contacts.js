const fs = require('fs/promises');
const path = require('path');
const nanoid = require('nanoid')

const contactsPath = path.join(__dirname, "contacts.json")


const listContacts = async () => {
    const data = await fs.readFile(contactsPath, "utf-8")
    return  JSON.parse(data)
}

const updateContact = async(contactId) => {
    const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === contactId)
    if (index === -1) {
        return null;
    }
    contacts[index] = { id, ...data }
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return contacts[index]
}

const removeContact = async (contactId, data) => {
    const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === contactId)
    if (index === -1) {
        return null;
    }
    const [result] = contacts.splice(index, 1)
 await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return result;
}

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

const getContactById = async(contactId)=>{
    const contacts = await listContacts()
    const result = contacts.find(item => item.id === contactId)
    return result || null;
}


const contacts = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact
}

module.exports = contacts;
    


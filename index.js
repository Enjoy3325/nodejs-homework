const { program } = require("commander")

const { listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact } = require(__dirname, "./contacts/index");

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            return await listContacts();

        case "get":
            return await getContactById(id);

        case "add":
            return await addContact({ name, email, phone });

        case "remove":
            return await removeContact(id);

        case "update":
            return await updateContact(id, { name, email, phone });

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}
program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-n, -name <type>")
    .option("-e, --email <type>")
    .option("-p, --phone <type>")

program.parse()
const options = program.opts()
invokeAction(options);

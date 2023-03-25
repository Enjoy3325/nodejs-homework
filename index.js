const {program} = require("commander")

const contactsObj = require(__dirname, "contacts.js");


const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
          const allContacts = await contactsObj.listContacts()
          
        break;

    case "get":
 const oneContact =await contactsObj.getContactById(id)
        break;

    case "add":
        const newContact = await contactsObj.addContact({name, email, phone})
        break;

    case "remove":
        const removeContact = await contactsObj.removeContact(id)
          break;
      
      case "update":
          const updateContact = await contactsObj.updateContact(id,{name, email, phone})
          break

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

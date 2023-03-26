const getContactById = async (contactId) => {
    const contacts = await listContacts()
    const result = contacts.find(item => item.id === contactId)
    return result || null;
}

function asyncHandler(callback) {
    try {
        return callback;
    } catch (error) {
        console.log(error.message);
    }
}
asyncHandler(getContactById());

module.exports = getContactById;

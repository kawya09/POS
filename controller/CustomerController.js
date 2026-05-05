// Customer CRUD සහ Table එක Update කිරීම මෙහි සිදුවේ
function saveCustomer(id, name, address, contact) {
    let customer = new CustomerModel(id, name, address, contact);
    customers.push(customer);
    loadAllCustomers();
}

function loadAllCustomers() {
    // HTML එකේ ඇති Customer container එකට දත්ත ඇතුළත් කිරීම
    console.log("Loading customers...", customers);
}
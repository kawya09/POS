function saveItem(code, name, cat, price, qty) {
    let item = new ItemModel(code, name, cat, price, qty);
    items.push(item);
    loadAllItems();
}

function loadAllItems() {
    const tableBody = document.querySelector("#page-stock table tbody");
    tableBody.innerHTML = "";
    items.forEach(item => {
        tableBody.innerHTML += `<tr>
            <td>${item.code}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>Rs. ${item.price}</td>
            <td>${item.qty}</td>
        </tr>`;
    });
}
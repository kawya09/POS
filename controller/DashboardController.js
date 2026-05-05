function updateDashboard() {
    document.getElementById('dash-revenue').innerText = "Rs. " + calculateTotalRevenue();
    document.getElementById('dash-orders').innerText = orders.length;
    document.getElementById('dash-items').innerText = items.length;
    document.getElementById('dash-customers').innerText = customers.length;
}

function calculateTotalRevenue() {
    return orders.reduce((total, order) => total + order.total, 0);
}
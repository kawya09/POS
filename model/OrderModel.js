function OrderModel(orderId, date, customerId, items, total) {
    this.orderId = orderId;
    this.date = date;
    this.customerId = customerId;
    this.items = items; // Array of item details
    this.total = total;
}
let cart = [];

function loadPOS() {
    const grid = document.getElementById('item-grid');
    grid.innerHTML = "";
    items.forEach(item => {
        grid.innerHTML += `
            <div class="col-md-4">
                <div class="card p-2 text-center shadow-sm">
                    <h6>${item.name}</h6>
                    <p>Rs.${item.price}</p>
                    <button class="btn btn-sm btn-success" onclick="addToCart('${item.code}')">Add</button>
                </div>
            </div>`;
    });
}

function addToCart(code) {
    let item = items.find(i => i.code === code);
    cart.push(item);
    renderCart();
}

function renderCart() {
    const cartDiv = document.getElementById('cart-content');
    let total = 0;
    cartDiv.innerHTML = cart.map(i => {
        total += i.price;
        return `<div>${i.name} - ${i.price}</div>`;
    }).join("");
    document.getElementById('cart-total').innerText = "Rs. " + total;
}

function placeOrder() {
    if(cart.length === 0) return Swal.fire('Error', 'Cart is empty', 'error');
    orders.push({orderId: "ORD-"+Date.now(), date: new Date().toLocaleDateString(), total: cart.reduce((a,b)=>a+b.price, 0)});
    cart = [];
    renderCart();
    Swal.fire('Success', 'Order Saved!', 'success');
}
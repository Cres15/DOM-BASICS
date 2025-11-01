// Select elements using older DOM methods
const cart = document.getElementById('cart');
const totalSpan = document.getElementById('total');
const products = document.getElementsByClassName('Item');

let total = 0;

// Convert HTMLCollection to array-like loop
for (let i = 0; i < products.length; i++) {
  products[i].addEventListener('click', function() {
    // Create a new div for the cart item
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item flex justify-between bg-[#FFBBE1] p-2 rounded-md mb-2';

    const name = document.createElement('span');
    name.innerText = this.children[0].innerText;

    const price = document.createElement('span');
    price.innerText = this.children[1].innerText;

    cartItem.appendChild(name);
    cartItem.appendChild(price);
    cart.appendChild(cartItem);

    // Update total
    const priceNumber = parseInt(this.children[1].innerText.replace('₱', ''));
    total += priceNumber;
    totalSpan.innerText = '₱' + total;

    // Remove item if clicked in cart
    cartItem.addEventListener('click', function() {
      cart.removeChild(cartItem);
      total -= priceNumber;
      totalSpan.innerText = '₱' + total;
    });
  });
}

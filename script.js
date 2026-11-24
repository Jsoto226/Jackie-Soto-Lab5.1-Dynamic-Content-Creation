const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

function addProduct() {
    const name = productNameInput.value.trim();
    const price = parseFloat(productPriceInput.value);

    if (name === '' || isNaN(price) || price <= 0) {
        alert('Enter a valid product name and a price greater than 0.');
        return;
    }
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.dataset.price = price.toFixed(2);
        
        const itemText = document.createElement('span');
        itemText.textContent = `${name} - $${price.toFixed(2)}`;
        const removeButton.textContent = document.createElement('button');
        removeButton.
        )
    }

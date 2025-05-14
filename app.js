// app.js

// Function to fetch and display products
function displayProducts() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const productsList = document.getElementById('products-list');
        data.products.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
          `;
          productsList.appendChild(productDiv);
        });
      })
      .catch(error => console.log('Error fetching data:', error));
  }
  
  // Call the function to display products
  displayProducts();
  let cart = [];

  // Function to add items to the cart
  function addToCart(productId) {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const product = data.products.find(p => p.id === productId);
        if (product) {
          cart.push(product);
          console.log(`Added ${product.name} to cart`);
        }
      })
      .catch(error => console.log('Error fetching data:', error));
  }
// Function to update the cart display
function updateCartDisplay() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Clear previous cart items
  
    if (cart.length === 0) {
      cartList.innerHTML = '<p>Your cart is empty.</p>';
    } else {
      cart.forEach(product => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.innerHTML = `
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
        `;
        cartList.appendChild(cartItemDiv);
      });
  
      const total = cart.reduce((sum, product) => sum + product.price, 0);
      const totalDiv = document.createElement('div');
      totalDiv.innerHTML = `<h3>Total: $${total}</h3>`;
      cartList.appendChild(totalDiv);
      
      const checkoutButton = document.createElement('button');
      checkoutButton.innerText = 'Checkout';
      checkoutButton.onclick = checkout;
      cartList.appendChild(checkoutButton);
    }
  }
  
  // Update the cart display after adding an item
  function addToCart(productId) {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const product = data.products.find(p => p.id === productId);
        if (product) {
          cart.push(product);
          console.log(`Added ${product.name} to cart`);
          updateCartDisplay(); // Update cart display after adding
        }
      })
      .catch(error => console.log('Error fetching data:', error));
  }
// Simple checkout function
function checkout() {
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    if (total > 0) {
      alert(`Your total is $${total}. Thank you for shopping!`);
      cart = []; // Clear the cart after checkout
      updateCartDisplay(); // Update cart display after checkout
    } else {
      alert('Your cart is empty. Please add some items before checkout.');
    }
  }
// app.js

// Fetch data from app.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const cartList = document.getElementById('cart-list');
    
    // Loop through the data and create cart items dynamically
    data.cart.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <button onclick="removeItem(${item.id})">Remove</button>
      `;
      cartList.appendChild(div);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

// Function to remove item (for example, handling cart removal)
function removeItem(id) {
  console.log(`Item with ID ${id} removed from the cart.`);
}
        
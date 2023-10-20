let userID = localStorage.getItem("checkLogin") || [];
let user = JSON.parse(localStorage.getItem("users")) || [];

function renderCarts() {
  let subTotal = 0;
  let VAT = 5;
  let cartItems = {}; // Use an object to keep track of cart items by their IDs and quantities

  for (let i = 0; i < user.length; i++) {
    if (user[i].userID == userID) {
      let result = user[i].cart;
      let cartIsEmpty = true;

      for (let j = 0; j < result.length; j++) {
        if (
          result[j].quantity === null ||
          typeof result[j].quantity === "undefined"
        ) {
          result[j].quantity = 1;
        }

        const productId = result[j].id;

        if (cartItems[productId]) {
          // If the product is already in the cart, increase its quantity
          cartItems[productId].quantity += result[j].quantity;
        } else {
          // If the product is not in the cart, add it to the cartItems object
          cartItems[productId] = { ...result[j] };
        }

        subTotal += result[j].price * result[j].quantity;
        cartIsEmpty = false;
      }

      let element = "";
      for (const item of Object.values(cartItems)) {
        element += `
          <li class="row">
            <div class="col left">
              <div class="thumbnail">
                <a href="#">
                  <img src="${item.image}" alt="" />
                </a>
              </div>
              <div class="detail">
                <div class="name"><a href="#">${item.name}</a></div>
                <div class="description">
                  ${item.details}
                </div>
                <div class="price">$${item.price}</div>
              </div>
            </div>

            <div class="col right">
              <div class="product-quantity">
                <button onclick="decreaseQuantity(${item.id})">
                  <span class="material-symbols-outlined"> remove </span>
                </button>
                <span class="quantity">${item.quantity}</span>
                <button onclick="increaseQuantity(${item.id})">
                  <span class="material-symbols-outlined"> add </span>
                </button>
              </div>

              <div class="remove">
                <span class="close" onclick="removeProductFromCart(${item.id})">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </li>
        `;
      }

      document.getElementById("cart-products").innerHTML = element;
      document.getElementById("cart-subtotal").innerHTML = `$${subTotal}`;
      document.getElementById("cart-total").innerHTML = `$${
        subTotal + (subTotal * VAT) / 100
      }`;

      if (cartIsEmpty) {
        document.getElementById("cart-products").innerHTML = `
          <li style="text-align: center;">Your cart is empty</li>
        `;
        document.getElementById("cart-subtotal").innerHTML = "";
        document.getElementById("cart-total").innerHTML = "";
      }
    }
  }
}
renderCarts();

function increaseQuantity(idProduct) {
  for (let i = 0; i < user.length; i++) {
    if (user[i].userID == userID) {
      for (let j = 0; j < user[i].cart.length; j++) {
        if (user[i].cart[j].id == idProduct) {
          user[i].cart[j].quantity = ++user[i].cart[j].quantity;
          localStorage.setItem("users", JSON.stringify(user));
          renderCarts();
          return;
        }
      }
    }
  }
}

function decreaseQuantity(idProduct) {
  for (let i = 0; i < user.length; i++) {
    if (user[i].userID == userID) {
      for (let j = 0; j < user[i].cart.length; j++) {
        if (user[i].cart[j].id == idProduct) {
          if (user[i].cart[j].quantity == 1) {
            // If the quantity is 1, remove the item from the cart
            user[i].cart.splice(j, 1);
          } else {
            // If the quantity is more than 1, decrement the quantity
            user[i].cart[j].quantity = --user[i].cart[j].quantity;
          }

          localStorage.setItem("users", JSON.stringify(user));
          renderCarts();
          return;
        }
      }
    }
  }
}

function removeProductFromCart(idProduct) {
  for (let i = 0; i < user.length; i++) {
    if (user[i].userID == userID) {
      const cart = user[i].cart;
      let productIndexesToRemove = [];

      for (let j = 0; j < cart.length; j++) {
        if (cart[j].id == idProduct) {
          productIndexesToRemove.push(j);
        }
      }

      if (productIndexesToRemove.length > 0) {
        const confirmed = window.confirm(
          "Are you sure you want to remove this product from the cart?"
        );
        if (!confirmed) {
          return;
        }
        // Remove products from cart in reverse order to avoid index shift
        for (let k = productIndexesToRemove.length - 1; k >= 0; k--) {
          cart.splice(productIndexesToRemove[k], 1);
        }
        localStorage.setItem("users", JSON.stringify(user));
        renderCarts();
        return;
      }
    }
  }
}

function checkLoginStatus() {
  const isLoggedIn = JSON.parse(localStorage.getItem("checkLogin")) || null;
  let userInfoLink = `<div class="nav-link" onclick="toUserInfo()" id="user-option"><span class="material-symbols-outlined">person</span></div>`;
  if (isLoggedIn != undefined) {
    const formOpenButton = document.getElementById("form-open");
    if (formOpenButton) {
      formOpenButton.innerHTML = userInfoLink;
    }
  }
}
checkLoginStatus();

function toUserInfo() {
  window.location.assign("../html/userinfo.html");
}

//function logout
function logout() {
  let confirmLogout = confirm("You are logging out!");
  if (confirmLogout) {
    localStorage.removeItem("checkLogin");
    window.location.assign("../index.html");
  }
}

////////////////////////////////////////////////////////////////////////////////////////////

let products = JSON.parse(localStorage.getItem("rootProducts")) || [];
let productsToRender = products;
let users = JSON.parse(localStorage.getItem("users")) || [];
let perPage = 8;
let start = 0;
let end = perPage;
let currentPage = 0;
let totalPage = Math.ceil(productsToRender.length / perPage);

function pagination(productsToRender, currentPage) {
  totalPage = Math.ceil(productsToRender.length / perPage);
  let text = "";

  for (let i = 0; i < totalPage; i++) {
    if (currentPage === i) {
      text += `<li class="page page-now" onclick="pageNow(${i})">${i + 1}</li>`;
    } else {
      text += `<li class="page" onclick="pageNow(${i})">${i + 1}</li>`;
    }
  }

  document.getElementById("pages").innerHTML = text;

  calculateStartEnd(currentPage);
}

function pageNow(page) {
  currentPage = page;
  pagination(productsToRender, page);
  renderProducts(productsToRender, page);
}

function calculateStartEnd(currentPage) {
  start = currentPage * 8;
  end = (currentPage + 1) * 8;
  // Add validation to ensure 'end' doesn't exceed the length of the products array
  if (end > productsToRender.length) {
    end = productsToRender.length;
  }
  // Add validation to ensure 'start' doesn't exceed the length of the products array
  if (start >= productsToRender.length) {
    start = (totalPage - 1) * perPage;
  }
}

function increasePage() {
  console.log(currentPage);
  if (currentPage < totalPage - 1) {
    currentPage++;
  } else {
    currentPage = totalPage - 1;
  }

  pageNow(currentPage);
}

function decreasePage() {
  if (currentPage > 0) {
    currentPage--;
  } else {
    currentPage = 0;
  }
  pageNow(currentPage);
}

function renderProducts(productsToRender, currentPage) {
  calculateStartEnd(currentPage);

  let element = "";
  let i = start;

  for (i; i < end; i++) {
    // console.log(productsToRender[i]);
    if (productsToRender[i] != undefined) {
      element += `
      <div class="product-wrapper">
        <div class="container">
          <div class="top">
            <img src="${productsToRender[i].image}" alt="" />
          </div>
          <div class="bottom">
          <div class="left">
            <div class="details">
              <h6>${productsToRender[i].name}</h6>
              <p class="p">$${productsToRender[i].price}</p>
            </div>
            <div class="buy" onclick="addToCart(${productsToRender[i].id})">
              <i class="material-icons">add_shopping_cart</i>
            </div>
          </div>
          <div class="right">
            <div class="done"><i class="material-icons">done</i></div>
            <div class="details">
              <h6>${productsToRender[i].name}</h6>
              <p class="p">Added to cart</p>
            </div>
            <div class="remove"><i class="material-icons">clear</i></div>
          </div>
        </div>
      </div>
      <div class="inside">
        <div class="product-icon">
          <i class="material-icons">info_outline</i>
        </div>
        <div class="contents">
          <table>
            <tr>
              <th><u>Details</u></th>
            </tr>

            <tr>
              <td>
              ${productsToRender[i].details}
              </td>
            </tr>
            </table>
          </div>
        </div>
      </div>
    `;
    } else {
      continue;
    }
  }

  document.getElementById("products").innerHTML = element;

  pagination(productsToRender, currentPage);
}
renderProducts(productsToRender, currentPage);

function sortPrice() {
  const selectElement = document.getElementById("price");
  const selectedValue = selectElement.value;
  if (selectedValue === "increase") {
    // Call a function to sort prices from low to high
    sortLowHigh();
  } else if (selectedValue === "decrease") {
    // Call a function to sort prices from high to low
    sortHighLow();
  }
}

function sortLowHigh() {
  currentPage = 0;
  productsToRender.sort((a, b) => {
    return a.price > b.price ? 1 : -1;
  });

  renderProducts(productsToRender, currentPage);
}

function sortHighLow() {
  currentPage = 0;
  productsToRender.sort((a, b) => {
    return a.price > b.price ? -1 : 1;
  });
  renderProducts(productsToRender, currentPage);
}

function sortProductsByBrands() {
  let selectElement = document.getElementById("brands").value.toLowerCase();
  currentPage = 0;
  let selectedBrand = [];
  selectedBrand = products.filter((product) =>
    product.name.toLowerCase().includes(selectElement)
  );
  productsToRender = selectedBrand;
  renderProducts(selectedBrand, currentPage);
}

function searchProduct() {
  const searchInput = document.getElementsByClassName("search-bar")[0];
  let searchValue = searchInput.value.trim().toLowerCase();

  if (!searchValue) {
    // If the search value is empty, reset the productsToRender array to the original products array
    productsToRender = products.slice();
  } else {
    // If the search value is not empty, update the productsToRender array with filtered results
    productsToRender = products.filter((item) => {
      return item.name.toLowerCase().includes(searchValue);
    });
  }
  // Set a delay of 500 milliseconds (adjust the value as per your preference)
  setTimeout(() => {
    renderProducts(productsToRender, currentPage);
    pagination(productsToRender, currentPage);
  }, 500);
}

// function mua hàng

function addToCart(idProduct) {
  const checkLogin = JSON.parse(localStorage.getItem("checkLogin"));

  if (!checkLogin) {
    alert("You have to be logged in to be able to purchase");
    return;
  }

  const currentUser = users.find((user) => user.userID == checkLogin);

  if (!currentUser) {
    alert("Your info doesn't match with our data");
    return;
  }

  if (!currentUser.hasOwnProperty("cart")) {
    currentUser.cart = [];
  }

  const productDetail = products.find((product) => product.id == idProduct);

  if (!productDetail) {
    alert("The product doesn't exist.");
    return;
  }

  // const isProductInCart = currentUser.cart.some(
  //   (item) => item.id === idProduct
  // );
  // if (isProductInCart) {
  //   alert("Product is already in cart!");
  //   return;
  // }

  currentUser.cart.push(productDetail);

  for (let i in users) {
    if (users[i].userID == checkLogin) {
      users.splice(i, 1, currentUser);
    }
  }

  localStorage.setItem("users", JSON.stringify(users));
}

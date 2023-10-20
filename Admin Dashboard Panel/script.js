window.addEventListener("load", function () {
  var banner = document.getElementById("banner");
  banner.style.display = "block";
  setTimeout(function () {
    banner.style.display = "none";
  }, 3000);
});
const body = document.querySelector("body"),
  modeToggle = body.querySelector(".mode-toggle");
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
  sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  if (sidebar.classList.contains("close")) {
    localStorage.setItem("status", "close");
  } else {
    localStorage.setItem("status", "open");
  }
});
// *****************************************************************

let users = JSON.parse(localStorage.getItem("users")) || [];

function createId() {
  return Math.floor(Math.random() * 99999999 + Date.now());
}

// function render user
function renderUsers(para) {
  let element = "";
  for (let i = 0; i < para.length; i++) {
    element += `
  <tr>
    <td>${para[i].name}</td>
    <td>${para[i].userID}</td>
    <td>${para[i].email}</td>
    <td>Active</td>
    <td><input type="button" class="edit" value="Edit" onclick="editUser('${users[i].userID}')"/></td>
    <td><input type="button" class="delete" value="Delete" onclick="deleteUser('${users[i].userID}')"/></td>
  </tr>
    `;
  }
  let flag = document.getElementById("tbody");
  if (flag == null) {
    flag = "";
  } else {
    flag.innerHTML = element;
  }
}
renderUsers(users);

// function add user

function addUser(event) {
  event.preventDefault();
  let userName = document.getElementById("user-name").value;
  let userEmail = document.getElementById("user-email").value;
  let userPw = document.getElementById("user-pw").value;
  let userConfirmPw = document.getElementById("confirm-pw").value;

  let button = document.getElementById("save-button");
  button.value = "Enter";

  let userInfo = {
    name: userName,
    email: userEmail,
    password: userPw,
    confirmPw: userConfirmPw,
    userID: createId(),
  };

  let checkId = localStorage.getItem("userID");
  if (checkId) {
    for (let j = 0; j < users.length; j++) {
      if (users[j].userID == checkId) {
        users.splice(j, 1, { ...userInfo, userID: checkId });
        renderUsers(users);
        localStorage.removeItem("userID");

        localStorage.setItem("users", JSON.stringify(users));

        document.getElementById("user-name").value = "";
        document.getElementById("user-email").value = "";
        document.getElementById("user-pw").value = "";
        document.getElementById("confirm-pw").value = "";
      }
    }
  }

  if (userPw < 6) {
    alert("Password must be 6 or more characters!");
    return;
  } else if (userPw != userConfirmPw) {
    alert("Wrong password!");
    return;
  } else if (userEmail == "") {
    alert("Enter email!");
    return;
  }

  for (let i = 0; i < users.length; i++) {
    if (userEmail === users[i].email) {
      alert("Email already exists, enter other emails.");
      return;
    }
  }
  users.push(userInfo);

  localStorage.setItem("users", JSON.stringify(users));
  renderUsers(users);
}

//   function delete user
function deleteUser(id) {
  if (
    confirm(
      "The user will be permanently deleted. Do you still want to proceed?"
    ) == true
  ) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].userID == id) {
        users.splice(i, 1);
        localStorage.setItem("users", JSON.stringify(users));
        renderUsers(users);
        break;
      }
    }
  } else {
    return;
  }
}

//   function edit user
function editUser(id) {
  let editButton = document.getElementById("save-button");
  editButton.value = "Save Edit";
  let user = users.find((user) => user.userID == id);
  if (user) {
    document.getElementById("user-name").value = user.name;
    document.getElementById("user-email").value = user.email;
    document.getElementById("user-pw").value = user.password;
    document.getElementById("confirm-pw").value = user.confirmPw;

    localStorage.setItem("userID", id);
  }
}

// ***************************************************************
let products = JSON.parse(localStorage.getItem("rootProducts")) || [];

function createProductId() {
  return Math.floor(Math.random() * 999999999 + new Date().getMilliseconds());
}

// function render products

function renderProducts(para) {
  let product = "";

  for (let i = 0; i < para.length; i++) {
    product += `
    <tr>
      <td><img src="${para[i].image}" alt="" style="height: 100px;"></td>
      <td>${para[i].name}</td>
      <td>${para[i].id}</td>
      <td>${para[i].price}</td>
      <td>${para[i].stock}</td>
      <td>${para[i].details}</td>
      <td><input type="button" class="edit" value="Edit" onclick="editProduct('${products[i].id}')"/></td>
      <td><input type="button" class="delete" value="Delete" onclick="deleteProduct('${products[i].id}')"/></td>
    </tr>
    `;
  }

  let a = document.getElementById("product-tbody");
  if (a == null) {
    a = "";
  } else {
    a.innerHTML = product;
  }
}
renderProducts(products);

function addProduct(event) {
  event.preventDefault();
  let name = document.getElementById("product-name").value;
  let url = document.getElementById("product-url").value;
  let price = document.getElementById("product-price").value;
  let stock = parseInt(document.getElementById("product-stock").value);
  let description = document.getElementById("product-description").value;

  // let button = document.getElementById("save-product-button");
  // button.value = "Enter";

  let product = {
    name: name,
    image: url,
    price: price,
    stock: stock,
    details: description,
    id: createProductId(),
  };

  let checkId = localStorage.getItem("id");
  if (checkId) {
    for (let j = 0; j < products.length; j++) {
      if (products[j].id == checkId) {
        products.splice(j, 1, { ...product, id: checkId });

        renderProducts(products);
        localStorage.removeItem("id");

        localStorage.setItem("rootProducts", JSON.stringify(products));

        document.getElementById("product-name").value = "";
        document.getElementById("product-url").value = "";
        document.getElementById("product-price").value = "";
        document.getElementById("product-stock").value = "";
        document.getElementById("product-description").value = "";
      }
    }
  }

  if (!name || !url || !price || !stock || !description) {
    alert("Please fill in all fields.");
    return;
  }

  if (price < 0) {
    alert("Enter a valid price.");
    return;
  }
  if (stock < 0) {
    alert("Enter a valid stock quantity.");
    return;
  }

  products.push(product);

  localStorage.setItem("rootProducts", JSON.stringify(products));

  location.reload();

  renderProducts(products);
}

//   function delete product
function deleteProduct(id) {
  if (
    confirm(
      "The product will be permanently deleted. Do you still want to proceed?"
    ) == true
  ) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        products.splice(i, 1);
        localStorage.setItem("rootProducts", JSON.stringify(products));
        renderProducts(products);
        break;
      }
    }
  } else {
    return;
  }
}
//   function edit product
function updateFormFields(product) {
  document.getElementById("product-name").value = product.name;
  document.getElementById("product-url").value = product.image;
  document.getElementById("product-price").value = product.price;
  document.getElementById("product-stock").value = product.stock;
  document.getElementById("product-description").value = product.details;
}

function editProduct(id) {
  const saveButton = document.getElementById("save-product-button");
  saveButton.value = "Save Edit";

  const product = products.find((product) => product.id == id);
  if (product) {
    updateFormFields(product);
    // Optionally, you can clear the localStorage item if it's not needed elsewhere
    localStorage.setItem("id", id);
  } else {
    console.error("Product with ID " + id + " not found.");
    // Add additional error handling or user feedback as needed
  }

  // Scroll to the top of the page
  document.documentElement.scrollTop = 0;
}

// function search product
let filteredProducts = []; // Create a separate array to store filtered products.
let searchTimeout;

function searchProduct() {
  const searchValue = document
    .getElementsByClassName("product-search-bar")[0]
    .value.trim()
    .toLowerCase();

  clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => {
    if (!searchValue) {
      filteredProducts = products; // Show all products when the search bar is empty
    } else {
      // Escape special characters in the search query
      const escapedSearchValue = searchValue.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );

      // Perform case-insensitive search using a regular expression
      const searchRegex = new RegExp(escapedSearchValue, "i");
      filteredProducts = products.filter((product) =>
        searchRegex.test(product.name.toLowerCase())
      );
    }

    renderProducts(filteredProducts);
  }, 200); // Adjust the debounce time as needed (e.g., 300ms)
}

// function search user
users = users.map((user) => ({
  ...user,
  nameLowerCase: user.name.toLowerCase(),
}));

// let searchTimeout;

function searchUser() {
  const searchValue = document
    .getElementsByClassName("user-search-bar")[0]
    .value.trim()
    .toLowerCase();

  clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => {
    let userSearch;
    if (!searchValue) {
      userSearch = users; // Show all users when the search bar is empty
    } else {
      // Escape special characters in the search query
      const escapedSearchValue = searchValue.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );

      // Perform case-insensitive search using a regular expression
      const searchRegex = new RegExp(escapedSearchValue, "i");
      userSearch = users.filter((user) => searchRegex.test(user.nameLowerCase));
    }

    renderUsers(userSearch);
  }, 200); // Adjust the debounce time as needed (e.g., 300ms)
}

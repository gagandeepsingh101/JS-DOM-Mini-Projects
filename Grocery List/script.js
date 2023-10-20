let grocery = document.querySelector("#grocery");
let form = document.querySelector("form");
let groceryContainer = document.querySelector(".grocery-container");
let groceryList = document.querySelector("#grocery-list");
let submitButton = document.querySelector("#submit-btn");
let alertMessage = document.querySelector(".alert-message");
let clearList = document.querySelector("#clear-list");
let items = [];
let editFlag = false;
let editText = "";
let editId = "";

window.addEventListener("DOMContentLoaded",setUpItems)
// set ID
function setId(item) {
  let id = new Date().getTime();
  item.dataset.id = id;
  return id;
}

// set Default
function setBackDefault() {
  editFlag = false;
  grocery.value = "";
  editText = "";
  editId = "";
  submitButton.textContent = "Submit";
}

// display alert message
function displayAlert(text, alertType) {
  alertMessage.textContent = text;
  alertMessage.classList.add(alertType);
  alertMessage.classList.add("alert-message-visible");

  setTimeout(() => {
    alertMessage.textContent = "";
    alertMessage.classList.remove(alertType);
    alertMessage.classList.remove("alert-message-visible");
  }, 1000);
}

// add new item
function addItem(item) {
  // create new item
  let groceryItem = document.createElement("div");

  //   add item value
  groceryItem.innerHTML = `<p>${item}</p>
    <i id="edit-btn" class="ri-edit-box-line"></i>
    <i id="del-btn" class="ri-delete-bin-fill"></i>`;

  groceryItem.classList.add("item");
  groceryList.appendChild(groceryItem);
  groceryContainer.classList.add("grocery-container-visible");
  let id = setId(groceryItem);

  //  add edit and delete buttons
  let editBtn = groceryItem.querySelector("#edit-btn");
  let delBtn = groceryItem.querySelector("#del-btn");
  delBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);

  displayAlert("New item is added", `alert-success`);
  addDataToLocalStorage(id, item);
  setBackDefault();
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement;
  const id = element.dataset.id;

  element.remove();
  if (groceryList.children.length === 0) {
    groceryContainer.classList.remove("grocery-container-visible");
  }
  removeDataFromLocalStorage(id); //
  displayAlert("item removed", "alert-danger");
}

function editItem(e) {
  const item = e.currentTarget.parentElement;
  const text = item.firstChild.textContent;
  grocery.value = text;
  submitButton.textContent = "Edit";
  editFlag = true;
  editText = text;
  editId = item.dataset.id;
}

function removeAllItems(){
  groceryContainer.classList.remove("grocery-container-visible");
  displayAlert("List is empty","alert-danger");
  groceryList.innerHTML="";
  localStorage.removeItem("items");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let groceryValue = grocery.value;
  if (groceryValue) {
    if (!editFlag) {
      addItem(groceryValue);
    } else {
      groceryList.querySelectorAll(".item").forEach((item) => {
        if (item.dataset.id === editId) {
          item.firstChild.textContent = groceryValue;
        }
      });
      displayAlert("Item is edited", "alert-success");
      editDataFromLocalStorage(editId, groceryValue);
      setBackDefault();
    }
  } else {
    displayAlert("Input Item name", "alert-danger");
  }
});

clearList.addEventListener("click", removeAllItems);



function addDataToLocalStorage(id, item) {
  const grocery = { id, item };
  let items = getLocalStorageData();
  items.push(grocery);
  localStorage.setItem("items", JSON.stringify(items));
}

function removeDataFromLocalStorage(id) {
  let items = getLocalStorageData();
  items = items.filter((item) => item.id != id);
  localStorage.setItem("items", JSON.stringify(items));
}

function editDataFromLocalStorage(id, value) {
  let items = getLocalStorageData();

  items = items.map(function (item) {
    if (item.id == id) {
      item.item = value;
    }
    return item;
  });
  localStorage.setItem("items", JSON.stringify(items));
}

function setUpItems() {
  let itemsData = getLocalStorageData();
  itemsData.forEach((itemDetail) => {
    // console.log(itemDetail.id, itemDetail.item);
    uploadPreviousListItem(itemDetail.id, itemDetail.item);
  });
}

function getLocalStorageData() {
  return localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
}


function uploadPreviousListItem(id, item) {
  let groceryItem = document.createElement("div");
  //   add item value
  groceryItem.innerHTML = `<p>${item}</p>
    <i id="edit-btn" class="ri-edit-box-line"></i>
    <i id="del-btn" class="ri-delete-bin-fill"></i>`;

  groceryItem.classList.add("item");
  groceryList.appendChild(groceryItem);
  groceryContainer.classList.add("grocery-container-visible");
  //  add edit and delete buttons
  let editBtn = groceryItem.querySelector("#edit-btn");
  let delBtn = groceryItem.querySelector("#del-btn");
  delBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);
  groceryItem.dataset.id = id;
}

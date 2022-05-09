
let todoInput = document.querySelector(".todo-input");
let todoBtn = document.querySelector(".todo-btn");
let things = document.querySelector(".things-to-buy")
let todoContent = document.querySelector(".todo-contents");
let orderList = document.createElement("ol");

let items = document.createElement("h3")
 items.textContent ="Things To Buys"
 things.appendChild(items)

todoBtn.addEventListener("click", function () {
    let userInput = todoInput.value
    let  userList = document.createElement("li")

    userList.textContent = userInput
   
    orderList.appendChild(userList)
    todoContent.appendChild(orderList)

    
})
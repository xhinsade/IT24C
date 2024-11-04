const todoList = document.getElementById("todoList");
const accomplishedList = document.getElementById("accomplishedList");
const canceledList = document.getElementById("canceledList");
const addButton = document.getElementById("addButton");


let tasks = []; 
let editIndex = -1; 

addButton.addEventListener("click", () => {
    const taskText = document.getElementById("todoInput").value.trim();
    const taskTime = document.getElementById("todoTime").value;
    const taskLocation = document.getElementById("todoLocation").value.trim();

});
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
    
    if (taskText && taskTime) {
        const task = {
            text: taskText,
            time: new Date(taskTime),
            location: taskLocation,
            completed: false,
            timestamp: null 
        };
    
    
    if (editIndex >= 0) {
            tasks[editIndex] = task;
            editIndex = -1; 
            addButton.textContent = "Add"; 
        } else {
            tasks.push(task);
        }
        
        document.getElementById("todoInput").value = "";
        document.getElementById("todoTime").value = "";
        document.getElementById("todoLocation").value = "";
        
        displayTasks();
    } else {
        alert("Please enter a task and set a date & time.");
    }

});
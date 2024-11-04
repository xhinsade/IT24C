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
        alert("Please enter a task and set a date & && time.");
    }

});

function displayTasks() {
    todoList.innerHTML = "";
    accomplishedList.innerHTML = "";
    canceledList.innerHTML = "";

    tasks.sort((a, b) => a.time - b.time);

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";

        const taskDescription = document.createElement("span");
        taskDescription.innerHTML = `<strong>${task.text}</strong><br> <span class="task-time">Due: ${task.time.toLocaleString()}${task.location ? " | Location: " + task.location : ""}</span>`;

        const completeButton = document.createElement("button");
        completeButton.className = "btn btn-success btn-sm ms-2";
        completeButton.innerHTML = '<i class="fas fa-check"></i> Complete';
        completeButton.addEventListener("click", () => completeTask(index));

        const editButton = document.createElement("button");
        editButton.className = "btn btn-warning btn-sm ms-2";
        editButton.innerHTML = '<i class="fas fa-edit"></i> Edit';
        editButton.addEventListener("click", () => editTask(index));

        const cancelButton = document.createElement("button");
        cancelButton.className = "btn btn-danger btn-sm ms-2";
        cancelButton.innerHTML = '<i class="fas fa-times"></i> Cancel';
        cancelButton.addEventListener("click", () => cancelTask(index));

        listItem.appendChild(taskDescription);
        
        if (!task.completed && task.timestamp === null) {
            listItem.appendChild(completeButton);
            listItem.appendChild(editButton);
            listItem.appendChild(cancelButton);
        }

        todoList.appendChild(listItem);
    });

    tasks.forEach((task) => {
        if (task.completed) {
            const accomplishedItem = document.createElement("li");
            accomplishedItem.className = "list-group-item";
            accomplishedItem.textContent = `${task.text} - Completed on ${task.timestamp}`;
            accomplishedList.appendChild(accomplishedItem);
        }
    });

    tasks.forEach((task) => {
        if (task.timestamp === null && task.completed) {
            const canceledItem = document.createElement("li");
            canceledItem.className = "list-group-item";
            canceledItem.textContent = `${task.text} - Canceled`;
            canceledList.appendChild(canceledItem);
        }
    });
}

function completeTask(index) {
    tasks[index].completed = true;
    tasks[index].timestamp = new Date().toLocaleString(); 
    displayTasks();
}

function editTask(index) {
    const task = tasks[index];
    document.getElementById("todoInput").value = task.text;
    document.getElementById("todoTime").value = task.time.toISOString().slice(0, 16);
    document.getElementById("todoLocation").value = task.location;
    editIndex = index; 
    addButton.textContent = "Update"; 
}

function cancelTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

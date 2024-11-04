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
            canceled: false,
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

        const completeButton = createButton("Complete", "btn-success", () => completeTask(index));
        const editButton = createButton("Edit", "btn-warning", () => editTask(index));
        const cancelButton = createButton("Cancel", "btn-danger", () => cancelTask(index));

        listItem.appendChild(taskDescription);

        if (!task.completed && !task.canceled) {
            listItem.appendChild(completeButton);
            listItem.appendChild(editButton);
            listItem.appendChild(cancelButton);
            todoList.appendChild(listItem);
        } else if (task.completed) {
            const accomplishedItem = document.createElement("li");
            accomplishedItem.className = "list-group-item";
            accomplishedItem.innerHTML = taskDescription.innerHTML;
            accomplishedList.appendChild(accomplishedItem);
        } else if (task.canceled) {
            const canceledItem = document.createElement("li");
            canceledItem.className = "list-group-item";
            canceledItem.innerHTML = taskDescription.innerHTML;
            canceledList.appendChild(canceledItem);
        }
    });
}

function createButton(label, btnClass, onClick) {
    const button = document.createElement("button");
    button.className = `btn ${btnClass} btn-sm ms-2`;
    button.innerHTML = `<i class="fas fa-${label === "Complete" ? "check" : label === "Edit" ? "edit" : "times"}"></i> ${label}`;
    button.addEventListener("click", onClick);
    return button;
}

function completeTask(index) {
    tasks[index].completed = true;
    tasks[index].timestamp = new Date();
    displayTasks();
}

function editTask(index) {
    const task = tasks[index];
    document.getElementById("todoInput").value = task.text;
    document.getElementById("todoTime").value = task.time.toISOString().slice(0, -8);
    document.getElementById("todoLocation").value = task.location;
    editIndex = index;
    addButton.textContent = "Update";
}

function cancelTask(index) {
    tasks[index].canceled = true;
    displayTasks();
}

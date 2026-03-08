<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item and remove button
        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to li, then append li to taskList
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add event listener to button
    addButton.addEventListener("click", addTask);

    // Add event listener for Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

=======
document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item and remove button
        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to li, then append li to taskList
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add event listener to button
    addButton.addEventListener("click", addTask);

    // Add event listener for Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Initialize tasks array from Local Storage
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    // Function to save tasks array to Local Storage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Function to create a task element in the DOM
    function createTaskElement(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        removeBtn.onclick = function () {
            taskList.removeChild(li);           // Remove from DOM
            tasks = tasks.filter(task => task !== taskText); // Remove from array
            saveTasks();                        // Update Local Storage
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    // Function to add a new task
    function addTask(taskText = null) {
        const text = taskText || taskInput.value.trim();
        if (text === "") {
            alert("Please enter a task.");
            return;
        }

        createTaskElement(text);

        // Only save if this is a new user input
        if (!taskText) {
            tasks.push(text);
            saveTasks();
        }

        taskInput.value = ""; // Clear input field
    }

    // Load tasks from Local Storage on page load
    tasks.forEach(task => createTaskElement(task));

    // Event listener for Add button
    addButton.addEventListener("click", addTask);

    // Event listener for Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
            document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Initialize tasks array from Local Storage
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    // Function to save tasks array to Local Storage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Function to create a task element in the DOM
    function createTaskElement(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        removeBtn.onclick = function () {
            taskList.removeChild(li);           // Remove from DOM
            tasks = tasks.filter(task => task !== taskText); // Remove from array
            saveTasks();                        // Update Local Storage
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    // Function to add a new task
    function addTask(taskText = null) {
        const text = taskText || taskInput.value.trim();
        if (text === "") {
            alert("Please enter a task.");
            return;
        }

        createTaskElement(text);

        // Only save if this is a new user input
        if (!taskText) {
            tasks.push(text);
            saveTasks();
        }

        taskInput.value = ""; // Clear input field
    }

    // Load tasks from Local Storage on page load
    tasks.forEach(task => createTaskElement(task));

    // Event listener for Add button
    addButton.addEventListener("click", addTask);

    // Event listener for Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
        }
    });
});
>>>>>>> e451796 (Add Local Storage support for To-Do List)

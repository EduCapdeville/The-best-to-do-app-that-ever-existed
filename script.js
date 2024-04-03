const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")

function addTask() {
    if (taskInput.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskInput.value = "";
}
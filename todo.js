
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");

  li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
  taskList.appendChild(li);

  saveTasks();
  taskInput.value = "";
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
  saveTasks();
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push(li.textContent.replace("Delete", "").trim());
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.forEach(taskText => {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
    taskList.appendChild(li);
  });
}

window.onload = loadTasks;

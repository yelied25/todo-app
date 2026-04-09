const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function createTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Por favor, escribe una tarea.");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("task-item");

  const span = document.createElement("span");
  span.classList.add("task-text");
  span.textContent = taskText;

  const actionsDiv = document.createElement("div");
  actionsDiv.classList.add("task-actions");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Completar";
  completeBtn.classList.add("complete-btn");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";
  deleteBtn.classList.add("delete-btn");

  completeBtn.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  actionsDiv.appendChild(completeBtn);
  actionsDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actionsDiv);

  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
}

addTaskBtn.addEventListener("click", createTask);

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    createTask();
  }
});

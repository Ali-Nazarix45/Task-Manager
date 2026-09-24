const taskCount = document.getElementById("taskCount");
const taskInput = document.getElementById("taskInput");
const submitBtn = document.querySelector(".submit-btn");
const emptyState = document.getElementById("emptyState");
const taskList = document.getElementById("taskList");

const tasks = [];

submitBtn.addEventListener("click", function (event) {
  const updateTask = function () {
    if (taskList.children.length === 0) {
      emptyState.style.display = "block";
    } else {
      emptyState.style.display = "none";
    }
  };

  // preventing the default behavior of the form submission
  event.preventDefault();

  // checking if the input is not empty and incrementing the task count
  if (taskInput.value.trim() !== "") {
    taskCount.textContent = Number(taskCount.textContent) + 1;

    // changing the HTML elements for added tasks-//;;ll
    const listedTask = document.createElement("div");
    listedTask.classList.add("task-item");

    taskList.appendChild(listedTask);
    updateTask();

    // adding the task to the tasks div
    const taskText = document.createElement("p");
    taskText.textContent = taskInput.value;
    listedTask.appendChild(taskText);

    // adding the delete button to the tasks div
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    listedTask.appendChild(deleteBtn);

    // adding the event listener to the delete button
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(listedTask);
      taskCount.textContent = Number(taskCount.textContent) - 1;
      updateTask();
    });

    // clearing the input field after adding the task
    taskInput.value = "";
  } else {
    errorMessage.style.display = "block";
  }
});

const taskCount = document.getElementById("taskCount");
const taskInput = document.getElementById("taskInput");
const submitBtn = document.querySelector(".submit-btn");

const tasks = [];

submitBtn.addEventListener("click", function (event) {
  // preventing the default behavior of the form submission
  event.preventDefault();

  // checking if the input is not empty and incrementing the task count
  if (taskInput.value.trim() !== "") {
    taskCount.textContent = Number(taskCount.textContent) + 1;

    // changing the HTML elements for added tasks-//;;ll
    const listedTask = document.createElement("div");
    listedTask.classList.add("task-item");
    const taskList = document.getElementById("taskList");
    taskList.appendChild(listedTask);

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
    });

    // clearing the input field after adding the task
    taskInput.value = "";
  } else {
    console.log("no input is given");
  }
});

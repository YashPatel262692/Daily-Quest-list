// ===== Select important elements from HTML =====
const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");
const modeToggle = document.getElementById("modeToggle");

// ===== Function: Update quest counter =====
function updateCounter() {
  const total = taskList.children.length; // all quests
  const completed = taskList.querySelectorAll(".completed").length; // quests with class "completed"
  counter.textContent = `${total} quests total | ${completed} completed ✅`;
}

// ===== Function: Add a new quest =====
function addTask(taskText) {
  // create <li> for quest
  const li = document.createElement("li");

  // span for text
  const span = document.createElement("span");
  span.textContent = taskText;

  // click on text = mark completed
  span.addEventListener("click", () => {
    span.classList.toggle("completed"); // toggle strike-through
    updateCounter(); // update quest numbers
  });

  // delete button ❌
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove(); // remove this quest
    updateCounter(); // update quest numbers
  });

  // put span + button inside li
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // add li to <ul>
  taskList.appendChild(li);

  // update counter after adding
  updateCounter();
}

// ===== Event: Form submit (Add quest) =====
todoForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload
  const taskText = taskInput.value.trim(); // get input
  if (taskText !== "") {
    addTask(taskText); // add quest
    taskInput.value = ""; // clear box
  }
});

// ===== Event: Reset All Quests =====
resetBtn.addEventListener("click", () => {
  taskList.innerHTML = ""; // remove all quests
  updateCounter(); // reset counter
});

// ===== Event: Dark/Light Mode Toggle =====
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode"); // switch theme

  // change button text
  if (document.body.classList.contains("dark-mode")) {
    modeToggle.textContent = "☀️ Light Mode";
  } else {
    modeToggle.textContent = "🌙 Dark Mode";
  }
});

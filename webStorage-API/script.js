// USING LOCALSTORAGE
// Set a value
localStorage.setItem('username', 'JohnDoe');

// Retrieve a value
const username = localStorage.getItem('username');
console.log(username); // Output: "JohnDoe"

// Remove a value
localStorage.removeItem('username');

// Clear all data
localStorage.clear();

// USING SESSIONSTORAGE
// Set a value
sessionStorage.setItem('tempData', 'Hello');

// Retrieve a value
const tempData = sessionStorage.getItem('tempData');
console.log(tempData); // Output: "Hello"

// Remove a value
sessionStorage.removeItem('tempData');

// Clear all data
sessionStorage.clear();

// iteration 
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(`${key}: ${value}`);
}


// to handle storage limits
try {
  localStorage.setItem('test', 'test');
  localStorage.removeItem('test');
} catch (e) {
  if (e.name === 'QuotaExceededError') {
    console.log('Storage is full');
  }
}


// for checking support
if (typeof Storage !== 'undefined') {
  // Web Storage is supported
} else {
  // Fallback to cookies or other methods
}



// storage event functions
window.addEventListener('storage', function(event) {
  if (event.key === 'username') {
    console.log('Username updated:', event.newValue);
  }
});  //note that the stoarge event is not fired for sessionStorage bcos it is in a single tab.

// ============================================
//setItem()
//getItem()

localStorage.setItem("name", "Dolapo")
let result = document.getElementById("result").innerHTML = localStorage.getItem("name")
console.log(result)


sessionStorage.setItem("age", 27)
let demo = document.getElementById("demo").innerHTML = sessionStorage.getItem("age")
console.log(demo)

localStorage.setItem("input", "description")
let description = document.getElementById("description").innerHTML = localStorage.getItem("input")
console.log(description)



// create an html page with a form that include text input for description and the a botton that give opportunity to add to the tasks
// include aread like unorder list to dispkay the tasks

document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Task description cannot be empty!");
    return;
  }

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskValue);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();
  taskInput.value = ""; // Clear input field
}

function displayTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${task} <button class="delete" onclick="deleteTask(${index})">X</button>`;
    taskList.appendChild(li);
  });
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

function loadTasks() {
  displayTasks();
}




document.addEventListener("DOMContentLoaded", function () {

  // retrieve th save count from local storage or initialize to 0 if not present 
  let count = localStorage.getItem("clickCount") ? parseInt(localStorage.getItem("clickCount")) : 0;
  const counterElement = document.getElementById("counter")

  // display the current count
  counterElement.textContent = count;

  // add a click event listener to the button
  document.getElementById("increase").addEventListener("click", function () {
    count++
    counterElement.textContent = count;

    // savde updated count back into storage
    localStorage.setItem("clickCount", count)
  })

})

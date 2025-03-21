console.log("let's go async!!!")

// Callback function -----> they are functions that is passed as an arguments to another function

function car(name, callback) {
  console.log("The model is " + name)
  callback();

}

function callCar() {
  console.log("Move on")
}

car("BMW", callCar)

function greet(name) {
  setTimeout(() => {
    console.log(`Hello ${name}`)
  }, 2000)
}
greet("Feranmi");

// () => {} ------- this is representing a callback function 

function fetchData(callback) {
  setTimeout(() => {
    callback("Data Received")
  }, 1000)
}
fetchData((data) => {
  console.log(data)
});

let numbers = [2, 4, 6, 8]
numbers.map((item) => {
  console.log(item * 2)
})

function hi(name, callback) {
  console.log("Hi " + name);
  callback();
}

function callGreet() {
  console.log("Good morning")
}
hi("Ridwan", callGreet)

// ------------------->

function cookFood(food, callback) {
  console.log("Cooking " + food + "...");
  setTimeout(() => {
    console.log(food + " is ready!");
    callback();
  }, 2000);
}

function eat() {
  console.log("Yum, eating now!");
}

cookFood("pizza", eat);

// callbacks with objects
let person = {
  name: "Bob",
  greet: function (callback) {
    console.log("Hi, I'm " + this.name + "!");
    callback();
  }
};

function respond() {
  console.log("Nice to meet you too!");
}

person.greet(respond);


let carr = {
  brand: "Toyota",
  speed: 0,
  accelerate: function (amount, callback) {
    console.log(this.brand + " is speeding up...");
    setTimeout(() => {
      this.speed += amount;
      console.log("Speed is now " + this.speed + " mph!");
      callback();
    }, 1000);
  }
};

function cheer() {
  console.log("Woo-hoo, that’s fast!");
}

carr.accelerate(50, cheer);

// -------------------------------

let button = {
  label: "Click Me",
  onClick: function (callback) {
    console.log("Button clicked!");
    callback();
  }
};

function showAlert() {
  console.log("Alert: You clicked the button!");
}

button.onClick(showAlert);

// --------------------------------------------------------------------
function cookFood(food, callback) {
  console.log("Cooking " + food + "...");
  setTimeout(() => {
    console.log(food + " is ready!");
    callback();
  }, 2000); // Wait 2 seconds
}

function eat() {
  console.log("Yum, eating now!");
}

cookFood("pizza", eat);

// ---------------------------------------------------------------------------
let persons = {
  name: "Bob",
  greet: function (callback) {
    console.log("Hi, I'm " + this.name + "!");
    callback();
  }
};

function respond() {
  console.log("Nice to meet you too!");
}

persons.greet(respond); //using callback function inside object 

// ------------------------------------------------------------------------------------
// object with aync function
let cars = {
  brand: "Toyota",
  speed: 0,
  accelerate: function (amount, callback) {
    console.log(this.brand + " is speeding up...");
    setTimeout(() => {
      this.speed += amount;
      console.log("Speed is now " + this.speed + " mph!");
      callback();
    }, 1000);
  }
};

function cheer() {
  console.log("Woo-hoo, that's fast!");
}

cars.accelerate(50, cheer);

// --------------------------------------------------------------------------------------
// using with event listener
let buttons = {
  label: "Click Me",
  onClick: function (callback) {
    console.log("Button clicked!");
    callback();
  }
};

function showAlert() {
  console.log("Alert: You clicked the button!");
}

buttons.onClick(showAlert);

// ----------------------------------------------------------------------------------------
// for fetching data 
let user = {
  id: 1,
  fetchData: function (callback) {
    console.log("Fetching data for user " + this.id + "...");
    setTimeout(() => {
      let data = { name: "Emma", age: 28 };
      callback(data);
    }, 1500);
  }
};

function displayData(info) {
  console.log("User: " + info.name + ", Age: " + info.age);
}

user.fetchData(displayData);
// --------------------------------------------------------------------------------------
// callback  with arguments
function processOrder(item, callback) {
  console.log("Processing " + item + "...");
  callback(item, "done");
}

function confirm(result, status) {
  console.log(result + " is " + status + "!");
}

processOrder("coffee", confirm);

// ---------------------------------------------------------------------------------------
function processOrder(item, callback) {
  console.log("Processing " + item + "...");
  callback(item, "done");
}

function confirm(result, status) {
  console.log(result + " is " + status + "!");
}

processOrder("coffee", confirm);

// -------------------------------------------------------------------------------------------
let game = {
  score: 0,
  play: function (callback) {
    this.score += 10;
    callback(this.score);
  }
};

game.play(function (newScore) {
  console.log("Score updated to " + newScore);
});

//The callback is written directly inside play() without a name. and this is called anonymous callback()
// -------------------------------------------------------------------------------------------

//brief example of callback hell 

let task = {
  start: function (callback) {
    setTimeout(() => {
      console.log("Step 1 done");
      callback();
    }, 1000);
  }
};

task.start(function () {
  task.start(function () {
    task.start(function () {
      console.log("Finally finished!");
    });
  });
});

// -----------------------------------------------------------------------------------
let todoList = {
  tasks: [],
  addTask: function (task, callback) {
    console.log("Adding " + task + "...");
    setTimeout(() => {
      this.tasks.push(task);
      callback(this.tasks);
    }, 1000);
  },
  showTasks: function (callback) {
    console.log("Fetching tasks...");
    setTimeout(() => {
      callback(this.tasks);
    }, 500);
  }
};

function taskAdded(updatedTasks) {
  console.log("Task added! New list: " + updatedTasks);
}

function displayTasks(tasks) {
  console.log("Current tasks: " + tasks.join(", "));
}

todoList.addTask("Buy milk", taskAdded);
// Outputs:
// Adding Buy milk...
// (1 second later)
// Task added! New list: Buy milk

todoList.showTasks(displayTasks);
// Outputs:
// Fetching tasks...
// (0.5 seconds later)
// Current tasks: Buy milk

todoList.addTask("Walk dog", taskAdded);
// Outputs:
// Adding Walk dog...
// (1 second later)
// Task added! New list: Buy milk,Walk dog

// ---------------------------------------------------------------------


// simulate user auth flow
function getUser(userId, callback) {
  setTimeout(() => {
    console.log("user fetched from the DB")
    callback(null, { id: userId, username: "adamstosho" })
  }, 1000);
}

function validaPassword(user, callback) {
  setTimeout(() => {
    console.log("password validated")
    callback(null, user)
  }, 1000)
}

function getUserPerm(user, callback) {
  setTimeout(() => {
    console.log("permission retrieved")
    callback(null, { ...user, permission: ["read", "write"] })
  }, 1000)
}

function fetchUserProfile(user, callback) {
  setTimeout(() => {
    console.log("user's profile retrieved")
    callback(null, { ...user, profile: { age: 26, email: "adamstosho@gmail.com" } })
  }, 1000)
}

function userResponse(user, callback) {
  setTimeout(() => {
    console.log("response for the user", user)
    callback(null, "success✅")
  }, 1000);
}

// Callback Hell STARTS HERE 
getUser(1, (err, user) => {
  if (err) {
    console.error(err)
  }
  validaPassword(user, validUser => {
    if (err) {
      console.error(err)
    }
    getUserPerm(validUser, (err, userWithPerm) => {
      if (err) return console.error(err);

      fetchUserProfile(userWithPerm, (err, userWithProfile) => {
        if (err) return console.error(err);

        userResponse(userWithProfile, (err, response) => {
          if (response) return console.info(response);
          return console.log(err)
        })
      })
    })
  })
})


// Promise - represent a value that may be available now, in the future or never. it helps avoid callback hell by providing .then and .catch methods. 

// basic promise
let myPromise = new Promise(function (resolve, reject) {
  let success = true; // Simulating a condition

  if (success) {
    resolve("Yay, it worked!"); // Success
  } else {
    reject("Oops, something broke!"); // Failure
  }
});



// ====================================
// you handle promimse with .then() and .catch()

let myPromises = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Package delivered!");
  }, 2000); // Wait 2 seconds
});

myPromises
  .then(function (result) {
    console.log(result); // Runs when resolved
  })
  .catch(function (error) {
    console.log(error); // Runs if rejected
  });

// or (with rejection)

let myPromisess = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let deliveryFailed = true;
    if (!deliveryFailed) {
      reject("Package lost in transit!");
    } else {
      resolve("Package delivered!");
    }
  }, 1000);
});

myPromisess //using with arrow functions
  .then((result) => console.log(result))
  .catch((error) => console.log(error));



// more examples on promise
const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise resolved succesfully")
  } else {
    reject("I no want --> Mio fe")
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))


// =============================>
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
delay(2000).then(() => console.log("Executed after 2 seconds"));

delay(2000).catch(() => console.log(""));


// ================================>>>
// chaining promises
function firstTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("First task completed")
      resolve()
    }, 3000)
  })
}

function secondTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Second task completed")
      resolve()
    }, 3000)
  })
}

firstTask().then(secondTask).then(() => console.log("All tasks completed"))



// another example on Promise 
const registerUser = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("The operation is successful")
    }
    else {
      reject("The operation failed")
    }
  }, 2000)
})

registerUser.then((positiveResult) => {
  console.log({ resolve: positiveResult })
}).catch((negativeResult) => {
  console.log({ reject: negativeResult })
}).finally(() => {
  console.log("Operation completed")
})


// promise with object ------------------>
let userr = {
  name: "Alice",
  fetchAge: function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(25); // Successfully "fetched" age
      }, 1500);
    });
  }
};

userr.fetchAge()
  .then((age) => console.log(`${userr.name} is ${age} years old`))
  .catch((error) => console.log("Error: " + error));

// =============================================>
let order = {
  item: "pizza",
  cook: function () {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Pizza cooked!"), 1000);
    });
  },
  deliver: function () {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Pizza delivered!"), 1000);
    });
  }
};

order.cook()
  .then((result) => {
    console.log(result); // "Pizza cooked!"
    return order.deliver(); // Return another Promise
  })
  .then((result) => console.log(result)) // "Pizza delivered!"
  .catch((error) => console.log("Error: " + error));

// ==============================>
// using promise to fetch DATA
// Promises are perfect for things like fetching data from the web using fetch.
let app = {
  getUser: function (id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json()); // Convert response to JSON
  }
};

app.getUser(1)
  .then((user) => console.log(`Name: ${user.name}, Email: ${user.email}`))
  .catch((error) => console.log("Failed to fetch: " + error));
// Outputs (after network request):
// Name: Leanne Graham, Email: Sincere@april.biz

// -------------------------------------------------------->


//     Promise Methods
// JavaScript gives Promises some handy tools:

// Promise.resolve(): Creates a Promise that’s already successful.
// Promise.reject(): Creates a Promise that’s already failed.
// Promise.all(): Waits for multiple Promises to finish.
// Promise.race(): Takes the first Promise to finish (win or lose).

// FOR PROMISE.ALL
let task1 = new Promise((resolve) => setTimeout(() => resolve("Task 1 done"), 1000));
let task2 = new Promise((resolve) => setTimeout(() => resolve("Task 2 done"), 2000));

Promise.all([task1, task2])
  .then((results) => console.log(results))
  .catch((error) => console.log(error));
// Outputs after 2 seconds:
// ["Task 1 done", "Task 2 done"]

// FOR Promise.RACE
let fast = new Promise((resolve) => setTimeout(() => resolve("Fast wins!"), 500));
let slow = new Promise((resolve) => setTimeout(() => resolve("Slow wins!"), 1000));

Promise.race([fast, slow])
  .then((result) => console.log(result));
// Outputs after 0.5 seconds:// Take note that it takes the promise based on the time of completion, the earlier one is always considered
// Fast wins!



// ======================================>>>>>> PROMISES FOR ERROR HANDLING -------
let riskyTask = {
  tryIt: function () {
    return new Promise((resolve, reject) => {
      let chance = Math.random();
      if (chance > 0.3) {
        resolve("Lucky you!");
      } else {
        reject("Bad luck!");
      }
    });
  }
};

riskyTask.tryIt()
  .then((result) => console.log(result))
  .catch((error) => console.log("Caught: " + error));
// Outputs (randomly):
// Lucky you! (70% chance)
// OR
// Caught: Bad luck! (30% chance)


// BUILDING MINI APPS WITH PROMISE AND OBJECTS
let cart = {
  items: [],
  addItem: function (item) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.items.push(item);
        resolve(`Added ${item} to cart`);
      }, 1000);
    });
  },

  checkout: function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.items.length > 0) {
          resolve("Checkout complete!");
        } else {
          reject("Cart is empty!");
        }
      }, 1500);
    });
  }
};

cart.addItem("shirt")
  .then((message) => {
    console.log(message); // "Added shirt to cart"
    return cart.addItem("shoes");
  })
  .then((message) => {
    console.log(message); // "Added shoes to cart"
    return cart.checkout();
  })
  .then((message) => console.log(message)) // "Checkout complete!"
  .catch((error) => console.log("Error: " + error));


// ========================================================================




// async/await - simplifies the asynchronous code by making it look like synchronous code. It is a syntactic sugar for promises. This method is used to handle promises in a more comfortable way.



// async function returns a promise

// check this - used in fetching data...... 
async function fetchData() {
  const response = await fetch('https://example.com/data');
  return response.json();
}
// ---------------------------------




const fetchMyData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched")
    }, 2000)
  })
}

const handleFetchData = async () => {
  const data = await fetchMyData();
  console.log({ result: data })
}

handleFetchData();


// async/await with try/catch
const fetchMyDatat = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched")
      } else {
        reject("Data not fetched")
      }
    }, 2000)
  })
}


// note for error handling
async function fetchData() {
  try {
    // const data = await fetch('https://example.com/data').then(r => r.json());
    return data;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

// --------------------------------
let usera = { id: 1, fetchData: async function () { return await fetch(`https://api.example.com/user/${this.id}`).then(r => r.json()); } };
usera.fetchData().then(data => console.log(data)).catch(error => console.log(error));

// EXAMPLE 2

const cohort = { name: "Muse", height: "77", skin: " fair" }

const fetchCohortData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cohort)
    }, 3000)
  })
}

const processCohortData = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(data)
      resolve(data)
    }, 4000)
  })
}
const savedCohortData = (processedData) => {
  return new Promise((resolve) => {
    setTimeout(() => {

      resolve(processedData)
    }, 5000)
  })
}

const handleCohortData = async () => {
  console.log("Starting point");

  const data = await fetchCohortData();
  console.log({ step1: data });

  let processedData
  const getProcessData = await processCohortData(data);

  if (getProcessData) {
    const numHeight = Number(getProcessData.height); //converting the height from string to number
    const newResult = { ...getProcessData, height: numHeight }

    processedData = newResult;
  }
  console.log({ step2: processedData });

  const savedData = await savedCohortData(processedData);
  console.log({ step3: savedData });

}

handleCohortData();


// Error handling with async/await


const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User fetched")
    }, 5000)
  })
}

const fetchedPost = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post fetched successfully")
    }, 5000)
  })
}


const handleUserAndPost = async () => {
  try {
    console.log("fetching user and posts");
    const [user, posts] = await Promise.all([fetchUser(), fetchedPost()])

    console.log(`{User: ${user}`)
    console.log(`{Post: ${posts}`)

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}




// class work

//Inscructions

// 1. Create  function to simulate fetching user data from a database (use setTimeout)
// 2. Create another function to simulate fetching user tasks from a database
// 3. Use async/await with try..catch to handle errors
// 4. Simulate a case where the user is not found, and another where the tasks fail to load

//Correction 


const users = {
  1: { id: 1, name: "Soliu", skin: "Dark" },
  2: { id: 2, name: "Ridwan", skin: "Light" },
  3: { id: 3, name: "Feranmi", skin: "Dark" }

}


const getTheUser = (userID) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (users[userID]) {

        resolve(users[userID])

      } else {

        reject(new Error("User not available in the database"))
      }
    }, 2000);
  })
}


const getUserTask = (userID) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const tasks = {
        1: ["Dance", "Give up"],
        2: ["Cook", "Break fast"],
        3: ["Attend meeting"]

      }


      if (users[userID] && tasks[userID]) {

        resolve(tasks[userID])

      } else {

        reject(new Error("User with this task is not available in the database"))
      }

    }, 2000);
  })
}


const getUserAndTask = async (userID) => {

  try {

    console.log("Fetching user....")

    const user = await getTheUser(userID);

    console.log({ user });



    console.log(`Fetching ${user?.name}'s task`);

    const userTask = await getUserTask(userID);

    console.log(`${user?.name}'s has this task: ${userTask}`);

  } catch (error) {

    console.log(`Error : ${error}`)

  } finally {

    console.log("Operation completed")    //this will show for either the resolve or reject.. 
  }

}


getUserAndTask("4")


// GET API - fetching data from websites


async function getUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await response.json(); // Convert response to JSON
  console.log(users);
}

getUsers();

// handling errors with async 

async function fetchData() {
  try {
    const response = await fetch('https://example.com/data');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching data:', error);
    throw error;
  }
}

fetchData().then(data => console.log(data)).catch(error => console.log(error));


// more on using with objects methods
let useri = {
  id: 1,
  fetchData: async function() {
    try {
      const response = await fetch(`https://api.example.com/user/${this.id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching user data:', error);
      throw error;
    }
  }
};

useri.fetchData().then(data => console.log(data)).catch(error => console.log(error));
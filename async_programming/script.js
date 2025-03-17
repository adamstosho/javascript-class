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
    console.log("Hi, I’m " + this.name + "!");
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

// examples on promise
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


// async/await - simplifies the asynchronous code by making it look like synchronous code. It is a syntactic sugar for promises. This method is used to handle promises in a more comfortable way.
// async function returns a promise

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
    const numHeight = Number(getProcessData.height);
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

    console.log("Operation completed")
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



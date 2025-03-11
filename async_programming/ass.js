// / simulate user auth flow
function getUser(userId){
  return new Promise ((resolve) => {
    setTimeout(() => {
      console.log("user fetched from the DB")
      resolve({id: userId, username: "adamstosho"})
    }, 1000);
  })
}


function validaPassword(user){
  return new Promise ((resolve) => {
  setTimeout(() => {
    console.log("password validated")
    resolve(user)
  }, 1000)
})
}

function getUserPerm(user){
  return new Promise ((resolve) => {
  setTimeout(() => {
    console.log("permission retrieved")
    resolve({...user, permission: ["read", "write"]})
  }, 1000)
})
}

function fetchUserProfile(user){
  return new Promise ((resolve) => {
  setTimeout(() => {
    console.log("user's profile retrieved")
    resolve({...user, profile : {age: 18, email: "adamstosho@gmail.com"}})
  }, 1000)
})
}

function userResponse(user){
  return new Promise ((resolve) => {
  setTimeout(() =>{
    console.log("response for the user", user)
    resolve("success✅")
  }, 1000);
})
}

 getUser(1).then(validaPassword).then(getUserPerm).then(fetchUserProfile).then(userResponse).then((result) => console.log(result)).catch((err) => console.log(err))


 // 1. create function to simulate fetching user data from a database (use setTimeout)
 function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve({ id: 1, username: "adamstosho", age: 32, weight: 70 });
      } else {
        reject("User not found");
      }
    }, 2000);
  });
}

// 2. Create another function to simulate fetching user tasks from a database
function fetchUserTasks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve(["task1", "task2", "task3", "task4"]);
      } else {
        reject("Tasks not found");
      }
    }, 2000);
  });
}

// 3. use async/await with try...catch to handle errors
async function handleUserData() {
  try {
    const user = await fetchUserData();
    console.log("User data:", user);

    const tasks = await fetchUserTasks();
    console.log("User tasks:", tasks);
  } catch (error) {
    console.error("Error:", error);
  }
}

// 4. simulate a case where the user is not found, and another where the tasks fail to load
async function handleUserDataWithErrors() {
  try {
    const user = await fetchUserData();
    console.log("User data:", user);

    // Simulate tasks failing to load
    const tasks = await fetchUserTasks();
    console.log("User tasks:", tasks);
  } catch (error) {
    console.error("Error:", error);
  }
}

handleUserData();
handleUserDataWithErrors();

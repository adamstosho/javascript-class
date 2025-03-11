
// Select the form and input elements correctly
const container = document.querySelector("div");

// Dynamically insert the login form into the container
container.innerHTML = `
  <div id ="Container">
  <h1>Cohort-6 Platform</h1>
  <div id="formContainer">
    <h2>Login</h2>
    <h3>Kindly input your details to login</h3>
      <form id="loginForm">
        <input id="email" class="input" type="email" name="email" placeholder="Email" required>
        <input id="password" class="input" type="password" name="password" placeholder="Password" required>
        <button id="submit" type="submit">Login</button>
        <p id="error" style="color: red;"></p>
      </form>
  </div>
  <div>
  `;




// Selection of the form elements
const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error");


// List of valid login credentials
const loginCredentials = [
  { email: "omoridoh111@gmail.com", password: "Allahu@009" },
  { email: "abdulkabir0600@gmail.com", password: "A1b@X9zY" },
  { email: "laky@gmail.com", password: "q7G!9wTp" },
  { email: "lattystubborn@gmail.com", password: "LmZ&X2u4" },
  { email: "dollypee@gmail.com", password: "rB#yM3vA" },
  { email: "egbonidrees@gmail.com", password: "K@d6qWpP" },
  { email: "damilare12@gmail.com", password: "x$9C1zLn" },
  { email: "feranmilazy@gmail.com", password: "P!4JtX7m" },
  { email: "abdustupud@yahoo.com", password: "M8y&bNzV" }
];

// Login function to validate user credentials
const login = (email, password) => {
  if (!email || !password) {
    return "Please fill in both email and password fields.";
  }
  
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }

  const user = loginCredentials.find(user => user.email === email && user.password === password);
  
  if (user) {
    return `Hi ${email}, you are now logged in!`;
  }
  else {
  return "Invalid email or password.";
  }
};

// Event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const result = login(email, password);

  if (result.includes("logged in")) {
    alert(result); // Show success message
    errorMessage.textContent = ""; // Clear error message
  } else {
    errorMessage.textContent = result; // Show error message
  }
});

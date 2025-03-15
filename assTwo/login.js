const cohorts = [
  { user: "Ridwan", email: "omoridoh111@gmail.com", password: "Allahu@009" },
  { user: "Kabir", email: "abdulkabir0600@gmail.com", password: "A1b@X9zY" },
  { user: "Muiz", email: "laky@gmail.com", password: "q7G!9wTp" },
  { user: "Latty", email: "lattystubborn@gmail.com", password: "LmZ&X2u4" },
  { user: "Dolapo", email: "dollypee@gmail.com", password: "rB#yM3vA" },
  { user: "Idriz", email: "egbonidrees@gmail.com", password: "K@d6qWpP" },
  { user: "Mubarak", email: "damilare12@gmail.com", password: "x$9C1zLn" },
  { user: "Feranmi", email: "feranmilazy@gmail.com", password: "P!4JtX7m" },
  { user: "Abdullah", email: "abdustupud@yahoo.com", password: "M8y&bNzV" }
];

const loginform = document.getElementById("loginForm")
const errorDiv = document.getElementById("error")

async function fetchUserData(email, password) {
  await new Promise(resolve => setTimeout(resolve, 3000))

  return cohorts.find(cohort => cohort.email === email && cohort.password === password)
}

async function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim()
  const password = document.getElementById("password").value.trim()

  //Check if the field are empty
  if (!email || !password) {
    errorDiv.textcontent = "please fill in both fields"
    return;
  }

  errorDiv.textcontent = "fetching user data...."

  const user = await fetchUserData(email, password); //simulating the network delay in the fetching of data

  if (user) {
    errorDiv.textContent = "", //Clear error message
      setTimeout(() => {
        alert(`Hi ${user.user}! you are logged in`)
        loginform.reset();
      }, 100)
  } else {
    errorDiv.textContent = "Invalid Credentials"
  }
}

loginform.addEventListener('submit', handleLogin)

const cardContainer = document.getElementById('cardContainer')
cardContainer.innerHTML = cohorts.map(cohort =>
  `
  <div id="usersCard">
      <p>Email: ${cohort.email}</p>
      <p>User: ${cohort.user}</p>
  </div>
  `
)




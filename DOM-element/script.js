// // Accessing elements

// // className

// const body = document.getElementsByClassName("body")
// console.log(body)


// // Id
// const header = document.getElementById("header")
// console.log(header)

// // tagName

// const hOne = document.getElementsByTagName("h2")

// console.log(hOne)


// // for querySelector
// const className = document.querySelector(".body")
// console.log(className)

// // note that if it is id you will use #

// const idName = document.querySelector("#header")
// console.log(idName)

// // for querySelectorAll
// const all = document.querySelectorAll(".body")
// console.log(all)


// DOM Manipulations
// This include : - 
// 1. textContent 
// 2. innerHTML
// 3. styling
// 4. adding and removing classes 
// 5. event listener 


// TEXT CONTENT 

const header = document.getElementById ("header")
header.textContent = "Hello Universe!"

const par = document.querySelector ("p")
par.textContent = "I am Redox"

const h6 = document.querySelector("h6")
h6.textContent = "I enjoy teaching and learning"


// innerHTML
const container = document.querySelector("div")
container.innerHTML =  `
  <h1> I do research a lot </h1>
  <p> And I love reading</p>

  `

// STYLING
container.style.backgroundColor = "black"
container.style.color = "#d5d5d5"

// ADDING AND REMOVING CLASSES
h6.classList.add("subheader")

par.classList.remove("body")

const bodyElements = document.getElementsByClassName("body")
console.log(bodyElements)


// give a short biography about yourself using only javascript
// with different stylings to the texs and body


// ADDING EVENT LISTENER
// click event

document.querySelector("button").addEventListener("click", function(){
  const message = document.getElementById("message")
  if (message.textContent === "Hello!"){
    message.textContent = "Button Clicked!"
  }else {
    message.textContent = "Hello!"
  }
})

// mouse event
document.getElementById("box").addEventListener("mouseover", function (){
  document.getElementById("box").style.backgroundColor = "yellow"
})

document.getElementById("box").addEventListener("mouseout", function (){
  document.getElementById("box").style.backgroundColor = "black"
})

// KeyUp

document.getElementById("textInput").addEventListener("keyup", function(event){
  document.getElementById("output").textContent = "you pressed:" + event.key
})


function greet(name){
  alert("Hello, " + name + "!")
}
document.getElementById("greetBtn").addEventListener("click", () => greet("Ridwan"))

// to create new element and push it
const newBox = document.createElement("div")
newBox.textContent = "How are you doing today"
document.body.appendChild(newBox)

const box = document.getElementById("box")
const newH1 = document.createElement("h1")
newH1.textContent = "Bro"
newH1.style.color = "white"
box.appendChild(newH1)

// console.log

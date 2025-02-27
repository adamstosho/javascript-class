// Question 1

let numbers = [3, 7, 2, 9, 5];

for (i=0; i < numbers.length; i++){
  console.log(numbers[i]**2)
}

// Question 2
let arr = [1, 2, 3, 5, 6, 7];
for (let i = 0; i < arr.length; i++) {
  if(i === 3){
    break;
  }  
  console.log(arr[i]);

}

// or



// Question 3
let colors = ["red", "green", "blue"];
for (let color of colors){
  console.log("colour " + [color])
}

// Question 4 - I still dey manage the system sir.

// Question 5

let num = 1;
let result = num > 0 ? console.log("Positive") : num == 0 ? console.log("Zero") : console.log("Negative"); 

// Question 6

let numm = 15;
let results = numm % 3 === 0 && numm % 5 === 0 ? console.log("FizzBuzz") : numm % 3 === 0 ? console.log("Fizz") : numm % 5 === 0 ? console.log("buzz") : numm;

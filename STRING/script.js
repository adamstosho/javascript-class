const mixedStringCase = "Hello, How are you?";
const lowerCaseString = mixedStringCase.toLowerCase();
console.log(lowerCaseString); 
const upperCaseString = mixedStringCase.toUpperCase();
console.log(upperCaseString);

// split() - will separate the words into different arrays
const mixedString = "Hello, How are you?";
const splitString = mixedString.split(" ");
console.log(splitString);

// slice() - will extract a part of a string and return a new string
const extractString = "Hello, How are you?";
const slicedString = extractString.slice(7, 10);
console.log(slicedString);

// replace() - will replace a specified value with another value in a string
const replaceString = "Hello, How are you?";
const newString = replaceString.replace("Hello", "Hi");
console.log(newString);

// charAt() - will return the character at a specified index in a string
const characterString = "Hello, How are you?";
const character = characterString.charAt(7);
console.log(character);

// indexOf() - will return the position of the first occurrence of a specified value in a string
const positionString = "Hello, How are you?";
const position = positionString.indexOf("How");
console.log(position);

// lastIndexOf() - will return the position of the last occurrence of a specified value in a string
const lastPositionString = "Hello, How are you?";
const lastPosition = lastPositionString.lastIndexOf("are");
console.log(lastPosition);

// trim() - will remove whitespace from both ends of a string
const whiteSpaceString = "    Hello, How are you?    ";
const trimmedString = whiteSpaceString.trim();
console.log(trimmedString);

// concat() - will join two or more strings
const firstString = "Hello,";
const secondString = "How are you?";
const joinedString = firstString.concat(" ", secondString);
console.log(joinedString);

// includes() - will check if a string contains a specified value
const checkString = "Hello, How are you?";
const checkValue = checkString.includes("are");
console.log(checkValue);

// startsWith() - will check if a string starts with a specified value
const startString = "Hello, How are you?";
const startValue = startString.startsWith("Hello");
console.log(startValue);

// endsWith() - will check if a string ends with a specified value
const endString = "Hello, How are you?"
const endValue = endString.endsWith("y")
console.log(endValue)

// repeat() - will repeat a string a specified number of times
const repeatString = "Hello, How are you? ";
const repeatedString = repeatString.repeat(3);
console.log(repeatedString);  

// padStart() - will pad a string with another string until it reaches a specified length
const padString = "Hello";
const paddedString = padString.padStart(10, "Hi ");
console.log(paddedString);

// padEnd() - will pad a string with another string until it reaches a specified length
const padEndString = "Hello";
const paddedEndString = padEndString.padEnd(10, " Hi");
console.log(paddedEndString);

// substring() - will extract a part of a string and return a new string, it works like slice as well.
const extractSubString = "Hello, How are you?";
const subString = extractSubString.substring(7, 10); 
console.log(subString); 






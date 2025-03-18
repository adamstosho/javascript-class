import {simpleInterest, circleAreaCircum} from "./math.js";

//calculate simple interest on the principal of #50,000. Provided that the rate is 5% for a period of 2 years

const accumulatedInterest = simpleInterest(50000, 5, 2, "years")
console.log({accumulatedInterest})


//circumference of a circle and its area

//radius = 10cm

const area = circleAreaCircum(10, "area")
console.log(area)


const circum = circleAreaCircum(10, "circum")
console.log(circum)

const areaCircum = circleAreaCircum(10, "areaCircum")
console.log(areaCircum)

const anything = circleAreaCircum(10, "baba tee")
console.log(anything)

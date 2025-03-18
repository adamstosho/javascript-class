const simpleInterest = (principal, rate, time, timeType) =>{
  let result
  if (timeType === "years"){
    result = (principal * rate * time)/100
    return result
  }else if (timeType === "month"){
    result = (principal * rate * time)/(100 * 12)
    return result
  }else if (timeType === "week"){
    result = (principal * rate * time)/(100 * 52)
    return result
  }else if (timeType === "day"){
    result = (principal * rate * time)/(100 * 365)
    return result
  } else {
    throw new Error("Invalid timeType. Please use 'years', 'month', 'week', or 'day'.");
  }
}


const circleAreaCircum = (radius, type) => {
  const pi = 22/7
  if (type === "area"){
    return (pi * radius**2).toFixed(2)

  }else if (type === "circum"){
    return (2 * pi * radius).toFixed(2)
  }else if (type === "areaCircum"){
    const area = pi * radius **2;
    const circumference = 2 * pi * radius;

    const result = {
      area: area.toFixed(2),
      circumference: circumference.toFixed(2)
    };

    return result;
  }

  return "undefined type"
}



export {simpleInterest, circleAreaCircum}

// or
// export default simpleInterest //u can change the name



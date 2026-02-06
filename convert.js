// 12 inch 1 feet 

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
/* 
const towfiqueHeight = inchToFeet(70);
console.log(towfiqueHeight.toFixed(1)); */


function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction)
    const inchRemaining = inch % 12;
    const result = feetNumber + " ft " + inchRemaining + " inch ";
    return result;
}

const towfiqueHeight = inchToFeet2(75);
console.log(towfiqueHeight);
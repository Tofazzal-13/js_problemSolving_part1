function oddAverage(numbers){
    const odds = []
    for(let number of numbers){
        if(number % 2 === 1){
           odds.push(number)
           
   
        }
        
    }
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum += number;

    }
    const count = odds.length;
    const average = sum / count;
    return average;
    
    
    
}

const numbers = [58,63,55,54,77,99,98,97,51,22];
const avg = oddAverage(numbers);
console.log("average of the odd numbers is: ",avg.toFixed(2));

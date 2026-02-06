const numbers = [1,5,61,2,3,45,61,2,3,12,11];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
        
    }
    return unique;
}

const uniqueArray = noDuplicate(numbers)
console.log(uniqueArray);

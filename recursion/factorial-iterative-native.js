// Based on Colt Steele's example

// Multiple all numbers from 1 to the specified numver
const factorial = (num) =>
{
    let total = 1;
    
    for(let i = num; i > 1; i--){
        total *= i
    }

    return total;
}

console.log(factorial(10));
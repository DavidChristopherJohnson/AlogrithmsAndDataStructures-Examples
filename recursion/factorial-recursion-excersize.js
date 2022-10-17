// Get the result of all numbers from num to 1 multiplied together
const factorial = (startNum) => {
    //if the start value is 1 or 0 then the factorial is always 1
    if(startNum === 1 || startNum === 0)
        return 1;
        
    // Set initial value to 1 (base factorial)
    let result = 1;

    //define recursive inner helper function
    const helper = (num) => {
        // Base condition to halt recursion
        // if it is 0 then we are done, and if it is 1 then
        // there is no need to multiply the result as it will
        // remain the same
        if(num <= 1)
            return;

        // Multiply the current result by the number
        result *= num;

        // Call function recursively with the next number below the current number
        helper(num - 1)
    }

    // Start recursion
    helper(startNum);

    // retrun results
    return result;
}


console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040

//NOTE: I could have done this in a single fucntion recursion method
//      but I wanted to practise with the helper function some more
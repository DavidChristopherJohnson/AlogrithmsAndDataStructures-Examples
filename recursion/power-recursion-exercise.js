const power = (num, power) =>{
    // If power is 0 then just return 1
    if(power === 0)
        return 1;

    // Set initial result to number as if to the power of 1
    let result = 1;

    const helperFunction = (pow) => {
        // If we get to 1 or below then we have
        // done all of the powers
        if(pow === 0)
            return;

        // Multiple the result by the number, to take us
        // to the next power
        result *= num;

        //call recursion function taking away one from the power count
        helperFunction(pow - 1);        
    }

    // Set off inner helper function to start recursion
    helperFunction(power);

    return result;
}

console.log(power(2,0)) // 1
console.log(power(2,2)) // 4
console.log(power(2,4)) // 16

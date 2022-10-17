// Multiple all numbers from 1 to the specified numver
// NOTE: has an optional parameter for the total
const factorial = (num) =>
{
    // Base case. If the current number is one
    // we do not need to perform the multiplication, 
    // so return the current total
    if(num <= 1)
        return 1;

    return num * factorial(num -1);
}

console.log(factorial(10));
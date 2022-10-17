// Example of pure recursion method, where the result is concatinated with 
// the results to a recursive call to the current function to created the entier results set
const collectOdds = (nums) => {
    // Set results set to empty array
    let results = [];

    // If the input is empty return the results
    if(nums.length === 0)
        return results;

    // If there is a remainder for the first index after dividing by 2 then it is odd
    // so add the value of the first index to the results array
    if(nums[0] % 2 !== 0)
        results.push(nums[0]);

    // Now call the current function again recursively, using the input minus the first index 
    // and concatinate the results with the results of got in this run of the function
    results = results.concat(collectOdds(nums.slice(1)));

    // Return the concatinated version of the arrays
    return results;
}

console.log(collectOdds([1,2,3,4,5]));

// NOTE: Shorter than the helper function method
// NOTE: Arguably a little harder to read than the helper function method
// NOTE: Uses more objects than the helper function method (creates a new array for each time the function is called)
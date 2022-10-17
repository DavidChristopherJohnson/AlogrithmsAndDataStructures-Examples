// Example of helper method recursion, using inner functions 
// for modifying a result object inside the scope of the outer function 
const collectOdds = (nums) => {
    // Set empty array for results in the outer function
    let results = [];

    // Define an inner helper function to use as the 
    // rescursion function  so that our results object
    // does not have to be at a global scope
    const collectOddsHelper = (helperInput) => {
        // empty array, bail out
        if(helperInput.length === 0 ) return;

        // If there is a remainer after dividing the first index by 0
        // then it is odd, so add it to the outer function results array
        if(helperInput[0] % 2 !== 0)
            results.push(helperInput[0]);

        // Call helper function recursively passing the 
        // the current inputn minus the first index
        collectOddsHelper(helperInput.slice(1));
    }

    // Call the helper function to populate results
    collectOddsHelper(nums);

    //return results when recursive function completed.
    return results;
}


console.log(collectOdds([1,2,3,4,5]));

// collectOddValues([1,2,3,4,5])
//      let results = []
//      collectOddValuesHelper([1,2,3,4,5])
//          results.push[1];
//          collectOddvaluesHelper([2,3,4,5)])
//              collectOddValuesHelper([3,4,5])
//                  results.push[3]
//                  collectOddValuesHelper([4,5])
//                      collectOddValuesHelper([5])
//                          results.push[1]
//                          collectOddValuesHelper([])
//      return results   // = [1,2,3,4,5]
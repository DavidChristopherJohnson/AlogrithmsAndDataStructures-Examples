//=================================================================
// Create a function that returns true when all values in array 2
// are the squares of the values in array 1 (order does not matter)
//=================================================================

//Number of times to run for performance measuring
const runs = 100000000;

const sameSquared = (one, two) => {
    // Ensure arrays have correct type
    if (!Array.isArray(one) || !Array.isArray(two))
        //Could throw an error here instead
        return false;

    // Ensure arrays are the same length and have at least one value
    if (one?.length !== two?.length || one?.length === 0)
        return false;

    // Loop through first array 
    for (let val of one)  // = O(n)
    {
        // square the value
        const sqr = val * val;

        const correctIndex = two.indexOf(sqr);  // = O(n)

        // Check if second array contains the value
        if (correctIndex === -1)
            return false;

        //remove value from array to make sure we don't use it again
        two.splice(correctIndex, 1);
    }

    return true;
};  //   = O(n^2)

let perfStart = performance.now();

for(let i = 0; i < runs; i++)
    sameSquared([1,2,3],[9,1,4]);

//console.log('O(n^2)', sameSquared([1, 2, 3, 2], [9, 1, 4, 4]));
perfEnd = performance.now();

console.log(`O(n^2) -  ${runs} runs took ${(perfEnd - perfStart) / 1000} seconds to run`)
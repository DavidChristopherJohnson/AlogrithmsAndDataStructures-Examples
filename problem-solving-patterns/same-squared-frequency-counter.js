const runs = 100000000

const sameSquaredFrequencyCounter = (one, two) => {
    // Ensure arrays have correct type
    if (!Array.isArray(one) || !Array.isArray(two))
        // Could throw an error here instead
        return false;

    // Ensure arrays are the same length and have at least one value
    if (one?.length !== two?.length || one?.length === 0)
        return false;

    // Using frequency counters will prevent having to have nested loops and 
    // makes the function O(n)
    let frequencyCounterOne = {};
    let frequencyCounterTwo = {};

    // Loop through first array to populate frequency counter
    for (let val of one)  // = O(n)
    {
        frequencyCounterOne[val] = (frequencyCounterOne[val] || 0) + 1
    }

    // Loop through first array to populate second frequency counter
    for (let val of two) // = O(n)
    {
        frequencyCounterTwo[val] = (frequencyCounterTwo[val] || 0) + 1
    }

    // // Lopp through keys in frequency counter one and check for a value 
    // // in frequency counter two. Then check their count values match
    // for (let key in frequencyCounterOne) // = O(n)
    // {
    //     //Only calculate square of key once 
    //     const keySqr = key ** 2;

    //     // Check if current key squared is in second frequency counter
    //     if (!(keySqr in frequencyCounterTwo))
    //         return false

    //     // Check if the value of the squared key is the same as the value for the key
    //     if (frequencyCounterTwo[key ** 2] !== frequencyCounterOne[key])
    //         return false
    // }

    return true;
};  //   = O(n)

perfStart = performance.now();

for(let i = 0; i < runs; i++)
  sameSquaredFrequencyCounter([1,2,3],[9,1,4]);

//console.log('O(n)', sameSquaredFrequencyCounter([1, 2, 3, 2], [9, 1, 4, 4]))

perfEnd = performance.now();

console.log(`O(n) -  ${runs} runs took ${(perfEnd - perfStart) / 1000} seconds to run`)

// NOTE: This is an example of a frequency counter but
// still runs slower than a nested root for some reason
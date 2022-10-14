const countUniqueValues = (arr) => {
    // If array is empty then there are no values therefore no unique values
    if (arr.length === 0)
        return 0;

    // If the array is only 1 value, then it is one unique value
    if (arr.length === 1)
        return 1;

        // If there are only 2 values we can easily determine how many unique values
    if (arr.length === 2)
        return arr[0] === arr[1] ? 2 : 1;

    //Left pointer starts at index 0
    let leftPointer = 0;

    //Right pointer starts at index 1
    for (let rightPointer = 1; rightPointer < arr.length; rightPointer++) // = O(n)
    {
        // If the value at the left pointer is not the same as the one at the right pointer
        // we have a new unique value, so move the left pointer right and
        // set the current position in the array to the value of the right pointer
        if (arr[leftPointer] !== arr[rightPointer]) {
            leftPointer += 1;
            arr[leftPointer] = arr[rightPointer];
        }
    }

    // Remove all values after the left pointer as we have all of the unique values
    arr.splice(leftPointer + 1) // = O(n)
    return arr.length;
}

console.log(countUniqueValues([1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 5, 5]));

//NOTE: This only works with sorted arrays
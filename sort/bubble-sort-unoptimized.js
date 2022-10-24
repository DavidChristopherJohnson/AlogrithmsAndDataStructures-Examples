// This is the bubble sort example provided by Colt Steele in his course

// Very Unoptimised
// This results in an extra comparison at the end of each loop against an undefined which isn't required
// and runs through every item in the array comparing values that have already been sorted
const bubbleSortVeryUnoptimized = (arr) => {
    // Loop through each item to get the first value to compare
    for (let i = 0; i < arr.length; i++) {
        // For through each item in the array for the second value to compare 
        for (let j = 0; j < arr.length; j++) {
            // If the value index j is greated than index at j + 1
            // swap the values 
            if (arr[j] > arr[j + 1]) {
                // Store the value of J so we don't loose it when we overwrite it
                const temp = arr[j];
                // Set the index of J to the value that is in the index of j + 1
                arr[j] = arr[j + 1];
                // Now the item in j + 1 has been set to the index of j
                // restore the value of j into the index of j + 1
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let result = bubbleSortVeryUnoptimized([8, 1, 2, 3, 4, 5, 6, 7]);
console.log('Bubble Sort Very Unoptimized: ', result);


// Unpotimized version of bubble sort
// This version reduces the iteations in the inner loop as we progress to prevent
// re-evaluating already sorted values
const bubbleSortUnoptimized = (arr) => {
    // For each item starting at the end loop through. This is used to reduce the amount
    // of items we have to iterate over in future as the largest value will be at the 
    // latest index we reached.
    for (let i = arr.length; i > 0; i--) {
        // For each item in the array up to the current index from the end
        for (let j = 0; j < i - 1; j++) {
            // If the value index j is greated than index at j + 1
            // swap the values 
            if (arr[j] > arr[j + 1]) {
                // Store the value of J so we don't loose it when we overwrite it
                const temp = arr[j];
                // Set the index of J to the value that is in the index of j + 1
                arr[j] = arr[j + 1];
                // Now the item in j + 1 has been set to the index of j
                // restore the value of j into the index of j + 1
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

result = bubbleSortUnoptimized([8, 1, 2, 3, 4, 5, 6, 7]);
console.log('Bubble Sort Unoptimized: ', result);

// ES2015 Version
// This version reduces the iteations in the inner loop as we progress to prevent
// re-evaluating already sorted values, but using new ES2015 code to perform the swap function
const bubbleSortES2105 = (arr) => {
    // Define the swap function which will replace the value in the first defined
    // index in the passed in array with the value at the second specified index in 
    // the passed in array
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    // Loop backwards through the array as in each iteration we will have put the next
    // largest value at the end of the array
    for (let i = arr.length; i > 0; i--) {
        // Loop through all values from 0 to the index before the current index of i
        // as the current index of i will already have a value set
        for (let j = 0; j < i - 1; j++) {
            // If the value at index j is greater than the value at index j + 1
            // then swap
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

result = bubbleSortES2105([8, 1, 2, 3, 4, 5, 6, 7]);
console.log('ES2015 version: ', result);
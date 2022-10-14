const sumZero = (arr) => {
    // Create two pointers. 
    // One to start at the first element
    let leftPointer = 0;
    // One to start at the last element in the array
    let rightPointer = arr.length - 1;

    // While the left pointer has not passed the position of the right pointer
    while (leftPointer < rightPointer) {
        // Calculate sum 
        const sum = arr[leftPointer] + arr[rightPointer];

        //if sum is zero then return values
        if (sum === 0)
            return [arr[leftPointer], arr[rightPointer]];

        if (sum > 0)
            // If the sum is too large, reduce the value of the right pointer
            // to pick up next smaller value
            rightPointer--;
        else
            // If the sum is too small, increase the value of the left pointer
            // to pick up the next larger value
            leftPointer++;
    }

    return [];
} // =  O(n)

console.log(sumZero([-4, -3, -2, 1, 0, 1, 2, 5]));

//NOTE: Only works for sorted lists
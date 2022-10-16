const maxSumSubArray = (arr, num) => {
    if(num > arr.length)
        return null;

    let maxSum = 0;

    // Get initial sum
    for(let  i =0; i < num; i++)
        maxSum += arr[i];

        // Set initial tempSum to value of max sum
    let tempSum = maxSum;

    // From next index in the array, loop through the rest of the values
    for(let i = num; i < arr.length; i++) {
        // Take the value at the lowest index of the previous window away
        // and add the new index ( slide the window right)
        tempSum = tempSum - arr[i-num] + arr[i];

        //if the new tempSum is higher than the maxSum, replace the maxSum with the new value
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
} // = O(n)

console.log(maxSumSubArray([1,2,3,4,2,3,3], 2));
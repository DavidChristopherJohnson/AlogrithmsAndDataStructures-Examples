//Get the max total of consecutive numbers from the passed in array
const maxSumSubArray = (arr, num) => {
    if(num > arr.length)
        return null;

    let max = -Infinity;

    for(let i = 0; i < arr.length - num + 1; i++)
    {
        let temp = 0;

        for (let j = 0; j < num; j++) {
            temp += arr[i + j]
        }
        if(temp > max) {
            max = temp;
        }
    }

    return max;
} // = O(n^2)

console.log(maxSumSubArray([1,2,3,4,2,3,3], 2));
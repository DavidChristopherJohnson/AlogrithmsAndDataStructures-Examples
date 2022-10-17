// Find the index of the passed in val from the 
// passed in array. Return -1 if not found
const indexOf = (nums, val) => {
    // For each item in the array
    for(let i = 0; i < nums.length; i++)
        // If the value at the current index is the requested value
        // then return the index
        if(nums[i] === val)
            return i;

    // Not found, return -1
    return -1;
} // = O(n)

console.log(indexOf([1,4,3,6,8,2,7], 8));
console.log(indexOf([1,4,3,6,8,2,7], 0));
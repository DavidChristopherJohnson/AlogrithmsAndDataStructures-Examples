//Find a value in an array
const searchArray = (arr, val) => {
    // Set upper bound to last index in the array
    let upperBound = arr.length  - 1;
    //Set the lower bounds to the first index in the array
    let lowerBound = 0;

    //while the bounds don't cross over
    while(lowerBound <= upperBound)
    {
        //find the midpoint index between the two bounds
        let midpoint = parseInt(Math.ceil((upperBound + lowerBound) / 2));

        //set the temp value
        let tempValue = arr[midpoint];

        //if the temp value is the same as the requested value, return the midpoint index
        if(tempValue == val)
            return midpoint;

        if(tempValue < val)
            // If the current value is lower than the requested value
            // the value we requested must be later in the array
            // so set the lower bound to one index above the current mid point
            lowerBound = midpoint + 1;        
        else
            // If the current value is higher than the requested value
            // the value we requested must be earlier in the array
            // so set the upper bound to one index below the current mid point
            upperBound = midpoint - 1;       
    }

    //value not in the array
    return -1;
} // = Log(n)

console.log(searchArray([1,2,3,4,5,6,7], 3))

//This approach reduces the max amnount of iterations than a linear search does (see search-array-naive.js)

//NOTE: this is part of the 'divide and conquer' pattern
//NOTE: this will only work on sorted lists
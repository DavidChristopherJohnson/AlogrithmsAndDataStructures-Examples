const binarySearch = (arr, val) => {
    let upperBound = arr.length -1;
    let lowerBound = 0;

    // While the bounds do not cross over
    while (lowerBound <= upperBound)
    {
        // Set midpoint value
        let midpoint = Math.ceil((upperBound + lowerBound) / 2)

        if(arr[midpoint] > val)
            // Value is lower than the midpoint
            //  so decrease the upper bound
            upperBound = midpoint - 1;
        else if(arr[midpoint] < val)
            // Value is higher than the midpoint,
            // so increase the lower bound
            lowerBound = midpoint + 1;
        else
            // Found the value, return it
            return midpoint;
    }

    // Not found
    return -1
}


console.log(binarySearch(['paul','sus an','terry','xena', 'zack'], 'bernard'));
console.log(binarySearch([1,2,3,4,5], 1))
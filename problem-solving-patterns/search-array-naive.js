//Find a value in an array
const searchArray = (arr, val) => {
    for(let i = 0; i < arr.length -1; i++)
        if(arr[i] === val)
            return i;
    
            return -1;
} // = O(n)

 console.log(searchArray([1,2,3,4,5,6,7,8,9,0], 4));


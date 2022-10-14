const sumZero = (arr) => {

    for(let i = 0; i < arr.length; i++) // = O(n)
        for(let j = i + 1; j < arr.length; j++) // = O(n)
            if(arr[i] + arr[j] === 0)
                return [arr[i],arr[j]]

    return [];
} // O(n^2)

const result = sumZero([-4,-3,-2,-1,0,1,2,5]);

console.log(result);

//NOTE: Uses a nested loop so big O of n squared
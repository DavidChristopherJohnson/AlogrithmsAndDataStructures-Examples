const printCombinations = (n) => {
    for (let i = 0; i <= n; i++)
        for (let j = 0; j <= n; j++)
            console.log(i, j);
}



const startTime = performance.now();

printCombinations(100);

const EndTime = performance.now();

//Big O of n^2  -   O(n^2)

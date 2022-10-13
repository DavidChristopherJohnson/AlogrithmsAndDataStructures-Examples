const addUpTo = (n) => {
    let total = 0;

    for(let i = 1; i <= n; i++)
        total += i;

    return total;
}


const startTime = performance.now();

console.log('Result: ', addUpTo(100000000));

const EndTime = performance.now();

console.log(`Time Elapsed: ${(EndTime - startTime) / 1000} seconds.`)


//BigO of N
//Runs in 0.10108316612243652 seconds where n = 100,000,000
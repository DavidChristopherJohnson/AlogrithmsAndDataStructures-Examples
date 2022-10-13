const addUpTo = (n) => {
    let total = 0;

    for(let i = 1; i <= n; i++)
        total += i;

    return total;
}


const startTime = performance.now();

console.log('Result: ', addUpTo(1000000000));

const EndTime = performance.now();

console.log(`Time Elapsed: ${(EndTime - startTime) / 1000} seconds.`)


//BigO of N

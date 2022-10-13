const addUpTo = (n) => (n * (n+1) / 2);

const startTime = performance.now();

console.log('Result: ', addUpTo(100000000));

const EndTime = performance.now();

console.log(`Time Elapsed: ${(EndTime - startTime) / 1000} seconds.`)

// BigO of 1
//Runs in 0.002904249906539917 seconds where n = 100,000,000
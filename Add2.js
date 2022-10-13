const addUpTo = (n) => (n * (n+1) / 2);

const startTime = performance.now();

console.log('Result: ', addUpTo(1000000000));

const EndTime = performance.now();

console.log(`Time Elapsed: ${(EndTime - startTime) / 1000} seconds.`)

// BigO of 1
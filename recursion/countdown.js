// Example of recursion, calling itself until the countdown is finished
const countDown = (num) => {
    console.log(num);

    // This checks for the 'Base case' If we don't have this to stop the recursion we
    // will get an infinite loop
    if(num === 1)
        return;

    // Call the function again with a new value
    countDown(num -1);
}

countDown(10);
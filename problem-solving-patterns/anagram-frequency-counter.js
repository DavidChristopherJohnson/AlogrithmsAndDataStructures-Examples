const validAnagram = (firstString, secondString) => {
    // Check if string length is the same
        //if not return false

    const frequencyCounterOne = {};
    const frequencyCounterTwo = {};

    //set up frequency counter of first string
    for(let char of firstString) // = O(n)
    {
        frequencyCounterOne[char] = (frequencyCounterOne[char] || 0 ) + 1;
    }

    // Set up frequency counter for second string
    for(let char of secondString) // = O(n)
    {
        frequencyCounterTwo[char] = (frequencyCounterTwo[char] || 0) + 1
    }

    // Check frequencies match
    for(key in frequencyCounterOne)// = O(n) 
    {
        // Check key is in second frequency counter
        if(!frequencyCounterTwo[key])
            return false;
        
        // Check value matches
        if(frequencyCounterOne[key] !== frequencyCounterTwo[key])
            return false;
    }
    
    return true
}


const testFunction = (value1, value2, expectedOutput) => {
    const result = validAnagram(value1, value2);
    const passFail = result === expectedOutput ? 'PASS' : 'FAIL';
    const message = `TEST validAnagram('${value1}','${value2}') should be ${expectedOutput}','${value2}')`

    console.log(message.padEnd(85), passFail);
}

testFunction('','', true);
testFunction('aaz','zza', false);
testFunction('anagram', 'nagaram', true);
testFunction('rat','car', false);
testFunction('awesome','awesom', false);
testFunction('qwerty','qeywrt', true);
testFunction('texttwisttime','timetwisttext', true);
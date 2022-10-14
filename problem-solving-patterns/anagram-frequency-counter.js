const validAnagram = (firstString, secondString) => {
    // Check if string length is the same
    if(firstString.length !== secondString.length)
        return false;

    const lookup = {};

    //set up frequency counter of first string
    for(let char of firstString) // = O(n)
    {
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    }

    // Check each letter of second string
    for(let char of secondString)// = O(n) 
    {
        // If char is not in the lookup or lookup is 0
        // then we have a mismatch
        if(!lookup[char])           
            return false

        // Decrease one from the lookup
        lookup[char] -= 1;        
    }
    
    return true
} // = O(n)


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
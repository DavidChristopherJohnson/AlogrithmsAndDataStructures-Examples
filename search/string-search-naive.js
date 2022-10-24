//This example is provided by Colt Steele in his uDemy course
const naiveSearch = (long, short) => {
    let  count = 0;
    //Loop around the string to check the full input
    for(let  i = 0; i < long.length; i++){
        //loop around the search pattern
        for(let  j = 0; j < short.length; j++){
            //check if the character of the search string
            //matches it's corrosponding location based on the current index in 
            //the input text
            //If it does not match break out of the short string loop
           if(short[j] !== long[i+j]) break;
           //If there was a match and the current index of the short string
           //is the last index of the short string, we have a full text match so
           //increase the match
           if(j === short.length - 1) count++;        
        }
    }
    //Return matched count
    return count;
}

const result = naiveSearch("lorie loled", "lo");

console.log(result);
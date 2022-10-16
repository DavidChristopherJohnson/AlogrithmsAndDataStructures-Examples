// Example of a recursive function adding values to 
// a number as it counts down
const sumRange = (num) => {
    // If we've reached '1' (our base case) or below then return it
    if (num <= 1)
        return num;

    // Return the current number, plus the results of 
    // a recursive call to the sumRange function using the current number
    // minus 1
    return num + sumRange(num - 1);
}

console.log(sumRange(3));

//NOTE: Example provided from Colt Steele's course

//  sumRange(3)
//      return 3 + sumRange(2)
//          sumRange(2)
//              return 2 + sumRange(1)
//                  sumRange(1)
//                      return 1
//
//  
//-------Return stack-----
//  return 1
//      return 1 + 2 (3)
//          return 3 + 3 (6)


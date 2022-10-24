const sortNumberBuiltIn = (nums) => nums.sort();

let result = sortNumberBuiltIn([7,10,3,2,1,16]);
console.log('Built in sort on numbers: ', result );

const sortNumberWithCompareFunction = (nums) => nums.sort((a,b) => a - b);

result = sortNumberWithCompareFunction([7,10,3,2,1,16])
console.log('Sort numbers with comparison: ', result);

const sortStringByLength = (strs) => strs.sort((a,b) => a.length - b.length);

result = sortStringByLength(["one","two","three","four","five","six","seven","eight","nine","ten"]);
console.log('Sort string by length: ', result)
// NOTE: This is a direct extract from 'Javascript Algorithms and Data Structures Mastercalss' course (https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)
// by Colt Steele

// This is used to provide demonstrations on showing the callstack in runtime

// This would need to be run in a debugger where you can step through and inspect the callstack (maybe as a snippet in chrome?) 
function takeShower(){
    return "Showering!"
}

function eatBreakfast(){
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()*items.length)];
}
function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!")
}

wakeUp()
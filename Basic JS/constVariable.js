function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";
    //sentence = str + " is amazing!";
    for(let i =0; i < str.length; i+=3){
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");
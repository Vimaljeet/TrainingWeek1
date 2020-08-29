/* var sum = 0;
function change(num) {
    return (num + 5) / 3;
}
sum = change(10);
console.log(sum); */

   
/* function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); */

// strict equal operator 3 ===3
/* function compareEquality(a, b) {
    if(a === b) {
        return "Equals";
    }
    return "Not Equals";
}

console.log(compareEquality(10, "10")); */

// strict inequal operator 3 !==3 
/* function compareEquality(a, b) {
    if(a !== b) {
        return " Not Equals";
    }
    return "Equals";
}

console.log(compareEquality(10, "10")); */

//Comparison with the Logical And Operator
/* function testGreaterOrEqual(val) {
    if(val <=20 && val >=10) {
        return "Between 20 and 10";
    }
    return "Greater then 20";
}

console.log(testGreaterOrEqual(18)); */ 


//Comparison with the Logical Or Operator
/* function testGreaterOrEqual(val) {
    if(val < 10 && val > 20) {
        return "Outside";
    }
    return "Inside";
}

console.log(testGreaterOrEqual(18)); */


//Golf Code
/* 
Strokes      Return
1            "Hole-in-one!"
<= par - 2   "Eagle"
par - 1      "Birdie"
par          "Par"
par + 1      "Bogey"
par + 2      "Double Bogey"
>= par + 3   "Go Home!"
*/
/* var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
function golfScore(par, strokes) {
    if(strokes == 1){
        return names[0]
    } else if(strokes <= par - 2){
        return names[1];
    }else if(strokes == par - 1){
        return names[2];
    }else if(strokes == par){
        return names[3];
    }else if(strokes == par + 1){
        return names[4];
    }else if(strokes == par + 2){
        return names[5];
    }else if(strokes >= par + 3){
        return names[6];
    }
}

//Change this values to test
console.log(golfScore(5, 2)); */


//Object Output
/*var ourDog = {
     "name": "VjSb",
     "age" : 21
 };
console.log(ourDog); */


//Adding Properties to object
/* var ourDog = {
    "name": "VjSb",
    "age" : 21
};
ourDog['bark'] = "boow-wow";
console.log(ourDog); */


//Deleting properties from object
/* var ourDog = {
    "name": "VjSb",
    "age" : 21,
    "fun": 'nofun'
};
console.log(ourDog);
delete ourDog.fun;
console.log(ourDog); */


//Using objects for lookups
/* function phoneticlookup(val){
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago"
    };
    result = lookup[val];
    return result;
}
console.log(phoneticlookup("charlie")); */


//Testing properties for objects
/* var myObj = {
    "gift": "pony",
    "pet": "kitten",
    "bed": "sleigh"
}
function checkObj(checkProp) {
    if(myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}

console.log(checkObj('tail')); */


//
/* var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }, {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": "2003",
        "formats": [
            "Youtube Video"
        ] 
    }

];
console.log(myMusic); */

/* var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents); */

//While loop
/* var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray); */


//Random numbers within a range
/* function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15); 

console.log(myRandom); */

//  parseInt
/* function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("56")); */


//Ternary operator
//SYNTAX
// condition ? statement-if-true : statement-if-false;
/* function checkEqual(a, b) {
    return a === b ? true : false;
} */


//Multiple ternary operator
/*function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(0)); */


//scope of let and var
/* function checkScope() {
    "use strict";
    //let i = "function scope";
    if(true) {
        var i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
checkScope(); */


//const read only variable
/* function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";
    //sentence = str + " is amazing!";
    for(let i =0; i < str.length; i+=3){
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp"); */


//mutating array with const
/* const s = [5, 7, 2];
function editInPlace() {
    "use strict"

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(s); */


//
/* function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log( ex );
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI); */


//Anonymous function
/* var magic = () => {
    return new Date();
} 
//or we can shorten this by
canst magic = () => new  Date(); */


//Arrow Function with parameters
/* const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5])); */


//rest operator (without)
/* const sum = (function() {
    return function sum(x, y, z) {
        const args = [ x, y, z ];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); */
//with rest operator(...)
/* const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4, 5)); */
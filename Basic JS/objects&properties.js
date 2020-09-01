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
        "alpha": "vj",
        "bravo": "vjs",
        "charlie": "vjsb"
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
        "artist": "VjSb",
        "title": "taare gin gin",
        "release_year": 2020,
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

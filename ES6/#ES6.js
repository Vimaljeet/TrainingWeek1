"use strict"
/*var a = "test1"
let b = "test2"
console.log(b);*/

//classes
/*class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static countUsers(){
        console.log('There are 50 Users');
    }

    register(){
        console.log(this.username+' is now registered')
    }
}

//let bob = new User('bobby', 'bob@email.com', '12345');
//bob.register(); 

//calling ststic methods
//User.countUsers();

class Member extends User{
    constructor(username, email, password, memberPackage){
        super(username, email, password);
        this.package = memberPackage;
    }

    getPackage(){
        console.log(this.username+ ' is subscribed to the '+this.package+' package')
    }
}

let mike = new Member('mike', 'mike@gmail.com', '12345', 'Standard');

mike.getPackage();
mike.register();*/

//template literal
/*let name= 'John';

function makeUppercase(word){
    return word.toUpperCase();
}

let template = 
`<h1>${makeUppercase('Hello')} ${name}</h1>
<p>This is simple template in JavaAcript<p>`;

document.getElementById('template').innerHTML = template;*/

// string and nummber methods
/*let theString = 'Hello, my name is Brad and I love JavaScript';

// startWith();
// endWith();
// imcludes();

//console.log(theString.startsWith('Hello'));
//console.log(theString.endsWith('JavaScript'));
//console.log(theString.includes('love'));

//Hex
//console.log(0xFF);
// Binary
//console.log(0b101011);
// Octal
//console.log(0o543);

//console.log(Number.isFinite(NaN));
//console.log(Number.isNaN('string'));
console.log(Number.isInteger(5));*/

//
/*
let myArray = [11, 22, 34, 65, 34];
let mySet = new Set(myArray);

mySet.add('100');
mySet.add({a: 1, b: 2});
mySet.delete(22);
//mySet.clear();
mySet.add(100);
mySet.add('200');

//console.log(mySet.size);

mySet.forEach(function(val){
    console.log(val);
});

let myMap = new Map([['a1','Hello'], ['b2', 'Goodbye']]);
myMap.set('c3', 'Foo');
myMap.delete('a1');
console.log(myMap.size);
*/

let carWeakSet = new WeakSet();

let car1 = {
    make: 'Honda',
    model: 'Civic'
}

carWeakSet.add(car1);

console.log(carWeakSet);



const string = 'all your base are belong to us';
const regex = /^base$/;
const isExisting = regex.test(string);
console.log(isExisting);
 

//character classes
//[a-z] [0-9]
//Expression: cody?
//Ex: my name is cody?
//Ex: my name is cod

//3char age
//Expression: Age is [0-9]{1,3}
//Ex: Age is 1
//Ex: Age is 12
//Ex: Age is 123

//[0-9] or /d
//Expression: Age is /d+
//Ex: Age is 4525989

//[a-z][A-Z] or /w
//Expression: Name is /w+
//Ex: Name is cody







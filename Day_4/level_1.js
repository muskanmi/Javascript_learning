//ques 1
let age = 2010
let now = new Date();
let y = now.getFullYear()
let c= 0;
for(let i = age; i <= y; i++){
    c++;
}
if(c >= 18){
    console.log('You are old enough to drive');
}
else{
    let r = 18 - c
    console.log('You will be allowed to drive after ' + r + ' years');
}

//ques 2
let myAge = 250
let yourAge = 25
if(myAge > yourAge){
    console.log("I am " + myAge + " years older than you");
} 
else{
    console.log("I am " + myAge + " years younger than you");
}

//ques 3
let a = 4
let b = 3
if(a > b){
    console.log(a + " is greater than " + b);
}
else{
    console.log(b + " is greater than " + a);
}

a > b
? console.log(a + " is greater than " + b)
: console.log(b + " is greater than " + a)

//ques 4
const prompt = require("prompt-sync")({ sigint: true});  // for prompt working vscode. (npm install prompt-sync)
let number = prompt('Enter a number')
if(number%2 == 0){
    console.log(number + " is an even number ");
}
else{
    console.log(number + " is an odd number")
}

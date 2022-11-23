//ques 1
let firstName = "abc"
let lastName = "bcd"
let country = "in"
let city = "dl"
let age = 22
let isMarried = false
let year = 2001

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//ques 2
let type = '10'
let type2 = 10
console.log(type == type2);
console.log(type === type2);

//ques 3
console.log(parseInt('9.8') == 10);
console.log(parseInt('9.8') === 10);
console.log(parseInt('10.8') == 10);

//ques  4
let first = null
if (first){
    console.log("I am truthy");
}
else{
    console.log("I am falsy");
}

let second = true
if (second){
    console.log("I am truthy");
}
else{
    console.log("I am falsy");
}

//ques 7
const now = new Date();
let yar = now.getFullYear();
console.log(yar);
let month = now.getMonth() + 1;
console.log(month);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());
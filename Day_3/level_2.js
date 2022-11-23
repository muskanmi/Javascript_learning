// //ques 1
// let base = prompt('Please enter base')
// let height = prompt('Please enter height')

// console.log(base * height);

// //ques 2
// let a = prompt('Please enter side a')
// let b = prompt('Please enter side b')
// let c = prompt('Please enter side c')
// console.log(a+b+c);

// //ques 3
// let length = prompt('Please enter length')
// let breadth = prompt('Please enter breadth')
// console.log(length * breadth);
// console.log(2 * (length + breadth));

// //ques 4
// let radius = prompt('Please enter radius')
// console.log(3.14 * radius * radius);

// //ques 9
// let hours = prompt('Please enter hours')
// let rate = prompt('Please enter rate') 
// console.log("Pay of ther person = " + hours * rate);

// //ques 10
// let name = prompt('Please enter name')
// if(name.length > 7){
//     console.log("Your name is long");
// }
// else{
//     console.log("Your age is short");
// }

//ques 11
let firstName = 'Asabeneh'
let familyName = 'yetayeh'
if(firstName.length > familyName.length){
    console.log("your first name, " +firstName + " is longer than your family name, " + familyName);
}
else{
    console.log("your first name, " +firstName + " is short than your family name, " + familyName);
}

//ques 12
let myAge = 250
let yourAge = 25
if(myAge > yourAge){
    console.log("I am " + myAge + " years older than you");
} 
else{
    console.log("I am " + myAge + " years younger than you");
}

//ques 13
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

//ques 14
let ye = 100
let h = 365 * 24 * ye;
let m = h * 60
let sec = m * 60
console.log(sec);

//ques 15
let nowD = new Date();
let years = nowD.getFullYear()
let month = nowD.getMonth() + 1
let day = nowD.getDate()
let times = nowD.getHours()
let minutes = nowD.getMinutes()
console.log(years + '-' + month + '-' + day + ' ' + times + ':' + minutes);
console.log(day + '-' + month + '-' + years + ' ' + times + ':' + minutes);
console.log(day + '/' + month + '/' + years + ' ' + times + ':' + minutes);
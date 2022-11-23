let now = new Date()
let yeras = now.getFullYear()
let month = String(now.getMonth()).padStart('2', 0)
let date = String(now.getDate()).padStart('2', 0)
let time = now.getHours()
let minute = now.getMinutes()

console.log(yeras + "-" + month + "-" + date + " " + time + "-" + minute);

// //The padStart() method in JavaScript is used to pad a string with another string until it reaches the given length. The padding is applied from the left end of the string.

// Syntax:

// string.padStart(targetLength, padString)
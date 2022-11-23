//ques 1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
// const countries = ['Finland', 'Sweden', 'Norway']

// let c = [...a, ...b]
// // console.log(c);

// let A = new Set(a);
// let B = new Set(b);
// let C = new Set(c);
// console.log(C);

// //ques 2
// let one = new Set(a);
// let two = new Set(b);

// let ct = a.filter((num) => B.has(num))
// let three = new Set(ct);
// console.log(three);

//ques 3
let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => !B.has(num))
let C = new Set(c)

console.log(C)
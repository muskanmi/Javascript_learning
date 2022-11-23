//ques 1
let full = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month'
let pattern = /\d+/g;
let number = full.match(pattern);
let sum = 0;
for(let i = 0; i < number.length; i++) {
    sum += parseInt(number[i])
}
console.log(number);
console.log(sum);

//ques 2
let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
let sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
let distance = 12

//ques 3
let vari = "12abcd#"
console.log(vari.match(/^[a-zA-Z][0-9]*/));


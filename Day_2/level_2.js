const paragraph = "The quote \"There is no excercise better for the heart than reaching down and lifting \
people up.\" by John Holmes teaches us to help one another."

console.log(paragraph)

//ques 3
var integer = 10
var string = '10'
console.log(integer === string) // it is now showing false and we need to make it true
var convert_string = Number(string)
console.log(convert_string === integer)

//ques 4
var float_variable = 9.8
var integer_variable = 10
console.log(typeof float_variable);
console.log(typeof integer_variable);
console.log(float_variable === integer_variable); //it has to made true
var integer_change = Math.round(float_variable)
console.log(integer_change == integer_variable);
console.log(integer_change === integer_variable);

//ques 5
var first = "python"
var second = "jargon"
console.log(first.includes("on"))
console.log(second.includes("on"))

//ques 6
var jargon = "I hope this course is not full of jargon"
console.log(jargon.includes("jargon"));

//ques 7
console.log(Math.floor(Math.random() * 101));
console.log(Math.floor(Math.random() * 100) + 1);

//ques 8    
let min = 50;
let max = 100;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

//ques 9 
console.log(Math.floor(Math.random() * 256))

//ques 10 
console.log(Math.floor(Math.random() * "Jacascript"))

//ques 11
let n = 5
let pattern = "";
for(let i = 1; i<=n; i++){
    pattern += i
    pattern += "\t"
    for(let j=0; j<n-1; j++){
        let power = Math.pow(i, j)
        pattern += power;
        pattern += "\t"
    }
    pattern += "\n";
}
console.log(pattern);

//ques 12
let country = 'You cannot end a sentence with because because because is a conjunction'
console.log(country.substring(31, 54))   
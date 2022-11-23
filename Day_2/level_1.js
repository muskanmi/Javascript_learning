var challenge = "30 Days Of JavaScript"

//ques 2
console.log(challenge);

//ques 3
console.log(challenge.length);

//ques 4
console.log(challenge.toUpperCase());

//ques 5
console.log(challenge.toLowerCase())

//ques 6
console.log(challenge.substr(0, 2))
console.log(challenge.substring(0, 2)) // cut the word one less than the last index. i.e. 0 and 1.

//ques 7
console.log(challenge.substring(3)) 

//ques 8
console.log(challenge.includes("Script")) // checks if script present in the string

//ques 9
console.log(challenge.split()) // splits into array .

//ques 10
console.log(challenge.split(" ")) //this will split as word after spaces [30, days, of, javascript]
console.log(challenge.split(""))  //this will split each character with spaces.
console.log(challenge.split(",")) // splits whole string into array as ['30 Days of JavaScript']

//ques 11
var other_string = "Facebook Google Microsoft, Apple, IBM, Oracle, Amazon"
console.log(other_string.split(" ")) 

//ques 12
console.log(challenge.replace("JavaScript", "Python"))

//ques 13
console.log(challenge.charAt(15))

//ques 14
console.log(challenge.charCodeAt('J'))

//ques 15
console.log(challenge.indexOf('a')) //search from starting.

//ques 16
console.log(challenge.lastIndexOf('a')) //search from last.

//ques 17
var because = "You cannot end a sentence with because because because is a conjunction"
console.log(because.indexOf("because"))

//ques 18
console.log(because.lastIndexOf("because"))

//ques 19
console.log(because.search("because"))

//ques 20
var trim_string = "            30 Days Of JavaScript         "
console.log(trim_string.trim())

//ques 21
console.log(challenge.startsWith("30")) //starts with should be true

//ques 22
console.log(challenge.endsWith("JavaScript")) //ends with should be true

//ques 23
console.log(challenge.match('a'))

//ques 24
var first = "30 Days Of"
var second = "Javascript"
console.log(first.concat(second)) //we can add two string by plus sign also

//ques 25
console.log(challenge.repeat(2))
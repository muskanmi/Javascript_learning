const prompt = require("prompt-sync")({ sigint: true});

//ques 1
function userIdGeneratedByUser(){
    let no_of_characters = prompt('Enter number of characters')
    let no_of_id = prompt('Enter number of id')
    let characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let userId = ""
    while(no_of_id != 0){
        for(let i=0; i< no_of_characters; i++){
            userId += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        userId += "\n"
        no_of_id--;
    }
    return userId;
}
console.log(userIdGeneratedByUser());

//ques 2
function rgbColorGenerator(){
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    let rgb = "rgb(" + x + "," + y + "," + z + ")";
    console.log(rgb);
}
rgbColorGenerator()

//ques 3
function arrayOfHexaColors(){
    let no_of_id = prompt('Enter number of id')
    let letters = "0123456789ABCDEF"
    let color = "";
    while(no_of_id != 0){
        color += "#"
    for(let i =0; i<6; i++){
        color += letters.charAt(Math.floor(Math.random() * letters.length))
    }
    color += ", "
    no_of_id--;   
}
    return new Array(color)
}
console.log(arrayOfHexaColors());

//ques 4
function arrayOfRgbColors(){
    let no_of_id = prompt('Enter number of id')
    let rgb = ""
    while(no_of_id != 0){
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    rgb += "rgb(" + x + "," + y + "," + z + ")";

    rgb += ", "
    no_of_id--
    }
    return new Array(rgb)
}
console.log(arrayOfRgbColors());

//ques 5
function convertHexaToRgb(color){
    let c = color.slice(1, 3);
    let d = color.slice(3, 5)
    let e = color.slice(5);

    return "RGB("+parseInt(c,16)+","+parseInt(d,16)+","+parseInt(e,16)+")"
}
console.log(convertHexaToRgb("#00ff00"));

//ques 6
function convertRgbToHexa(r, g, b){
    let hex = "#"
    hex += r.toString(16);
    hex += g.toString(16);
    hex += b.toString(16);

    return hex;
}
console.log(convertRgbToHexa(12, 51, 255));

//ques 7
function generateColors(color_ch, no_of_color_dis){
    let result = [];             
    while(no_of_color_dis != 0){
    if(color_ch === 'rgb'){
            let x = Math.floor(Math.random() * 256)
            let y = Math.floor(Math.random() * 256)
            let z = Math.floor(Math.random() * 256)
            let rgb_color = "rgb(" + x + "," + y + "," + z + ")";
            result.push(rgb_color);
    }
    else if(color_ch === 'hexa'){
        let letters = "0123456789ABCDEF"
            let hex_color = "#"
            for(let i =0; i<6; i++){
                hex_color += letters.charAt(Math.floor(Math.random() * letters.length))
            }   
            result.push(hex_color)
        }
    no_of_color_dis--;
    }
    return result;
}
console.log(generateColors('rgb', 5));
console.log(generateColors('hexa', 3));

//ques 8
//fisher-yate's algorithm
function shuffleArray(arr){
    for(let i=arr.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1))
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
console.log(shuffleArray([1,2,3,4]));

//ques 9
function factorial(number){
    let f= 1;
    for(let i=1; i<=number; i++){
        f = f * i;
    }
    return f;
}
console.log(factorial(5));

//ques 10
function isEmpty(empty){
    return empty == null;
}
console.log(isEmpty("hb"));
console.log(isEmpty());

//ques 11
function sum(...argument){
    let sum = 0
    for(let x of argument){
        sum += x;
    }
    return sum;
}
console.log(sum(1,2,3));

//ques 12
function sumOfArrayItems(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        if(isNaN(array[i])){
            return "Array contains a number"
        }
        else{
            sum += array[i];
        }
    }
    return sum;
}
console.log(sumOfArrayItems([1,2,'abc']));
console.log(sumOfArrayItems([1,2,3]));

//ques 13
function average(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(isNaN(arr[i])){
            return "Array contains a number"
        }
        else{
            sum += arr[i];
        }
    }
    return sum/arr.length;
}
console.log(average([1,2,'abc']));
console.log(average([1,2,3]));

//ques 14
function modifyArray(arr){
    if(arr.length >= 5){
        arr = arr.map(function (e) { 
            return e.toUpperCase()
        });
    }
    else{
        return "Item not found"
    }
    return arr;
}
console.log(modifyArray(['ab','cd','ef','gh','ij']));
console.log(modifyArray(['ab','cd','ef','gh']));

//ques 15
function isPrime(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
      var prime = num != 1;
      for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  }
  console.log(isPrime(8));

  //ques 16
  function uniqueNumbers(arr){
    let s = new Set();
    for(let i=0; i<arr.length; i++){
        s.add(arr[i])
    }
    return (s.size == arr.length)
  }
  console.log(uniqueNumbers([1,2,3,3]))

  //ques 17
  function sameDataType(arr){
   return arr.every(val => val === arr[0]);
  }
  console.log(sameDataType([1,1,1]));
  console.log(sameDataType([1,2,3]));

  //ques 18
  function isValidVariable(variable){
    for(let i=0; i<variable.length; i++) {
        if(variable.charAt(i) == ' '){
            return "it is not"
        }
        if(variable.charAt(0) == '1' || variable.charAt(0) == '2' || variable.charAt(0) == '3' || variable.charAt(0) == '4' || variable.charAt(0) == '5' || variable.charAt(0) == '6' || variable.charAt(0) == '7' || variable.charAt(0) == '8' || variable.charAt(0) == '9' || variable.charAt(0) == '0'){
            return "it is not"
        }
    }
    return "it is valid"
  }
  console.log(isValidVariable("ewmbdjwe"));
  console.log(isValidVariable("_ewmbdjwe"));
  console.log(isValidVariable("12ewmbdjwe"));
  console.log(isValidVariable("ewmbdjw e"));

  //ques 19
  function sevenRandomNumbers(){
    let n = ""
    for(let i=0; i<7; i++){
        n += Math.floor(Math.random() * 10)
    }
    let no = [n];
    return no;
  }
  console.log(sevenRandomNumbers());
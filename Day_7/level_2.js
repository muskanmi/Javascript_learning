//ques 3
function printArray(arr){
    for(let x of arr){
        console.log(x);
    }
}
printArray([1, 2, 3, 4]);

//ques 4
function showDateTime(){
    let now = new Date()
    let date = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let time = now.getHours();
    let minutes = now.getMinutes();
    console.log(date + "/" + month + "/" + year + " " + time + ":" + minutes);
}
showDateTime();

//ques 5
function swapValues(x, y){
    let temp = x;
    x = y;
    y = temp;
    return x + " " + y;
}
console.log(swapValues(3, 7));

//ques 6
function reverseArray(arr){
    for(let i=arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}
reverseArray([2, 5, 10]);

//ques 7
function capitalizeWords(arr) {
    return arr.map(element => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
  }
  console.log(capitalizeWords(['hello', 'world']));

// ques 8
function addItem(item){
    let arr = [1, 2, 3]
    arr.push(item)
    return arr
}
console.log(addItem(4));

//ques 9
function removeItem(index){
    let arr = [1, 2, 3]
    arr.shift(arr[index])
    return arr
}
console.log(removeItem(0));

//ques 10
function sumOfNumbers(number){
    let sum =0;
    for(let i=0; i<=number; i++){
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbers(5));

//ques 11
function sumOfOddNumbers(number){
    let sum = 0;
    for(let i=0; i<=number; i++){
        if(i%2 != 0){
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfOddNumbers(2));

//ques 12
function sumOfEvenNumbers(number){
    let sum = 0;
    for(let i=0; i<=number; i++){
        if(i%2 == 0){
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfEvenNumbers(5));

//ques 13
function evensAndOdds(integer){
    let count = 0, c=0;
    for(let i=0; i<=integer; i++){
        if(i%2 == 0){
            count++;
        }
        else{
            c++;
        }
    }
    console.log("even counts are " + count + " and odds count are " + c);
}
evensAndOdds(100)

//ques 14
function sumOfAnyArguments(...n){
    let sum = 0;
    for(let x of n){
        sum += x;
    }
    return sum;
}
console.log(sumOfAnyArguments(1, 2, 3));

//ques 15
function randomUserIp(){
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    let p = Math.floor(Math.random() * 256)
    let ip =  x + "." + y + "." + z + "." + p;
    console.log(ip);
}
randomUserIp()

//ques 16
function randomMacAddress(){
    let ab = "XX:XX:XX:XX:XX:XX".replace(/X/g, function() {
        return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
    })
    return ab;
}
console.log(randomMacAddress());

//ques 17
function randomHexaNumberGenerator(){
    let letters = "0123456789ABCDEF"
    let color = "#"
    for(let i =0; i<6; i++){
        color += letters.charAt(Math.floor(Math.random() * letters.length))
    }   
    return color
}
console.log(randomHexaNumberGenerator());

//ques 18
function userIdGenerator(){
    let characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let userId = ""
    for(let i=0; i< 7; i++){
        userId += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return userId;
}
console.log(userIdGenerator());
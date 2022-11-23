const prompt = require("prompt-sync")({ sigint: true});

//ques 1
let marks = prompt('Enter the marks')
if(marks >= 80 && marks <= 100){
    console.log('A');
}
else if(marks >= 70 && marks <= 79) {
    console.log('B');
}
else if(marks >= 60 && marks <= 69){
    console.log('C');
}
else if(marks >= 50 && marks <= 59){
    console.log('D');
}
else{
    console.log('F');
}

//ques 2
let month = prompt('Enter a month')
if(month == 'September' || month == 'October' || month == 'November'){
    console.log('The season is Autumn');
}
else if(month == 'December' || month == 'January' || month == 'February'){
    console.log('The season is Winter');
}
else if(month == 'March' || month == 'April' || month == 'May'){
    console.log('The season is Spring');
}
else if(month == 'June' || month == 'July' || month == 'August'){
    console.log('The season is Summer');
}

//ques 3
let day = prompt('Enter a day')
if(day == 'Saturday' || day == 'Sunday'){
    console.log(day + ' is a weekend');
}
else{
    console.log(day + ' is working');
}
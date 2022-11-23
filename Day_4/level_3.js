const prompt = require("prompt-sync")({ sigint: true});

//ques 1
let month = prompt('Enter a month')
month = month.toLowerCase()
if(month == 'february'){
    console.log('February has 28 days');
}
else if(month == 'january' || month == 'march' || month == 'may' || month == 'july' || month == 'august' || month == 'october' || month == 'december'){
    console.log('Number of days is 31');
}
else{
    console.log('Number of days is 30');
}

let year = 2016
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
    console.log('leap year');
}
else{
    console.log('not leap year');
}

//ques 2
//same as above
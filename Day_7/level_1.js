//ques 1
function fullName(n) {
    console.log("Hello " + n);
}
fullName("abc")

//ques 2
function fullName(first, last) {
    console.log(first + " " + last);
}
fullName("abc", "xyz")

//ques 3
function  addNumbers(a, b){
    return a +b;
}
console.log(addNumbers(2, 3))

//ques 4
function areaRectangle(length, breadth){
    return "area is " + length * breadth;
}
console.log(areaRectangle(4, 5));

//ques 5
function perimeterOfRectangle(length, width){
    return 2 * (length + width);
}
console.log(perimeterOfRectangle(2, 3));

//ques 6
function volumeOfRectPrism(length, width, height){
    return length * width * height;
}
console.log(volumeOfRectPrism(2, 3, 4));

//ques 7
function areaOfCircle(r){
    return 3.14 * r * r;
}
console.log(areaOfCircle(2));

//ques 8
function circumOfCircle(r){
    return 2 * 3.14 * r
}
console.log(circumOfCircle(2));

//ques 9
function density(mass, volume){
    return mass / volume;
}
console.log(density(6, 2));

//ques 10
function speed(distance, time){
    return distance / time
}
console.log(speed(10, 5));

//ques 11
function weight(mass, gravity){
    return mass * gravity;
}
console.log(weight(2, 5));

//ques 12
function convertCelsiusToFahrenheit(oC){
    let oF = (oC * 9/5) + 32
    return oF;
}
console.log(convertCelsiusToFahrenheit(4));

//ques 13
function bmi(weight, height){
    let BMI = weight / (height * height);
    if(BMI < 18.5){
        return "Underweight";
    }
    else if(BMI >= 18.5 && BMI <= 24.9){
        return "normal weight";
    }
    else if(BMI >= 25 && BMI <= 29.9){
        return "Overweight";
    }
    else{
        return "Obese";
    }
}
console.log(bmi(55, 153));

//ques 14

function checkSeason(month) {

    if (3 <= month <= 5) {
        return 'spring';
    }

    if (6 <= month <= 8) {
        return 'summer';
    }

    if (9 <= month <= 11) {
        return 'fall';
    }

    // Months 12, 01, 02
    return 'winter';
}
console.log(checkSeason(10));

//ques 15
function findMax(n1, n2, n3){
    if(n1 > n2 && n1 > n3){
        return n1;
    }
    else if(n2 > n1 && n2 > n3){
        return n2;
    }
    else{
        return n3;
    }
}
console.log(findMax(3, 5, 10));
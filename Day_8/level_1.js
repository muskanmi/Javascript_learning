//ques 1
const dog = {}
console.log(dog);

//ques 2
console.log(dog);

//ques 3
dog.name = 'Cherry'
dog.legs = 4
dog.color = 'Brown'
dog.age = 10
dog.bark = function() {
    return "woof woof";
}

//ques 4
console.log(dog);
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);

//ques 5
dog.breed = ''
dog.getDogInfo = function() {   
    return "My name is " + dog.name;
}
console.log(dog.getDogInfo); 
console.log(dog.getDogInfo());


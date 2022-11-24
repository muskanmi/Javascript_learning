//ques 1
class Aniaml{
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    saySomething(){
        console.log("ANimal is saying something");
    }
    sayBoohBooh(){
        console.log("dog says Booh Boooh!");
    }
}

class Dog extends Aniaml{

}
class Cat extends Aniaml{
}
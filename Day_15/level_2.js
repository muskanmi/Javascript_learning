//ques 1
class Aniaml{
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    saySomething(){
        console.log("Animal is saying something");
    }
    sayBoohBooh(){
        console.log("Animal says Booh Boooh!");
    }
}

class Dog extends Aniaml{
    saySomething(){
        console.log("Dog is saying something");
    }
    sayBoohBooh(){
        console.log("Dog says Booh Boooh!");
    }
}
class Cat extends Aniaml{
    saySomething(){
        console.log("Cat is saying something");
    }
    sayBoohBooh(){
        console.log("Cat says Booh Boooh!");
    }
}

const obj = new Dog();
obj.saySomething();
obj.sayBoohBooh();
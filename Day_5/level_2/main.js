//ques 1

first = require("./countries")
second = require("./web_techs")

console.log(first.countries);
console.log(second.webTechs);

//ques 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
console.log(words)
console.log(words.split(" "))
let c = 0;
for(let i = 0; i < words.length; i++) {
    if(words[i] == " "){
        c++;
    }
}
console.log(c);

//ques 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
console.log(shoppingCart);
// for(let i=0; i<shoppingCart.length; i++){
//     if(shoppingCart[i] == 'Honey'){
//         console.log(shoppingCart[i].splice());
//     }
// }
console.log(shoppingCart.indexOf('Honey'));
console.log(shoppingCart.splice(4, 1));
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

//ques 4
for(let i=0; i<first.countries.length; i++) {
    if(first.countries[i] == 'Ethiopia'){
        console.log("ETHIOPIA");
    }
}

//ques 5
for(let i=0; i<second.webTechs.length; i++) {
    if(second.webTechs[i] == 'Saas'){
        console.log("Sass is a CSS preprocess");
    }
    else{
        second.webTechs.push('Saas')
        console.log(second.webTechs);
        break;
    }
}

//ques 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
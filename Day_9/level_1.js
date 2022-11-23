const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//ques 1
//ques 2
const callback = (n) => {
    return n ** 2;
}
console.log(callback(2));

//ques 3
countries.forEach(element => {
    console.log(element);
});
console.log("\n");

//ques 4
names.forEach(element => {
    console.log(element);
})
console.log("\n");

//ques 5
numbers.forEach(element => {
    console.log(element);
})

//ques 6
const upper = countries.map(e => {
    return e.toUpperCase();
  })
  console.log(upper);

//ques 7
const copy_countries = countries.map(e => {
    return e;
})
console.log(copy_countries)

//ques 8
const square_number = numbers.map(e => {
    return e ** 2;
})
console.log(square_number);

//ques 9
const upper_name = names.map(e => {
    return e.toUpperCase();
  })
  console.log(upper_name);

//ques 10
let product_prices = products.map((product) =>({ ...product, price: product.price * 0.75 }));
console.log(product_prices);

//ques 11
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

//ques 12
const six_character = countries.filter((country) => {
    return country.length == 6
})
console.log(six_character);

//ques 13
const six_more_character = countries.filter((country) => {
    return country.length >= 6
})
console.log(six_more_character);

//ques 14
const startsWith_E = countries.filter((country) => {
    return country.startsWith("E")
})
console.log(startsWith_E);

//ques 15
    for (var i=0;i<products.length;i+=1) {
        if(products[i].price.length != 0){
            console.log(products[i]);
        }
    }

//ques 16
function getStringLists(arr){
    let arrr = [];
    for(let i=0; i<arr.length; i++) {
        if(typeof(arr[i]) == 'string'){
            arrr.push(arr[i])
        }
    }
    return arrr;
}
console.log(getStringLists(["abc", "efg", 2, 3]));

//ques 17
const sum = numbers.reduce((acc, cur) => {
    return acc + cur
})
console.log(sum);

//ques 18
var concatenate_String = countries.reduce(function(prevVal,currVal,idx){
    let sentence =  idx == 0 ? currVal : prevVal + ', ' + currVal;
    return sentence;
}, '')
console.log(concatenate_String  + " are north European countries");

//ques 19
//ques 20
const areSomeSeven = names.some((e) => {
    return e.length > 7
})
console.log(areSomeSeven);

//ques 21
const allEvery = countries.every((e) => {
    return e.includes('land')
})
console.log(allEvery);


//ques 22
//ques 23
const six_letter = countries.find((e) => {
    return e.length == 6;
})
console.log(six_letter);

//ques 24
const six_letter_index = countries.findIndex((e) => {
    return e.length == 6;
})
console.log(six_letter_index);

//ques 25
const norway_index = countries.findIndex((e) => {
    return e == "Norway";
})
console.log(norway_index);

//ques 26
const russia_index = countries.findIndex((e) => {
    return e == "Russia";
})
console.log(russia_index);
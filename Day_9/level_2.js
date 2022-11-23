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
let arr = [];
    for (var i=0;i<products.length;i+=1) {
        if(products[i].price.length != 0){
            arr.push(products[i].price)
        }
    }
console.log(arr);
//not chaining of two higher order functions
let price_sum = arr.reduce(function(acc, cur) {
    return acc + cur;
})
console.log(price_sum);

//ques 2
let price_sum2 = products.reduce(function(acc, cur) {
    return cur.price != '' ? acc + cur.price : "not valid sum";
}, 0)
console.log(price_sum2);

//ques 3
function categorizeCountries() {
    let res = [];
    for(let i=0; i<countries.length; i++) {
    if(countries[i].includes('land')){
        res.push(countries[i])
    }
    else if(countries[i].includes('ia')){
        res.push(countries[i])
    }
    else if(countries[i].includes('stan')){
        res.push(countries[i])
    }
}
    return res;
}
console.log(categorizeCountries());


const country = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

//ques 4
function letter_number(){
    let res = [];
    let c = 0;
    for(let i=0; i<country.length; i++) {
        c = 0;
        let first = country[i].charAt(0).toLowerCase();
        for(let j=0; j<country[i].length; j++){
            if(country[i].charAt(j) == first){
                c++;
                res.push(c);
            }
        }
    }
    return res;
}
console.log(letter_number());

//ques 5
function getFirstTenCountries() {
    let res = [];
    for(let i=0; i<10; i++) {
        res.push(country[i]);
    }
    return res;
}
console.log(getFirstTenCountries());

//ques 6
function getLastTenCountries(){
    let res = [];
    for(let i=10; i>0; i--) {
        res.push(country[i]);
    }
    return res;
}
console.log(getLastTenCountries());
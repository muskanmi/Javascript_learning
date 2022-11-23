///ques 1
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia'
]
console.time('regular')
for(let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}
console.timeEnd('regular')

console.time('while')
let i=0
while(i < countries.length){
    console.log(countries[i]);
    i++;
}
console.timeEnd('while')

console.time('for of')
for(let x of countries) {
    console.log(x);
}
console.timeEnd('for of')

console.time('for each')
let res = countries.forEach((e) => {
    console.log(e);
})
console.log(res);
console.timeEnd('for each')
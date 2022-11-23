//ques 1
let s = new Set();
console.log(s);

//ques 2
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(const e of numbers) {
    s.add(e);
}
console.log(s);

//ques 3
console.log(s.delete(2));
console.log(s);

//ques 4
console.log(s.clear());
console.log(s);

//ques 5
countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const set = new Set();
  set.add(countries[0])
  console.log(set);

  //ques 6
  const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const country = ['Finland', 'Sweden', 'Norway']
const map = new Map();
for(let i=0; i<country.length; i++){
    map.set(country[i], country[i].length);
}
console.log(map);
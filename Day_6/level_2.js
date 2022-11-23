const prompt = require("prompt-sync")({ sigint: true});
//ques 1
let length = prompt('Enter the length')
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let result = ''
for(let i=0; i<length; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length))
}
console.log(result);

//ques 2
let letters = "0123456789ABCDEF"
let color = "#"
for(let i =0; i<6; i++){
    color += letters.charAt(Math.floor(Math.random() * letters.length))
}
console.log(color);

//ques 3
let x = Math.floor(Math.random() * 256)
let y = Math.floor(Math.random() * 256)
let z = Math.floor(Math.random() * 256)
let rgb = "rgb(" + x + "," + y + "," + z + ")";
console.log(rgb);

//ques 4
const countries = [
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
  const upper = countries.map(e => {
    return e.toUpperCase();
  })
  console.log(upper);

//ques 5
const length_countries = countries.map(e => {
    return e.length;
})
console.log(length_countries);

//ques 6
const newArr = countries.map(item => {
  let upperFirstThree = item.toUpperCase().substring(0,3);
  let length = item.length;
  return [item, upperFirstThree, length];
})

console.log(newArr);

//ques 7
let land_array = countries.filter(e => {
  if(e.includes('land')){
    return e
  }
})
console.log(land_array);

//ques 8
let ia_array = countries.filter(e => {
  if(e.includes('ia')){
    return e
  }
})
console.log(ia_array);

//ques 9
var longest = countries.reduce(
  function (a, b) {
      return a.length - b.length >= 0 ? a : b;
  }
);
console.log(longest);

//ques 10
const countriesHaveFiveLetters = countries.filter((e) => {
  e.length === 5
})
console.log(countriesHaveFiveLetters);

//ques 11
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
var longest_webTechs = webTechs.reduce(
  function (a, b) {
      return a.length - b.length >= 0 ? a : b;
  }
);
console.log(longest_webTechs);

//ques 12
let arrays_webTech = webTechs.map(e => {
  let length = e.length;
  return [e, length];
})
console.log(arrays_webTech);

//ques 13
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let mern_array = mernStack.map(e => {
  let char = e.substring(0, 1);
  return char
});
console.log(mern_array.join(""));

//ques 14
const new_array = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for(let i=0; i<new_array.length; i++) {
  console.log(new_array[i]);
}
console.log("\n");
for(let x of new_array){
  console.log(x);
}

//ques 15
console.log("\n");
const fruit_array = ['banana', 'orange', 'mango', 'lemon']
for(let i=fruit_array.length - 1; i >= 0; i--){
  console.log(fruit_array[i]);
}

//ques 16
let fullStack_array = new_array.map(e => {
  let first = new_array.slice(0, 4);
  let second = new_array.slice(4);
  return [first, second];
})
console.log(fullStack_array);
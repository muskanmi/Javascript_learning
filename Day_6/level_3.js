//ques 1
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
  const duplicate = countries.slice()
  console.log(duplicate);

//ques 2
let sortedCountries = duplicate.sort()
console.log(sortedCountries);

//ques 3
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
console.log(webTechs.sort());
console.log(mernStack.sort());

//ques 4
let land_companies = countries.filter(e => {
    if(e.includes('land')){
        return e
    }
})
console.log(land_companies);

//ques 5
let higher = countries.reduce(
    function(a, b) {
        return a.length - b.length >= 0 ? a : b
    }
)
console.log(higher);

//ques 6
let land_companies_same = countries.filter(e => {
    if(e.includes('land')){
        return e
    }
})
console.log(land_companies_same);

//ques 7
//ques 9
let reverse_array = duplicate.reverse();
console.log(reverse_array);
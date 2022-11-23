const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

//ques 1
const user = [{ name: 'Alex', email: 'alex@alex.com', skills: ['HTML', 'CSS', 'JavaScript'], age: 20, isLoggedIn: false, points: 30 }, { name: 'Asab', email: 'asab@asab.com', skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'], age: 25, isLoggedIn: false, points: 50 }, { name: 'Brook', email: 'daniel@daniel.com', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'], age: 30, isLoggedIn: true, points: 50 }, { name: 'Daniel', email: 'daniel@alex.com', skills: ['HTML', 'CSS', 'JavaScript', 'Python'], age: 20, isLoggedIn: false, points: 40 },];
const [result] = user.sort((a, b) => b.skills.length - a.skills.length);
console.log(result);
  
//ques 2
function count(){
    return Object.values(users).filter(user => user.isLoggedIn).length
}
console.log(count());

function points_count(){
    return Object.values(users).filter(user => user.points >= 50).length
}
console.log(points_count());

//ques 3
function mern_count(){
    return Object.entries(users).filter(([_, user]) => user.skills.includes("MongoDB", "Express", "React", "Node")).map(([name]) => name).join(", ")
}
console.log(mern_count());

//ques 4
const copyPerson = Object.assign({}, users)
// console.log(copyPerson)
copyPerson.Muskan = {}
copyPerson.Muskan.email = '123@gmail.com'
copyPerson.Muskan.skills = ['mern', 'java', 'DSA']
copyPerson.Muskan.age = 21
copyPerson.Muskan.isLoggedIn = true
copyPerson.Muskan.points = 60
console.log(copyPerson);

//ques 5
console.log(Object.keys(users));

//ques 6
console.log(Object.values(users));

//ques 7
const countries = {
    name: 'England',
    capital: 'abc',
    population: 45000,
    languages: ['English', 'French', 'German']
}
console.log(countries);
console.log(countries['name']);
console.log(countries['capital']);
console.log(countries['population']);
console.log(countries['languages']);
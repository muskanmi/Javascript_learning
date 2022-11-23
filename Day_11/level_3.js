const arrObjs = [
    {id: 1, name: "Matheus"},
    {id: 2, name: "Joao"},
    {id: 3, name: "Pedro"}
  ]

  // [{}, {}]
  // [[], []]

  const array = arrObjs.map((obj) =>{
    return Object.keys(obj).map((key) => {
        return obj[key];
    })
  })
  console.log(array);


//ques 2
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

const myObj = Object.assign({}, students)
console.log(myObj); //creating only one object.



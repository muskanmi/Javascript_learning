
//map method
let arr = [45, 23, 21]
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + index
})

console.log(a)

//filter method
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) =>{
    return a < 10
})
console.log(a2)

//reduce method
let arr3 = [1, 2, 3, 5, 2, 1]
let newarr3 = arr3.reduce((value1, value2) =>{
    return value1 + value2
})
console.log(newarr3);
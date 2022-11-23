//ques 1
const arr = Array()

//ques 2
const array = new Array(1, 2, 3, 4, 5, 6, 7)
console.log(arr);
console.log(array);

//ques 3
console.log(array.length);

//ques 4
console.log(array[0])
console.log(array[3])
console.log(array[5])

//ques 5
let mixedDataTypes = [1, "name", true, 0]
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

//ques 6
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//ques 7
console.log(itCompanies);

//ques 8
console.log(itCompanies.length);

//ques 9
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])

//ques 10
for(let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i])
}

//ques 11
for(let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i].toUpperCase())
}

//ques 12
console.log(itCompanies.join(''));

//ques 13
if(itCompanies.includes("Amazon")){
    console.log("Amazon find");
}
else{
    console.log("Company is not found");
}

//ques 14
for(let i = 0; i < itCompanies.length; i++){
    let count=0;
    for(let j = 0; j < itCompanies[i].length; j++){
    if(itCompanies[i].charAt(j) == 'o'){
        count++;
    }
    }
    if(count >= 2){
        console.log(itCompanies[i]);
    }
}

//ques 15
console.log(itCompanies.sort());

//ques 16
console.log(itCompanies.reverse());

//ques 17
console.log(itCompanies.slice(0, 3));

//ques 18
console.log(itCompanies.slice(4));

//ques 19
console.log(itCompanies.slice(3, 4));

//ques 20
console.log(itCompanies.shift());
console.log(itCompanies);

//ques 21
console.log(itCompanies.splice(3, 1));
console.log(itCompanies);

//ques 22
console.log(itCompanies.pop());
console.log(itCompanies);

//ques 23
console.log(itCompanies.splice(0, itCompanies.length));
console.log(itCompanies);

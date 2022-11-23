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

  //ques 1
  for(let i=0; i <= 10; i++) {
    console.log(countries[i]);
  }

  let i = 0
  while(i <= 10){
    console.log(countries[i]);
    i++;
  }

  let j =0;
do{
    console.log(countries[j]);
    j++;
}while(j <= 10)


//ques 2
console.log("\n");
for(let i=10; i >= 0; i--) {
    console.log(countries[i]);
  }

  let i2 = 10
  while(i2 >= 0){
    console.log(countries[i2]);
    i2--;
  }

  let j2 = 10;
do{
    console.log(countries[j2]);
    j2--;
}while(j2 >= 0)

//ques 3
console.log("\n");
for(let i=0; i<countries.length; i++){
    console.log(countries[i]);
}
for(let i=0; i<webTechs.length; i++){
    console.log(webTechs[i]);
}
for(let i=0; i<mernStack.length; i++){
    console.log(mernStack[i]);
}

//ques 4
let pattern = "";
for(let i=1; i<=5; i++){
  for(let j=1; j<=i; j++){
    pattern += "#";
  }
  pattern += "\n";
}
console.log(pattern);

//ques 5
let p = 1;
for(let i = 0; i<= 10; i++){
  p = i * i;
  console.log(i + " * " + i + " = " + p);
}

//ques 6
console.log("i " + " i^2 " + " i^3 ");
for(let i = 0; i <= 10; i++){
  console.log(i  + " " +  i * i + " " +  i * i * i);
  // console.log(i + ` ${i * i}` + ` ${i * i * i}`);
}

//ques 7
for(let i =0; i<=100; i++){
  if(i%2 == 0){
    console.log(i);
  }
}

//ques 8
for(let i =0; i<=100; i++){
  if(i%2 != 0){
    console.log(i);
  }
}

//ques 9
for(let i =2; i<=100; i++){
  let flag =  0
  for(let j =2;j < i ; j++ ){
    if(i % j == 0){
      flag = 1;
      break;
    }
  }
  if(i > 1 && flag == 0){
    console.log(i);
  }
}

//ques 10
let sum = 0;
 for(let i=0; i<=100; i++) {
  sum += i;
 }
 console.log(sum);

 //ques 11
 let sum1 = 0, sum2 =0;
 for(let i =0; i<=100; i++){
  if(i%2 == 0){
    sum1 += i;
  }
  else{
    sum2 += i;
  }
 }
 console.log(sum1, sum2);

 //ques 12
//  console.log(sum1, sum2);
var arr = [];
arr.push(sum1, sum2)
console.log(arr);

//ques 13
let random_array = Array.from({length: 5}, () => Math.floor(Math.random() * 40));
console.log(random_array);
// OR
var a = [];
while(a.length < 5){
    var r = Math.floor(Math.random() * 100) + 1;
    a.push(r);
}
console.log(a);

//ques 14
var arr2 = [];
while(arr2.length < 8){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr2.push(r);
}
console.log(arr2);

//ques 15
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let result = ''
// let charactersLength = characters.length;
for(let i = 0; i < 5; i++){
  result += characters.charAt(Math.floor(Math.random() * characters.length))
}
console.log(result);



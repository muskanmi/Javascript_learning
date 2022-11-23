
//ques 1
let count = 'love is the best thing in this world. Some found their love and some are still looking for their love';
let arr = count.split(' ');
console.log(arr);
let c= 0;
for(let i=0; i<arr.length; i++){
    if(arr[i] == 'love'){
        c += 1;
    }
}
console.log(c);                     

//ques 2
const paragraph = 'You cannot end a sentence with because because because is a conjunction';
const regex = 'because';
const found = paragraph.match(regex);
if(found){
    let arr = paragraph.split(' ');
console.log(arr);
let c= 0;
for(let i=0; i<arr.length; i++){
    if(arr[i] == regex){
        c += 1;
    }
}
console.log(c); 
}

//ques 3
let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
sentence = sentence.replace(/[^a-zA-Z ]/g, "");
let ar = sentence.split(' ')
console.log(ar);
let max= 0, word = '';
for(let i=0; i<ar.length; i++){
    let cc =0;
    for(let j=0; j<ar.length; j++){
    if(ar[j] == ar[i]){
        cc += 1;
    }
}
if(max < cc){
    max = cc;
    word = ar[i]
}
}
console.log(word);

//ques 4
let salary_sentence = 'He earns 5000 euro from salary per month 10000 euro annual bonus 15000 euro online courses per month.'
let reg = /\d+/g
let matches = salary_sentence.match(reg)
console.log(matches);
let sum = 0
for(let i=0; i<matches.length; i++){
    // console.log(matches[i]);
    sum += parseInt(matches[i]);
}
console.log(sum);


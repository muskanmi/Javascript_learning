//ques 1
function tenMostFrequentWords(){
    paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
    // console.log(tenMostFrequentWords(paragraph))
}

let text = "cat dog stop rain cat"
let res = text.split(" ").forEach((element)=> {
    let occurences = text.match(new RegExp(element, 'g')).length
    console.log(`${element} - ${occurences}`);
});
console.log(res);


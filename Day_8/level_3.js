//ques 1
let personAccount = {
    firstName: 'abc',
    lastName: 'xyz',
    incomes: 0,
    expenses: 0,
    totalIncome: function(){
        return "total Income" + this.incomes;
    },
    totalExpenses: function(){
        return "total Expenses" + this.expenses;
    },
    accountInfo: function(){
        return "accountInfo";
    },
    addIncome: function(){
        return "addIncome";
    },
    addExpenses: function(){
        return "addExpenses";
    },
    accountBalance: function(){
        return "accountBalance";
    }
}
console.log(personAccount);
console.log(personAccount.accountInfo());

let users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
]

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

//ques 2
// const check = obj => obj.username === 'muskan';
    // console.log(users.some(check));
function signUp(){
    if(users.filter(e => e.username === 'Asab').length > 0){
        return "already exist"
    }
    else{
        users.push({username: "muskan"});
        return users;
    }
}
console.log(signUp());

//ques 2 b
function signIn(){
    const user= users.find((data) => data.username === "Asab" && data.password === '123456');
    if(user){
        return "user signed in successfully"
    }
    else{
        return "user doesn't exist"
    }
}
console.log(signIn());

//ques 3 a
const item_name = products[0].ratings[0].rate;
const item_name2 = products[0].ratings[1].rate;
const item_name3 = products[2].ratings[0].rate;
console.log(item_name);
console.log(item_name2);
console.log(item_name3);


// b 
let average = (item_name + item_name2 + item_name3) / 3;
console.log(average);


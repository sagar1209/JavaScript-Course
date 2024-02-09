'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

let accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsername = function (accounts) {
  accounts.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);
console.log(accounts);

const clacDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, current) => {
    return acc + current;
  }, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const clacDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(move => move > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(move => move < 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(move => move > 0)
    .map(move => move * (acc.interestRate / 100))
    .filter(move => move >= 1)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumInterest.textContent = `${interest}€`;
};

let curruntAccount;

const updateUi = function (acc) {
  displayMovements(acc.movements);
  clacDisplayBalance(acc);
  clacDisplaySummary(acc);
};
let sorted = false;
btnSort.addEventListener('click', function () {
  displayMovements(curruntAccount.movements, !sorted);
  sorted = !sorted;
});
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(inputLoginUsername.value);
  curruntAccount = accounts.find(acc => {
    return acc.username === inputLoginUsername.value;
  });
  //  console.log(curruntAccount)
  if (curruntAccount && curruntAccount.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      curruntAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;
    updateUi(curruntAccount);
  }
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(acc => {
    return acc.username === inputTransferTo.value;
  });
  if (
    reciverAcc &&
    amount > 0 &&
    amount <= curruntAccount.balance &&
    curruntAccount.username !== reciverAcc.username
  ) {
    reciverAcc.movements.push(amount);
    curruntAccount.movements.push(-amount);
    updateUi(curruntAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    curruntAccount.movements.some(move => move > amount * 0.1)
  ) {
    curruntAccount.movements.push(amount);
    updateUi(curruntAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    curruntAccount.username == inputCloseUsername.value &&
    curruntAccount.pin == Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(acc => {
      return curruntAccount.username === acc.username;
    });
    accounts.splice(index, 1);
    console.log(index);
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// map , filter , reduce
//map
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// excersize

// const {deposite , withdraws} = accounts.flatMap((acc)=>acc.movements).reduce((sums,curr)=>{
//     if(curr>0) sums.deposite+=curr;
//     else sums.withdraws+=curr;
//     return sums;
// },{deposite:0,withdraws:0})

// console.log(deposite,withdraws);

// const titleToUpperCase = function(words){

//   const firstletter = str => str[0].toUpperCase()+str.slice(1);
//   const exeption = ['a','an','the','in','and'];
//    const title = words.toLowerCase().split(' ').map((word)=>exeption.includes(word)?word:firstletter(word)).join(' ')
//    return firstletter(title);
// }

// console.log(titleToUpperCase("my name is a sagar senjaliya"));

// fill and from and contructor

// const arr = [1,2,3,4,5,6,7];

// console.log((new Array(1,2,3,4,5,6,7)));

// const x = new Array(7);  // if only one argument that time create a size of this array and alll element fill up empty

// // x.fill(1);
// // x.fill(3,2,4);

// // new method to create array

// const y = Array.from({length:7},()=>1);

// const z = Array.from({length:7},(_,i)=>i+1);
// console.log(y);
// console.log(z);

// labelBalance.addEventListener('click',function(){
//   const movementsUI = Array.from(document.querySelectorAll('.movements__value'),el=>el.textContent.replace('€',''));
//   console.log(movementsUI)
// })

// sorting

// console.log(movements.sort());  // it use to string for sorting autometically

// return >0  (swiching order)
// return <0 (kkep order)

// movements.sort((a,b)=>(a-b));
// console.log(movements)

// flat and flatmap

// let number = [[1,2,3],[4,5,6],7,8];
// console.log(number.flat());
// number =  [[1,[2,3]],[4,[5,6]],7,8];
// console.log(number.flat(2))

// const totalBalance = accounts.map(acc=>acc.movements).flat().reduce((acc,curr)=>acc+curr,0);
// console.log(totalBalance);

// const totalbalance = accounts.flatMap(acc=>acc.movements).reduce((acc,curr)=>acc+curr,0);   // flatmap method is only flap 1 deeper lavale  flatmap() =  map() + flat(1);// only 1 use
// console.log(totalbalance)

//some and every

// it is use to write any condition and find any element
// but find method it only use ot find any perfect element

// console.log(movements.some(move => move<0));
// console.log(account4.movements.every(move=>move>0));

// find method
// find method is return only one element who is meathc perfectly idf not match any element than return undefind
// const match = movements.find((move)=>{
//   return move=0;
// })
// console.log(match)

// const eurtoUSd = 1.1

// const movementsUSD =  movements.map((move,i)=>{
//    return move*eurtoUSd;
// })
// console.log(movementsUSD)

// const movementsdescription =  movements.map((currEl,index)=>{
//   if(currEl>0){
//         return  `${index} : you deposite ${currEl}`
//       }
//       else{
//         return `${index} : you withdraw ${currEl}`
//       }
// })

// console.log(movementsdescription)

///   filter
// reduce method

// const balance = movements.reduce((acc,curr,i,arr)=>{
//    return  acc+curr;
// },0);
// console.log(balance)

// let arr = ['a','b','c','d','e'];
// console.log(arr.slice(2))

// //splice //mutable
// console.log(arr.splice(2));
// console.log(arr)

// arr = ['a','b','c','d','e'];
// const arr2 = ['a','b','c','d','e'];
// arr2.reverse();

// const letters = arr.concat(arr2);
// console.log(letters)

// console.log(letters.join('-'))

// at methods

// let arr =  [23,45,78]

// console.log(arr[0]);
// console.log(arr.at(0));

// // last element
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// console.log(arr[arr.length-1])

// forEach loop
// no use break
// movements.forEach((currEl,index,arr)=>{
//   console.log(arr)
//   if(currEl>0){
//      console.log(`${index} : you deposite ${currEl}`);
//   }
//   else{
//     console.log(`${index} : you withdraw ${currEl}`);
//   }
// })

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// console.log(currencies)

// currencies.forEach((value,key,map)=>{
//   console.log(`${key} : ${value}`);
// })

// const name = new Set(['USD','DOLLAR','USD',"POWN"]);
// console.log(name);

// name.forEach((value,key,set)=>{
//   console.log(`${key} : ${value}`);
// })

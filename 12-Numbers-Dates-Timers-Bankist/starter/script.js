'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-01-15T17:01:17.194Z',
    '2024-01-16T23:36:17.929Z',
    '2024-01-17T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const formatemovementdate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed == 0) return 'Today';
  if (daysPassed == 1) return 'yesterday';
  if (daysPassed <= 7) {
    return `${daysPassed} days ago`;
  }
  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = `${date.getFullYear()}`;
  return Intl.DateTimeFormat(locale).format(date);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displaydate = formatemovementdate(date, acc.locale);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displaydate}</div>
        <div class="movements__value">${formetednumber(acc,mov)}</div>
      </div>
     `

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const formetednumber = (acc,mov)=>{
  const option = {
    style:'currency',
    currency: acc.currency
  }
  return new Intl.NumberFormat(acc.locale,option).format(mov);
}

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formetednumber(acc,acc.balance)}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formetednumber(acc,incomes)}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formetednumber(acc,Math.abs(out))}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formetednumber(acc,interest)}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount,timer;
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// labelDate.textContent = Intl.DateTimeFormat('en-us').format(now);
// const locale = navigator.language;

// labelDate.textContent = Intl.DateTimeFormat(locale,option).format(now);
const logoutaut = function(){
  let time = 10;
  const tick = function(){
    let min = String(Math.floor(time/60)).padStart(2,0);
    let second = String(time%60).padStart(2,0);
  labelTimer.textContent = `${min}:${second}`;
  if(time==0){
    
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;
   }
   time--;
  }
  tick();
  const timer  = setInterval(tick,1000);
  return timer;
}

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    const now = new Date();
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      //  weekday : 'long'
    };
    labelDate.textContent = Intl.DateTimeFormat(
      currentAccount.locale,
      option
    ).format(now);
    if(timer) clearInterval(timer)
    timer = logoutaut();
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});



btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

   clearInterval(timer);
   timer = logoutaut();

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    setTimeout(function(){currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);},2500)
    clearInterval(timer);
   timer = logoutaut();
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// reminder concept
labelBalance.addEventListener('click', function () {
  document.querySelectorAll('.movements__row').forEach((row, i) => {
    if (i % 2 == 0) row.style.backgroundColor = 'red';
  });
});

///   settimeout and setinterval

// setTimeout((ind1,ind2)=>{
//   console.log("hyy time is owr")
//   console.log(ind1,ind2)
// },10000,"pizzza","sandwitch");
// console.log("you are first")

// you also delete a time

// const sett = setTimeout((ind1,ind2)=>{
//   console.log("hyy time is owr")
//   console.log(ind1,ind2)
// },2000,"pizzza","sandwitch");

// console.log("you are first")

// clearTimeout(sett);   // you are first and delete the sett

// setInterval

// setInterval(()=>{
//   console.log(new Date());
// },1000)   --this function exucution infinite time  but wait for the interval time 






// const num = 43234234.789
// const option = {
//   style:'currency',
//   currency : 'USD'
// }
// console.log(new Intl.NumberFormat('en-us',option).format(num));
// console.log(new Intl.NumberFormat('de-DE',option).format(num));
// console.log(new Intl.NumberFormat('ar-SY',option).format(num));
// console.log(new Intl.NumberFormat(navigator.language,option).format(num));

// dates
// const now = new Date();
// console.log(new Date().getTime())
// console.log(now)
// console.log(new Date(0));

// console.log(new Date());

// console.log(new Date("2024"));
// console.log(account1.movementsDates)
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2343242343234));

// console.log(new Date(2024,10,10,20,1,1).getTime());

// console.log(new Date('december 2011'));

// const future = new Date(2030,10,10,10);
// console.log(future);
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getFullYear());
// console.log(future.getHours());
// console.log(future.getMilliseconds());
// console.log(future.getMonth());

// console.log(future.toISOString())  // to convert the imternational code

// future.setFullYear(2020);
// console.log(future)

//  bigInt

// // -- int - javascript allow 64 int and only use 53 bit intereger other bit use to sign and decimal
// const num = 2**53-1;
// console.log(num)
// console.log(Number.MAX_SAFE_INTEGER)

// // if you write more than 53 bit than you have to use BigInt
// // console.log(90071992547409914324n);
// // console.log(BigInt(900719925474099153434))

// // console.log(1000n)

// const huge= 1000000n;
// const simple = 100000;

// console.log(1000n == 1000) //true
// console.log(100n === 100)  //false
// console.log(20n > 15)   // true
// console.log(20n == '20')  // true

// console.log(huge + "it a really big number")

// console.log(10n/3)  // error
// console.log(10n/3n)  //3
// console.log(11n/3n)  // 3
// console.log(typeof huge)

// console.log(1000n+1000n);
// console.log(1000n*1000n);
// console.log(huge+simple) // error

// underscore

// const price = 123_000_123;
// console.log(price);

// // const PI = 3.14_15;  its okk
// // const PI = 3.14__15;  // error
// // const PI = 3._1415;  error
// // const PI = 3_.1415; error ;
// // const PI = _3.1415; error ;
// const PI = 3.1_4_1_5;  // its oky
// console.log(PI)

// Number

// base 10 - decimal number 0-9
// base 2 - binary number 0-1

// number always store in binary

//suppose to store in decimal 3/10 so 0.3333333333333 same as binary

// console.log(0.1+0.2) //this number convert in banary is so length// 0.3000000000004

// console.log(0.1+0.2 === 0.3);  // false
// console.log(1/10 + 2/10 === 3/10)  // this is also false

// console.log(Number('23'));
// console.log(+'23');

// console.log(Number.parseInt('30PX'));  //30
// console.log(parseInt('24jfbasjkba'));  // 23
// console.log(parseFloat('2.4dfssdg'));  // 2.4
// console.log(parseInt('2.4dfgasg'));   //2

// // check if value is NaN
// console.log(20/0)  // Infinity
// console.log(Number.isNaN(20));   // false
// console.log(Number.isNaN('20'));  // false
// console.log(Number.isNaN(+'20')); //false
// console.log(Number.isNaN(20/0))   //false
// console.log(Number.isNaN(2.3))  /// false

// // check if value is a number or not
// console.log(Number.isFinite(20));   // true
// console.log(Number.isFinite('20'));  // false
// console.log(Number.isFinite(+'20')); //true
// console.log(Number.isFinite(20/0))   //false
// console.log(Number.isFinite(2.3))  /// true

// console.log(Number.isInteger(23)) // true
// console.log(Number.isInteger(23.0))  // true
// console.log(Number.isInteger(23/0))   // false

// math and rounding

// console.log(Math.sqrt(25));
// console.log(Math.max(10, 20, 30, 23));
// console.log(Math.max(20, '103', 24, 99));
// console.log(Math.max(20, '103px', 24, 99)); // NaN

// console.log(Math.PI * parseFloat('10px') ** 2);

// console.log(Math.random()); // 0-1

// // min - max;

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min)) + 1 + min;

// console.log(randomInt(10, 20));

// round
// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor('23.3'));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));

// console.log((2.4345).toFixed(2));
// console.log((2.5345).toFixed(0));
// console.log((2.4345).toFixed(1));
// console.log((2.4345).toFixed(3));

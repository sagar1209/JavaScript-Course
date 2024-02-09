// 'use strict';


// closurs

// let f;
// const g = function(){
//     let i =3;
//     f = function(){
//         console.log(i*2);
//     }
// }
// g();
// f();  // this concept is closeur

// const h = function(h,wait){
//     let  i= h;
//     setTimeout(() => {
//         console.log(`${i}`)  // this also closure
//     },wait*1000);
//     console.log("hyyy")
// }
// h(10,10)


// const securebooking = function(){
//     let i = 0;
//     return function(){
//         i++;
//         console.log(i)
//     }
// }

// const book = securebooking();
// book();
// book();

// IIFE
// immediatly invoked function expression
/// use to data encaptulation and more privat but right now not any devloper use bcz most of use block
// (function(){
//     console.log("this function not call again")
// })();

// (()=> console.log("same like as arrow function"))();

// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
//     registerNewAnswer(){
//         const number = Number(prompt(`${this.question}\n ${this.options.join('\n')}`))
//         typeof number=='number' && number<4 &&  this.answers[number]++;
//         this.displayResults();
//         this.displayResults('string');
//     },
//     displayResults(type='array'){
//         if(type=== 'array'){
//             console.log(this.answers)
//         }
//         else{
//             console.log(`Poll results are ${this.answers}`)
//         }
//     }

// };

// document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))

// poll.displayResults.call({answers:[5,2,3]},'string')  // best bonus

// const bookings = [];

// // defalult parameter

// const createBooking = function(fliteNum , numpassenger = 1, price = 199*numpassenger){
//     const booking = {
//         fliteNum,
//         numpassenger,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }
// createBooking(2,6)
// // createBooking(2,,600000)  // give error dont skip
// createBooking(2,undefined,67890);

//How Passing Arguments Works Value vs. Reference

// const flite = 'ABD20';
// const sagar = {
//     name:"sagar",
//     passport : "741852963",
// }

// const checkIn = function(flite,person){
//     flite = "sdfgh67";
//     person.name = "ammit";
//     alert("chackIN");
// }

// checkIn(flite,sagar);
// console.log(flite);
// console.log(sagar);

// in javascript only pass by value

//primitive data type is pass by value
// oject,araay pass by reference

// first-class function --- in javascript fucntion like a one valuwe and it another tyoe of object

// higer order function ----- if any function return a function and accept  a fucntion as parameter so it is a higher order functio =n

// const lower = (str)=> str.toLowerCase();
// const firstWordUpper = (str)=>{
//     return str[0].toUpperCase()+str.slice(1);
// }

// const transform = function(str,fn){
//    console.log(`${fn(str)}`);
// }

// transform("AfsdfasdDdf",firstWordUpper);
// const high = () =>{
//     console.log("hyy")
// }
// document.body.addEventListener("click",high);

// function return a function
// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

// const sagar = greet('hyy');
// sagar("sagar");

// greet('hyy')('amit')

// const lufthansa = {
//     airline : 'lufthansa',
//     iataCode: 'LH',
//     booking : [],
//     book(fliteNum,name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${fliteNum}`);
//         this.booking.push(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${fliteNum}`);
//         console.log(this.booking);
//     }
// }
// lufthansa.book(2,'sagar');
// lufthansa.book(4,"amit");

// const eurowings = {
//     airline : 'eurowings',
//     iataCode : 'EW',
//     booking : [],
// }

// const book = lufthansa.book;
/// call and apply call a fnction
// book.call(eurowings,3,"sagar");  // pass value in element
// book.apply(eurowings,[3,"amit"])  // paas value from array

//bind
//bind a always return a fucntion

// console.log(book)

// const bookEw = book.bind(eurowings,23); // set one or more things
// console.log(bookEw)
// bookEw("harshil")

// lufthansa.plans = 300;
// lufthansa.addplans = function(){
//     console.log(this);
//     this.plans++;
//     console.log(this.plans);
// }
// lufthansa.addplans();

// document.querySelector('.buy').addEventListener('click',lufthansa.addplans.bind(lufthansa));

// partial application

// const addtax = (rat,value) => value+value*rat;
// console.log(addtax(0.1,200));

// const addVal = addtax.bind(null,0.2);
// // addVal = value => value + value*0.2;
// console.log(addVal(400))

// also use a higher order function

// const addtaxrat = function(rat){
//     return function(value){
//      return value+value*rat;
//     }
// }

// const addVal2 = addtaxrat(0.2);
// console.log(addVal2(400));

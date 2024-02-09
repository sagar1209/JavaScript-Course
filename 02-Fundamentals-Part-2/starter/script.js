"use strict";

// use strict is use to more secure javascript and use it to avoid a bug and error

// let hasDrivingslicence = false;
// let passtest = true;

// if(passtest) hasDrivingslicence = true;
// if(hasDrivingslicence) console.log("you drive the car")

// function
// function fruitprocessor(apples,oranges){
//     console.log(apples,oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// console.log(fruitprocessor(5,7));

//function declaration
// function clcAge(birthyear){
//     return 2024-birthyear;
// }
// console.log(clcAge(2002));

// // function expression

// const clcage = function (birthyear){
//     return 2024-birthyear;
// }
// console.log(clcage(2002))

// // using expression you can call the4 function before inisiolzing

// // arrow function

// const calAvg3 = (birthyear) =>{
//     return 2024-birthyear;
// }

// console.log(calAvg3(2002));

// //  function call another function

// const cutpeaces = (fruit)=>{
//     return 4*fruit;
// }

// function fruitprocessor(apples,oranges){
//     let applepeaces =  cutpeaces(apples);
//     let orangepeaces = cutpeaces(oranges);
//     const juice = `juice with ${applepeaces} apple peases and ${orangepeaces} orange peaces`;
//     return juice;
// }
// console.log(fruitprocessor(5,7));

//  introduction array

// araay is continues manne and orderd data

// const friends = ['amit','harshil','dhruvil',23];
// friends[0] = 'om';

// console.log(friends);

// console.log(friends[friends.length - 1]);

// friends.push('amit');  // return size of new array  //  add in back
// friends.unshift('jay');  //  return a size of new array  // add in front

// friends.pop();   // return a removed element // pop in back
// friends.shift();  // pop in front

// console.log(friends.indexOf('amit'));
// console.log(friends.includes('amit'));   // true
// console.log(friends.includes('23'))  // false  // stricly check

// // introduction objects

// //  object is a unstructured data
// const sagar = {
//     firstname: 'sagar',
//     'lastname' : 'senjaliya',
//     'birthyear' : 2002,
//     'job' : 'software enjineering',
//     'friend' : friends,

//     'calcAge' : function(){
//         return  2024 - this.birthyear;
//     },

//     'getSummary' : function(){
//        return `my age is ${this.calcAge()}`;
//     }

// }
// console.log(sagar.age)

// let B = 'firstname';
// console.log(sagar.B) // undefined
// console.log(sagar['firstname']);

// sagar.location = 'surat';
// console.log(sagar);

// console.log(sagar.calcAge());
// console.log(sagar.getSummary())

// loop

const friends = ["amit", "harshil", "dhruvil", 23, true];
const types = [];
for (let i = 0; i < friends.length; i++) {
  if (typeof friends[i] == "Number") continue;
  if (typeof friends[i] == "boolean") break;
  console.log(friends[i]);
  types.push(typeof friends[i]);
}

for (let i = friends.length - 1; i >= 0; i--) {
  console.log(friends[i]);
}

for (let i = 1; i < 3; i++) {
  console.log(`excersize ${i}`);
  for (let j = 0; j < friends.length - 1; j++) {
    console.log(friends[j]);
  }
}

// while loop

// let i = 0;
// while(i<friends.length){
//     console.log(friends[i]);
//     i++;
// }
// console.log(Math.random())
// let dice = (Math.trunc(Math.random()*6))+1;
// while(dice!==6){
//     console.log(`no : ${dice}`);
//     dice = (Math.trunc(Math.random*6))+1;
// }

let a = "b";

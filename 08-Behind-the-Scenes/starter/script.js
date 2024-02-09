'use strict';
// function add(a,b){return a+b;}
// function calcAge(year){
//     console.log(firstname);
//     let age = 2024 - year;
//     function printAge(){
//         console.log(`${firstname} your age is ${age},born in ${year}`);
//         let output = "you are awasome"
//         if(year>2000){
//             var millenial = true;
//             let str = "you are milliener";
//              console.log(str);
//             const firstName = "amit";
//             console.log(firstname)
//             output = "No output";
//         } 
//         console.log(output)
//         console.log(millenial);

//     }
//     printAge();
//     return age; 
// }
// const firstname = "sagar";
// calcAge(2002);

//Hoisting

// console.log(a);
// // console.log(b);
// // console.log(c);

// var a = 5;
// let b = 5;
// const c = 5;

// console.log(add(2,3))
// console.log(add2(2,3));
// console.log(add3(2,3));

// function add(a,b){   //function expretion is hoisting
//     return a+b;
// }

// it simmiler to type of variable
// const add2 = function(a,b){ 
//     return a+b;
// }
// const add3 = (a,b) => a+b;

// console.log(a === window.a);
// console.log(b === window.b);
// console.log(c === window.c);



// this keyword

// methdo -- this keyaword point to current object who is the call function
// simple fucntion call - this == undefined
// arrow function --- this keyword  point to surrounding fucntion (lexical this)
//  var firstname = "sagar"
 
// const profile = {
//     firstname:"sagar",
//     year : 2002,
//     calcAge: function(){
//         // const printage = function(){
//         //     console.log(2024-this.year);  // this -> undefined
//         // }  
//         const printage = ()=>{
//             console.log(2024-this.year);  // this is not own
//         }  
//         printage();
//         return 2024-this.year;
//     },
//     printname:() => {
//         console.log(this.firstname) // this is not own 
//     }
// }

//-- arguments


// console.log(profile.calcAge());
// profile.printname()

// const add6 = function(a,b){
//     console.log(arguments);
//     return  a+b;
// }

// add6(2,3);

// const add7 = (a,b) =>{
//     console.log(arguments);  // arrow function argument is not allowed
//     return  a+b;
// }
// add7(3,4)




//premitive and object

//premitive
let age = 21
let oldage = age;
age = 31;            ///   all primitives datatypes store in the call stack 
console.log(age);
console.log(oldage);

 // object //reference
 // array , function , object  all store in the heap memmory


 // shallow copy
const me = {
    name:"sagar",
    age:20
}
const friend = me;

friend.age = 27;
console.log(friend.age);
console.log(me.age);


// how to crete object so it work deep copy
// const me1 = {
//     name:"sagar",
//     age:20
// }
// const friend1 = Object.assign({},me1);   // it not properly work a deep copy bcz it copy only toop level
// me1.age = 21;
// console.log(friend1.age);
//ex //shaalow copy
// const me2 = {
//     name:"sagar",
//     age:20,
//     hobby : ["chess","cricket"],
// }

// const friend2 =  Object.assign({},me2);

// console.log(me2.hobby)
// me2.hobby[1] = 'bascketball';

// console.log(friend2.hobby)

// me2.hobby[1] = 'ankit'






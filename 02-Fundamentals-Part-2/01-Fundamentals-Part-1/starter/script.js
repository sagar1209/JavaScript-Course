// // Linking a JavaScript File
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// ////////////////////////////////////
// // Values and Variables
// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Variable name conventions
// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

/////////////////////////
//data types
// console.log(typeof (true));
// console.log(typeof 23)
// console.log(typeof "john");

// console.log(typeof null)

/////////////////////////
//const,let,var

// { lastName = "sagar"}
// console.log(lastName);

// basic operator

//  assignment operator
// let x = 5;
// x+=10;

// comarition operator

// >,<,<=,>=

//  operator precedence

// let x=y= 25-15-5;
// ///  x=y=5;  - higher
// //   x =5;    right to left

// let average = (5+5)/2;

//  Strings and Template Literals

// let firstName = "sagar"
// let job = "software enjineering"
// let birthYear = 2002;
// let year = 2024;

// let sagar =  "I'm " + firstName + ', a ' + (year - birthYear) + " year old " + job;
// console.log(sagar);

// sagar = `I'm ${firstName} , a ${year-birthYear} year old ${job}`;
// console.log(sagar);

// console.log(`string
// with multiple line`)

// //  Taking Decisions: if / else Statements
// let age = 20;
// if(age>=18){
//     console.log("you can use the licence")
// }
// else {
//     console.log("you can not create a licence");
// }

// let ruppee;
// if(age>18){
//      ruppee = 100;
// }
// else {ruppee = 50;}

// console.log(ruppee);

// Type Conversion and Coercion

// //conversion
// let a = '5';
// console.log(Number(a),a);
// console.log(a+5);

// let b = 'sagar'
// console.log(Number(b))

// console.log(typeof NaN);

// let c = 5;
// console.log(typeof String(c),c);

// // coercion

// let d = "hyy" + 23;
// console.log(d);
// console.log('1' + 2);  // 12
// console.log('2' - 1); //1

// truthy and Falsy Values

// falsy -  0,undefined,null,NaN,''
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(NaN));
// console.log(Boolean(123));

// if(0){
//     console.log("hyy");
// }
// else console.log("hellow");
// let s = '';
// if(s){
//     console.log("hyy");
// }
// else console.log("hellow");

// Equality Operators: == vs. ===

// ==   chaeck only value (loosly)
// === check both value and type (strick)

//prompt it is use to input value4 form the user;

// let fav = (prompt("what is your fevourite number"))
// console.log(fav);

// // if(fav === 23) console.log("you win the price");
// // else console.log("you lose");
// fav = '23'
// if(fav!==23) console.log("you win the price");   //value not equal ||  type not equal
// if(fav!=23) console.log("you loos the price")  // value not equal

// Boolean Logic
// logical operator
// AND / &&  --
// OR / ||
// NOT / !

//  logincal operator

// let hasDriveLicence = true;
// let hasGoodVision = true;
// let isTiried = true;
// if(hasDriveLicence && hasGoodVision && isTiried){
//     console.log("sagar is able to drive the car")
// }
// else {
//     console.log("someone else to drive car");
// }

// switch case

// let day = prompt("please enter curent day");
// switch(day){
//     case 'monday':
//         console.log("monday");
//         break;
//     case 'tuesday':
//         console.log("tuesday");
//         break;
//     case 'wednesday':
//     case 'sunday'  //con not use logical operator
//         console.log("wednesday");
//         break;
//     case 'satuarday':
//     case 'thursday':    /// it is support only int and charector
//         console.log("thirsday");
//         break;
//     default:
//         console.log("not a good day");
//         break;
// }

//  expressions

// any statment give a value

//11
//3+4
//let me = 'sagar';
//true

// statement

// if(52>32){
//     console.log("gretor value");
// }
// console.log(`my name is ${me}`)

// ternary condition
// let age = 23;
// age>=18?console.log("you able to drink wine"):console.log("you able to drink water");

// let drink = age>=18?'wine':'water';
// console.log(drink);

// console.log(`you able to drink ${age>=18?'wine':'water'}`);

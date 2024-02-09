'use strict';

// const { start } = require("repl");

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [week[3]]: {
    open: 12,
    close: 22,
  },
  [week[4]]: {
    open: 11,
    close: 23,
  },
  [week[5]]: {
    open: 0,
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterindex, mainindex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainindex]];
  },
  opendelivery({ time, address, menu = 1 }) {
    console.log(time, address, menu);
  },
  orderpasta(ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  },
  orderpizza: function (special, ...other) {
    console.log(special);
    console.log(other);
  },
};


// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click',function(){
//   const list = document.querySelector('textarea').value;
//   console.log(list);
//   const diff = list.split('\n');
//   console.log(diff);
//   for(let [i,row] of diff.entries()){
//       const [first,second] = row.toLowerCase().trim().split('_');
//       const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
//       console.log(output.padEnd(20) + ('✔').repeat(i+1));
//   }
// });

// string

// let name = "sagar";
// console.log(name[0]);
// console.log(name.length);
// console.log(name.indexOf('a'));
// console.log(name.lastIndexOf('a'));

// console.log(name.slice(1,2));
// console.log(name.slice(-1));
// console.log(name.slice(3));

// console.log(typeof new String(name));
// console.log(new String(name).slice(1));

// const email = "sagar@gmail.com";

// const loginemail = "   SaGaR@gmail.com ";

// const finalemail = loginemail.toLowerCase().trim();
// console.log(email==finalemail)

// //replacing

// name = "amit senjaliya";
// console.log(name.replaceAll('a','b').replace('sen','sak'));

// const plane = 'Airbus A320';

// console.log(plane.includes('A32'));
// console.log(plane.startsWith('Air'))
// console.log(plane.endsWith('20'));


// // split and join

// console.log("a+b+b+b+c+d".split('+'));

// const [firstname,secondname] = ("sagar senjaliya".split(' '))
// console.log([firstname,secondname].join(' '))

// const capitilizeName = (name)=>{
//    const lowername = name.toLowerCase();
//    const word = lowername.split(' ');
//    const final = [];
//    for(let w of word){
//       final.push(w[0].toUpperCase() + w.slice(1));
//    }
//    console.log(final.join(' '));

// }
// capitilizeName("hyy mdsys aH u uuu FHAHF uuh");

// // PADDING

// console.log("sagar".padStart(10,'+').padEnd(20,'+'));

// const maskCreditCard = (number) =>{
//   const str = number + "";
//   const last = str.slice(-4);
//   return last.padStart(str.length,'*');
// }
// console.log(maskCreditCard(4516545316416511))

// // repeate
// const message = "trafic alert...... "; 

// console.log(message.repeat(10))














//maps

// const rest = new Map();
// rest.set("sagar",1).set(1,"sagar");
// rest.set('s',3).set(34,34)

// console.log(rest.get("sagar"))

//  const arr = [1,2]
// rest.set(arr,"sagar");

// console.log(rest)
// // console.log(rest.get([1,2]))  // aray store  in heap

// console.log(rest.get(arr))

// rest.set(document.querySelector('h1'),'Heading')

// rest.set(true,"open");
// rest.delete("sagar")
// console.log(rest)

// const question = new Map([
//   ['question','what is the best programming language'],
//   [1,'c'],
//   [2,'java'],
//   [3,'python'],
//   ['correct',3],
//   [true,'correct'],
//   [false,'Try again']
// ])

// // object into map
// console.log(Object.entries(openingHours));
// const hoursmap = new Map(Object.entries(openingHours));


// for(const [key,value] of question){
//    if(typeof key === 'number') console.log(key,value);
// }

// // map to array
// console.log([...question]);

// console.log([...question.keys()]);   
// console.log(question.entries());   // it give to object
// console.log(question.values())  // it give to object
// console.log(question)
// for(const [i,{j,k}] of question.keys()){
//   console.log(i,j,k)
// }







//sets

// const orderset = new Set(
//   ['pizza','sandwich','burger','pizza']
// )
// console.log(orderset)

// console.log(orderset.size);
// orderset.add("pasta");
// orderset.delete('burger');

// for(const item of orderset){
//   console.log(item)
// }
// console.log(new Set('sagar'))

// console.log([...orderset])

// console.log(restaurant)

// Looping Objects Object Keys, Values, and Entries

// const keys = Object.keys(openingHours);
// console.log(keys)
// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// console.log(entries);

// for(const [day,{open,close}] of entries){
//    console.log(`${day} is open on ${open} am and close on ${close} pm`);
// }

//Enhanced object literals

//optional chaining

// for(const day of week){
//   console.log(`${restaurant.openingHours[day]?.open ?? "not exits"}`)
// }
// console.log(restaurant.openingHours?.mon?.open)

// for of loop

// const menu = [...restaurant.mainMenu,...restaurant.starterMenu];

// for(const [i,item] of menu.entries()){
//   console.log(`${i} : ${item}`);
// }

// logical assignment operator
// ||= , &&= , ??=
// const rest1 = {
//   name : "sagar",
//   numguest : 0,
// }
// const rest2 = {
//   name : "ankit",
//   owner :"sagar"
// }

// // rest1.numguest ||= 10;
// // rest2.numguest ||= 10;

// // rest1.numguest ??= 10;
// // rest2.numguest ??= 10;

// rest1.owner &&= "anonymouse";
// rest2.owner &&= "anonymouse";

// console.log(rest1);
// console.log(rest2);

// Nulish coalescing operator ??
// //  ||
// restaurant.numguest = 0;
// console.log(restaurant.numguest ||10)  // in or falsy is 0,'',null and undefind
// // ??
// console.log(restaurant.numguest ?? 10) // in ?? falsy is null and undefind

// short circuiting

// use any data tpye and return any data type

// console.log(3 || "hyy");
// console.log(null || "sagar");
// console.log(null || undefined);  // all false than return last

// const num = restaurant.numguest || 10 // 10

// console.log((3 && "sagar")) // all true than return last
// console.log(null && "sagar") //null
// console.log("sqgar" && 3 && undefined);
// let temp = 10;;

// console.log(temp==10 && "sagar")

// // rest  pattern and parameters
// restaurant.orderpizza("cheese","onion","mango","spaninise");
// // ----> oposite the spred operator
// //spred , on right side of =
// const arr = [1,2,...[3,4,5]];
// //rest , on left side of =
// const [a,b,...other] = [1,2,3,4,5];

// const [pizza , , ...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu]

// console.log(otherFood)
// // rest is alwayes last element otherwise give to error

// // object
// const {thu,...otherday} = restaurant.openingHours
// console.log(otherday)
// //function
// const add = function(...number){
//   console.log(number)
// }
// add(2,3);
// add(3,5);
// add(3,4,5,6,7);
// const x = [2,3,4];
// add(...x);

// const ingredients = [prompt("enter first"),prompt("enter second"),prompt("enter third")];

// restaurant.orderpasta(ingredients[0],ingredients[1],ingredients[2]);  // oldway
// restaurant.orderpasta(...ingredients);
//spred operator

//object

// const newrestaurent = {foundedIn:1999,...restaurant};

// const restaurantcopy = {...restaurant};  // same as a array

// const arr = [1,2,3];
// const bednewarr = [1,2,arr[0],arr[1],arr[2]];
// console.log(bednewarr)
// const newArr = [1,2, ...arr];
// console.log(newArr)

// console.log(...newArr)

// // const newmenu = [...restaurant.menu,"Gnocci"];
// const mainMenuCopy = [...restaurant.mainMenu]   // it also gove to shallow copy on nested array
// mainMenuCopy[0] = "sandwich";
// console.log(restaurant.mainMenu)   // this time cna not change bcz not nested
// console.log(mainMenuCopy)

// let sagar ="sagar";
// console.log(...sagar);

//iterable : array,string,map,set.not object

// restaurant.opendelivery({
//   starterindex :1,
//   mainindex : 0,
//   time : 20,f
//   address : "xyz",
// })
// -------destucturing object

// const {name:restaurantname,categories,menu=[]} = restaurant;
// console.log(restaurantname,categories,menu);

// let a = 5;
// let b = 6;

// const obj = { a : 12, b : 23 ,c : 45};
// ({ a, b } = obj);
// console.log(a,b)

//nested object

// const {openingHours:{fri:{open,close},},} = restaurant
// console.log(open,close)

// -----------distructuring array

// const arr = [2,3,4];
// const [a,b,c] = arr;
// console.log(a,b,c);

// let [first,,second] = restaurant.categories;

// console.log(first,second)

// // let temp = first;
// // first = second;
// // second = temp;

// // [first,second] = [second,first]   // this is not work

// console.log(first,second)

// const[startercource,maincource] = restaurant.order(2,2);

// console.log(startercource,maincource);

// //nested
// const nested = [1,2,[3,4]];
// const [i, ,[j,k]] = nested;
// console.log(i,j,k)

// // default value
// const [x=1,y=1,z=1] = [8,9];    // 8 9 1
// console.log(x,y,z);  //8 9 undefined

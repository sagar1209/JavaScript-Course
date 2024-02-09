'use strict';

// const Person = function (firstname, birthYear) {
//   this.firstname = firstname;
//   this.birthYear = birthYear;
//   // never use function this like // bcz er=very time to create copy
//   //  this.calcAge = function(){
//   //     console.log(2024-this.birthYear);
//   //     return 10;
//   //  }
// };
// not use aarrow function to create a  prototype
// const sagar = new Person('Sagar', 2002);

// Person.hey = function(){
//   console.log("hello");
// }  //  this method attached to constuctor

// sagar.hey();  // not attack in prototype so u can not use
//   console.log(sagar);
// //   console.log(sagar.firstname);
// //   console.log(sagar.birthYear);
// // console.log(sagar.calcAge());

// // use async
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// console.log(sagar.__proto__);
// console.log(sagar.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(sagar));
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// Person.prototype.spices = 'meggi';
// console.log(sagar);

// console.log(sagar.hasOwnProperty('firstname'));
// console.log(sagar.hasOwnProperty('spices'));

// //  Person.prototype is a object -->  this creates use of object contsructor;
// console.log(sagar.__proto__.__proto__);
// console.log(sagar.__proto__.__proto__.__proto__);
// console.log(Object.prototype === sagar.__proto__.__proto__); // true
// // p   erson.prototype is not a protype of person but is a prototype of object
// // sagar.calcAge();
// // console.log(sagar);

// // New {} is created
// // function called , this = {}
// // {} linked to prototype
// // function automatically retunr {}

// // const harshil = new Person('harshil', 2003);
// // const amit = new Person('amit', 2006);

// console.dir(sagar.__proto__.__proto__.constructor);
// console.dir(sagar.__proto__.constructor);

// const arr = [3, 3, 4, 5, 4, 5, 6, 7, 8];

// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);

// console.log(Array.prototype);

// console.log(Array.prototype === arr.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// // console.log(arr.unique());

// // console.log(arr);

// const h1 = document.querySelector('h1')

// console.dir(x=>x+1);
////   class - es6

// class personCl {
//   constructor(firstname, birthyear) {
//     this.firstname = firstname;
//     this.birthyear = birthyear;
//   }
//   calcAge() {
//     console.log(2024 - this.birthyear);
//   }

//   static hey() {
//     console.log('hy');
//   }
// }

// personCl.hey(); //  this method is not attach to  a instances it is attack a constructor
// const sagar = new personCl("sagar",2002);

// personCl.prototype.greet = function(){
//     console.log(`hyy ${this.firstname}`)
// }

// sagar.calcAge();

// sagar.greet();

// console.log(personCl.prototype === sagar.__proto__)

// getters and seters

// const account = {
//   owner: 'sagar',
//   movements: [200, 400, 120, 40],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// account.latest = 50;
// console.log(account.latest);
// console.log(account.movements);

/// object.create use for a prototype inheritance
// using this method u can create a prototype withoout using a constructor

// const PersonProto = {
//   calcAge(){
//      console.log(2024 - this.birthYear)
//   },
//   init(firstname,birthyear){
//     this.firstname = firstname;
//     this.birthYear = birthyear;
//   }
// }

// const sagar  = Object.create(PersonProto);
// console.log(sagar);
// sagar.birthYear = 2004;
// sagar.calcAge();
// const amit  = Object.create(PersonProto);

// amit.init("amit",2006);
// amit.calcAge()

//////////
// Inheritance Between "Classes": Constructor Functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// Inheritance Between "Classes": ES6 Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// // const martha = new PersonCl('Martha Jones', 2012);
// // console.log(martha)
// // console.log(martha.fullName)
// martha.introduce();
// martha.calcAge();

// inheritance use of object.create

// const PersonProto = {
//   calcAge(){
//      console.log(2024 - this.birthYear)
//   },
//   init(firstname,birthyear){
//     this.firstname = firstname;
//     this.birthYear = birthyear;
//   }
// }

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function(firstname,birthYear,course){
//   PersonProto.init.call(this,firstname,birthYear);
//   this.course = course;
// }
// StudentProto.introduce  = function(){
//   console.log(`hyy my name is sagar senjaliya`)
// }

// const jay = Object.create(StudentProto);

// jay.init("sagar",2002,"computer enjineering");
// console.log(jay);
// jay.calcAge()

class Account {
  // public field
  locale = navigator.language;

  // private field
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    // protecteed
    this.#pin = pin;
    // this._movements = [];   // this is not private but not public api bcz use of _;
    // this.locale = navigator.language;
  }

  deposite(val) {
    this.#movements.push(val);
    return this;
  }
  withadraw(val) {
    this.#movements.push(-val);
    return this;
  }

  // private filed
  #approved(val) {
    return true;
  }
  getmovements() {
    return this.#movements;
  }
  requesteloan(val) {
    if (this.#approved(val)) {
      this.deposite(val);
      console.log('loan approved');
      return this;
    }
  }
}

const acc1 = new Account('sagar', 'EUR', 1111);
console.log(acc1.getmovements());
// console.log(acc1.#movements);
acc1.requesteloan(200);
// console.log(acc1.#pin)
// acc1.#approved(2000);   // can not use of this function so we can use data encapsulation
console.log(acc1);

//chaining
acc1.deposite(200).deposite(300).withadraw(200).requesteloan(2000);
console.log(acc1)
// alert('hello world');
// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');

// VARIABLES - var, let, const
// const age = 30;

// // let can be re-assigned, const can not
// age = 31;
// console.log(age);

// DATA TYPES - String, Number, Boolean, null, undefined
// const name = 'Brad';
// const age = 37;
// const rating = 3.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z; // undefined
// // Check type
// console.log(typeof name);

// STRINGS
// const name = 'Brad';
// const age = 37;
// // Concatenation
// console.log('My name is ' + name + ' and I am ' + age);
// // Template literal (better)
// console.log(`My name is ${name} and I am ${age}`);

// String methods & properties
// const s = 'Hello World';
// // Get length
// console.log(s.length);
// // Change case
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// // Get sub string
// console.log(s.substring(0, 5));
// // Split into array
// console.log(s.split(''));

//const s = 'Tore, Tr, Tm';
//console.log(s.split(','));

// ARRAYS - Store multiple values in a variable
// const numbers = [1,2,3,4,5];
// console.log(numbers);

//const fruits = ['apples','orange','pears'];
//fruits[3] = 'grapes'; //en sona ekler
//fruits.push('mangos');//en sona ekler
//fruits.unshift('strawberry')//en basa ekler
//fruits.pop();//en sondakiyi siler
//console.log(Array.isArray('hello'));//false
//console.log(fruits);
//console.log(fruits.indexOf('orange'));//orange hangi sirada oldugunu soyler 2 sirada. 0 ile baslar cunku

//const person = {
  // firstName:'Tore',
   //lastName: 'Beg',
   //age: 30,
  // hobbies: ['sport', 'reading', 'travel'],
  // adress: {
  //   street: 'Vroed',
  //   city: 'gor',
  //   state: 'neder',
 
  // }
 //}
 //console.log(person.firstName);
 //console.log(person.hobbies[1]);
 // Get embedded object
// console.log(person.address.city);

// // Add property
// person.email = 'jdoe@gmail.com';

// const todos = [
//   {
//     id:1,
//     text:'Take out trash',
//     isCompleted: true
//   },
//   {
//     id:2,
//     text:'Meeting with boss',
//     isCompleted: true
//   },
//   {
//     id:3,
//     text:'Dentist appt',
//     isCompleted: false
//   },
// ];
//console.log(todos);
//console.log(todos[1].text);
//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);


//For
// for(let i = 0; i<10; i++){
//  console.log(i);
// }

// For
// for(let i = 0; i <= 10; i++){
//   console.log(`For Loop Number: ${i}`);
// }

// //for
// for(let i = 0; i<=10; i++){
//   console.log('For Loop Number: ${i}');
// }

// While
// let i = 0
// while(i <= 10) {
//   console.log(`While Loop Number: ${i}`);
//   i++;
// }




// forEach() - Loops through array
// todos.forEach(function(todo, i, myTodos) {
//   console.log(`${i + 1}: ${todo.text}`);
//   console.log(myTodos);
// });

// // map() - Loop through and create new array
// const todoTextArray = todos.map(function(todo) {
//   return todo.text;
// });

// console.log(todoTextArray);

// // filter() - Returns array based on condition
// const todo1 = todos.filter(function(todo) {
//   // Return only todos where id is 1
//   return todo.id === 1; 
// });


// CONDITIONALS


//const x = 10;
//if(x===10) {
  //console.log('x is 10');
  //}
 // else if(x>10){
   // console.log('x is greater than 10');
 // }
  //else {
    //console.log('x is less than 10');
  //}
  //
  //const x = 10;
  //const color = x > 10 ? 'red': 'blue';
//console.log(color);

// 
//const x = 10;
 // const color = x > 10 ? 'red': 'blue';
 
 
 //switch(color) {
//case 'red':
     // console.log('color is red');
      //break;
    //case 'blue':
     // console.log('color is blue');
     // break;
    //default:
   //   console.log('color is not blue or red');
  //  break;    
  //}

  //function addNums(num1, num2){
    //console.log(num1 + num2);

  //}
  //addNums(4,5);

  // 
  //function addNums(num1, num2) => {
    //return num1 + num2;

  //}
  //console.log(addNums(5,5));


    //constructor function
  // function Person(firstName, lastName, dob) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.dob = new Date(dob);
  // }
  // Person.prototype.getBirthYear = function() {
  //   return this.dob.getFullYear();
  // }
  // Person.prototype.getFullName = function(){
  //   return `${this.firstName} ${this.lastName}`;
  // }
  // class
  // class Person {
  //   constructor(firstName, lastName, dob) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //     this.dob = new Date(dob);
  //   }
  //   getBirthYear() {
  //     return this.dob.getFullYear();
  //   }
  //   getFullName() {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
  // }

//// new new new new 
// console.log(window);
// alert(1);
//sinle element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

//multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'tore';
// ul.lastElementChild.innerHTML = '<h1> Hello </h1>';

// EVENTS

// Mouse Event  ///mouseover, mouseout, click//

const btn = document.querySelector('.btn');
// btn.style.background = 'red'; 
// btn.addEventListener('click', (e) =>{
//   e.preventDefault();
//   document.querySelector('#my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
// });

// USER FORM SCRIPT

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');


// myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}


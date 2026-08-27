let c=5;
let b=10;
let d= c+b;
console.log(d);
//keywords in JS
let x='10'
console.log(x);

const y='20'
var z='30'

let name='Refat'
let city='Dhaka'
let country='Bangladesh'
console.log(name,city,country);

let f='5'
f="hello"
console.log(f);

//Datatypes
let name1='Refat' //string
let age=25 //number
let isStudent=true //boolean
let r;
console.log(r);//undefined
let data= null;
let bigInt= 1234567890123456789012345678901234567890n //bigInt

//Object and array 
let student={
    name:'Refat',
    City:'Dhaka',
    age:25
}

for(let key in student){
    console.log(key,student[key]);
}

console.log(student);
console.log(student.City);
console.log(student['age']);

let numbers=[1,2,3,4,5]
console.log(numbers);
console.log(numbers[0]);
console.log(typeof numbers);

for(let num of numbers){
    console.log(num);
}

function myfunction() {
  var x = 1;
  let y = 2;
  const z = 3;
  let u=x+y+z;
  console.log(u);
}

//function
function function1(ac,bc){

    let sum=ac+bc;
    console.log("The total sum is: " + sum);
}
function1(5,10); //here ac, bc are the parameters and 5,10 are the arguments
function1(20,30); //We can  call the function multiple times with different arguments

greet(); //We can call the function before its declaration due to hoisting
function greet() {
    console.log("Hello, welcome to my website!");
}

//function with return statement
function function2(ac,bc){
    let sum=ac+bc;
    return sum;
}
let result=function2(20,10);
console.log("The total sum is: " + result);

function returnnObject(){
    return {
        name:'Refatt',
        City:'Dhaka',
        age:25,
        country:'Bangladesh'
    }
}

console.log(returnnObject());


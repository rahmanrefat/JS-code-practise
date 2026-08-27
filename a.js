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



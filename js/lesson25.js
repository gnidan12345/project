"use strict"

let num = 20;

function showFirstMessage(text){
    console.log(text);
    let num = 10;
    console.log(num);
}


showFirstMessage("Hello World");
console.log(num);


// function calc(a, b){
//     return (a + b);

// }

// console.log(calc(4,3));
// console.log(calc(5,6));
// console.log(calc(10,6));


function ret(){
    let num = 50;
    return num;
}


const anotherNum = ret();
console.log(anotherNum);



// expression functions
const logger = function(){

  console.log("Hello")  
};


logger();


//стрелочные функции

const calc = (a, b) =>  a + b;


let val1 = 2
function multiplyThis(n) {
 let ret = n * val1
  return ret
}
let multiplied = multiplyThis(6)
console.log('example of scope:', multiplied)


let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi();


function makeWorker() {
    let name1 = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name1 = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work();


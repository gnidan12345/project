"use strict"

const arr =[1,2,3,6,8];


// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);



// arr.pop();

// arr.push(10);

// console.log(arr);


// for(let i = 0; i < arr.length; i ++){
//     console.log(arr[i]);
// }

// // for (let value of arr) {
// //     console.log(value);
// }


// arr.forEach(function(item,i, arr){
//     console.log(`${i}: ${item} inside the array ${arr}`)

// })  //  break and continue do not work

// Make Array from String
const str = prompt("","");
const products = str.split(", ");
products.sort();


//Make String from Array
console.log(products.join('; '));
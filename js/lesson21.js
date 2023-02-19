// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries){
//     console.log('I am full')
// }


// console.log (hamburger&&fries);


// const hamburger = 3;
// const fries = 1;
// const cola = 1;


// console.log(hamburger === 3 && cola && fries )

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'iuhuyguy');


// if (hamburger === 3 && cola === 1 &&fries ){
//     console.log("All are full")
// } else {
//     console.log("WE go another bar")
// }


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

 console.log(hamburger === 3 && cola  === 2 || fries === 3 && nuggets )

 console.log(hamburger === 3 && cola  === 2);
if (hamburger === 3 && cola  === 2 || fries === 3 && nuggets ){
    console.log("All are full")
} else {
    console.log("WE go another bar")
}

let johnReport, alexReport, mariaReport = 'done';

// what will be in console 
console.log(johnReport || alexReport || mariaReport )

console.log(!1);

console.log(NaN || 2 || undefined);  //2

console.log (NaN && 2 && undefined);//Nan

console.log(1 && 2 && 3);//3

console.log(!1 && 2 || !3 );//false
console.log( 25 || null && !3 );//25

console.log( NaN || null || !3 || undefined || 5);//5

console.log( NaN || null && !3 && undefined || 5);//5

console.log( 5 === 5 && 3 > 1 || 5);//true


//Task#1
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')};


// Task#2
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}

// Task#3
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

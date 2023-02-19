"use strict"

let a = 5;
b=a;
b= 5+b;

console.log(a);
console.log(b);


// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObject) {
    let objCopy ={};

    let key;
    for(key in mainObject){
        objCopy[key] = mainObject[key];
    }

    return objCopy;
}


const numbers = {
    a: 2,
    b: 5,
    c: {
        x:7,
        y:4
    }
};


const newnumbers = copy(numbers);


newnumbers.a = 10;
newnumbers.c.x = 10;

console.log(newnumbers);
console.log(numbers);


const add = {
    d: 17, 
    e: 20
};



// Join objects
// console.log(Object.assign(numbers, add));
// console.log(Object.assign({}, add));

const clone = Object.assign({}, add);

clone.d = 20;
console.log(add);
console.log(clone);
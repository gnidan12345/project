for(i = 5; i <= 10; i++){
console.log(i)
}

for(let i = 20; i >= 10; i-- ){
    if (i === 13) break;
console.log(i);
}

for(let i = 20; i >= 10; i-- ){
    if (i === 13) break;
console.log(i);
}

for(let i = 2; i <=10; i++){
    if (i % 2 === 0)
    console.log(i);
}

for (let i = 2; i <=16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}



let i = 2;
while (i <=16){
    
    if (i % 2 === 0) {
        i++;
                continue;
}else{
console.log(i);
    }
    i++;
}

    
const numbers =  []; 

for (i = 5; i <=10; i++){
   numbers [i] = i
}
console.log(numbers);


// const arrayOfNumbers =  []; 

// start: for (i = 0; i <=4; i++){
//    for (j = 5; j <=10; j++){

      
//     console.log(i);
//     console.log(j);
//     // j++;
//     arrayOfNumbers [i] = j; 
//     console.log(arrayOfNumbers [i]);
//     break start;


//    }
// }

   
   

// console.log(arrayOfNumbers);


const arrayOfNumbers = [];

for(let i = 5; i < 11; i++){
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);


const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];




for (let i = 0; i < arr.length; i++ ){
    result[i] = arr[i];
}

console.log(result);


// const data = [5, 10, 'Shopping', 20, 'Homework'];


// for(let i = 0; i < data.length;i++){
//     if (typeof(data[i]) === 'string' ){
//         data[i] = `${data[i]}  - done`;
//     }

//   else if (typeof(data[i]) === 'number')
//         data[i] = data[i]*2;
    
// }

// console.log(data);


// const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }
//     console.log(data);


// 


// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);


    let result = '';
    const length = 5;

    for (let i = 0; i <= length; i++){
        for (let j = 0; j < length - i; j++){
            result +=  " ";

            console.log(j)
            
        }
        for (let j = 0; j < 2 * i +1; j++)
        {result += "*"

        // console.log(j)
    }

       

        result += '\n';
    }

    console.log(result);
     



// Calculator with discount
const usdCurr = 28;
const discount = 0.9;


function convert (amount, curr){
    return curr * amount;
      
}

function promotion(result){
    console.log(result * discount);
}

const res = (convert(500, usdCurr))

promotion(res);


// досрочное завершение функции
function test(){
    for(let i = 0; i< 5; i++){
        console.log(i);
        if(i === 3) return;
    }

    console.log('Done');
}
test();


// функия возвращает undefined
function doNothing(){};
console.log(doNothing() === undefined);

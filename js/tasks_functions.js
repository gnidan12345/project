const name = 'Anton';
function sayHello(name) {
  
    return `Привет,  ${name}`;
    }

//     console.log(sayHello(name));


//     const number = 5;
//     function returnNeighboringNumbers(number) {

//         return [number - 1, number, number + 1]

//     }

//     console.log(returnNeighboringNumbers(number));



    const baseNumber  = 3;
    const count = 10;

    function getMathResult(baseNumber,count) {

        if (typeof(count) !== 'number' ||  count <= 0){

            return baseNumber;
        }
         let str = '';

            for(let i = 1; i <= count; i++){
            if(i === count){
           str += `${baseNumber * i}`;
        } else { 
            str += `${baseNumber * i}---`;

        }
    }
        return str;
}

   console.log(getMathResult(baseNumber,count));


   let num;
   function calculateVolumeAndArea(num) {

    let volume = 0,
        squre = 0;

 if ( num < 0 || typeof(num) !== 'number' || !Number.isInteger(num)){
    return ('Ошибка. Проверьте правильность введенного номера места')
}else
{
    
volume = num * num * num;
squre = 6  * num * num;
return (`Объем куба: ${volume}, площадь всей поверхности: ${squre}`)
}

}
   console.log(calculateVolumeAndArea(5));
   console.log(calculateVolumeAndArea(15));
   console.log(calculateVolumeAndArea(15.5));
   console.log(calculateVolumeAndArea('15'));
   console.log(calculateVolumeAndArea(-15));


   let place;
   function getCoupeNumber(place){
    if (typeof(place) !== 'number' || place < 0 || !Number.isInteger(place)){
        return "Ошибка. Проверьте правильность введенного номера места";
    }  if (place === 0 || place > 36){
        return "Tаких мест в вагоне не существует";
    }   

    for (let i = 4; i <= 36; i = i + 4) {
        if (place <= i) {
            return Math.ceil(i / 4);
        }
    }


    


}
    console.log(getCoupeNumber(33));
    console.log(getCoupeNumber(7));
    console.log(getCoupeNumber(300));
    console.log(getCoupeNumber(0));
    console.log(getCoupeNumber(7.7));
    console.log(getCoupeNumber(-10));
    console.log(getCoupeNumber('Hello'));

    
    
//     function getTimeFromMinutes(minutesTotal){
//         if (minutesTotal < 0 || typeof(minutesTotal) != 'number' || !Number.isInteger(minutesTotal) ){
//             return "Ошибка, проверьте данные"
//         }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60

//     if (hours == 1){

//     return `Это ${hours}  час и ${minutes} минут`}

//     else if (hours >=2 && hours <=4){

//     return `Это ${hours}  часа и ${minutes} минут`}

//     else if (5 <= hours  <= 10 || hours == 0){
//         return `Это ${hours}  часов и ${minutes} минут`
//     }
//     }

//    console.log(getTimeFromMinutes(50));



   function getTimeFromMinutes(minutesTotal){
    if (minutesTotal < 0 || typeof(minutesTotal) != 'number' || !Number.isInteger(minutesTotal) ){
        return "Ошибка, проверьте данные"
    }

const hours = Math.floor(minutesTotal / 60);
const minutes = minutesTotal % 60

let hoursStr = '';

switch(hours){
    case 0 :
        hoursStr = 'часов';
        break;
    case 1: 
        hoursStr = 'час';
        break;
    case 2:
    case 3:
    case 4:        
        hoursStr = 'часа';
        break;
    default:
        hoursStr = 'часов';                
}

return `Это ${hours}  ${hoursStr} и ${minutes} минут`
}

console.log(getTimeFromMinutes(50));


function findMaxNumber(num1, num2, num3, num4){
    if (typeof(num1) !== 'number' ||
        typeof(num2) !== 'number' ||
        typeof(num3) !== 'number' ||
        typeof(num4) !== 'number' ){
        return 0;}
        else {
        return Math.max(num1, num2, num3, num4);

        }

        
}

console.log(findMaxNumber (1, 5, 6.6, 11));

console.log(findMaxNumber (1, 5, '6', '10'));






function pow(x,n){
   
//    if (n = Number.isInteger && n >=1)
   for (let i = 1; i < n ; i++){
   result *= x;
   
return result;

}
}

let x = prompt("Enter x", '');
let n = prompt("Enter n", '');

console.log(pow(2,5));




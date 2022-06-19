"user strict";

// console.log (4 + +"5");


console.log(2 + 2 * 2 === 8);

// 6 не равно 8 >> false
console.log(2 + 2 * 2 != 8);

console.log(2 + 2 *2 != '6');
console.log(2 + 2 *2 !== '6');
 
let incr = 10,
    decr = 10;

    // incr++;

    // decr--;


    // ++incr;

    // --decr;




    // console.log(incr++); /сначала возвращает старое значение потом увеличивает на 1
    // console.log(decr--); / сначала возвращает старое значение потом уменьшает  на 1


    // / сначала увеличивает на 1, потом возвращает значение
    console.log(++incr); 


    // / сначала уменьшает на 1, потом возвращает значение
    console.log(--decr);    


    console.log(5%2);


    // строгое сравнение
    console.log(2*4 === '8'); 

    const isChecked = false,
          isClose = false;
     
    // && возвращает true если оба аргумента правдивы       
    console.log(isChecked&&isClose);

     // ||возвращает true если хотя б одно  занчение правдиво  
    console.log(isChecked||isClose);


    console.log(isChecked||!isClose);











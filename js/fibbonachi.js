function fib(num){
    let str = "";

    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)){
        return str = "";
    }
    if (num > 0 )
    {

        // fib(4) => "0 1 1 2"
        let first = 0;
        let second = 1; 
        for (let i = 0; i < num; i++) {
            if (i + 1 === num){
                str += `${first}`;
            } else {
                str += `${first} `;
            }

            let third = first + second;
            first = second;
            second = third;
        }

        return str;

    }
      
    }

    console.log(fib(4));
    console.log(fib(7));
    console.log(fib('7'));
    console.log(fib(1));
    console.log(fib(0))
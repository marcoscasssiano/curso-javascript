// divisivel por 3 => fizz
//divisivel por 5 => Buzz
//divisivel por 3 e 5 => FizzBuzz
//não divisivel por 3 ou 5 => entrdada
//não é um numero => "não é um numero"

function fizzBuzz(entrada){

    switch(entrada){
        case false:
            console.log("não é um numero")
            break;
        case "":
            console.log("não é um numero")
            break;
        case " ":
            console.log("não é um numero")
            break;
        case null:
            console.log("não é um numero")
            break;
        case 0:
            console.log(0)
            break;
        default:
             let x = entrada;
             let y = entrada;
        
             x = x%3;
             y = y%5;
         
            if(x == 0 && y == 0){
                console.log("FizzBuzz");
            }else if(x == 0){
                console.log("Fizz");
            }else if(y == 0){
                console.log("Buzz");
            }else if(x || y == 0 ){
                console.log(entrada);
                
            }else if(x || y != NaN){
                console.log("não é um numero");
            }
        };
   
};

fizzBuzz(5);

/*
const resultado = fizzBuzz();
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return "não é um numero";
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'Fizzbuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'buzz';
    return entrada;
}
*/

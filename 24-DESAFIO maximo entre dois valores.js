//escreva uma função que usa 2 numeros e retona o maior entre eles

function mostraOMaior(x,y){
    if(x > y){
        console.log(x);
    }else{
        console.log(y)
    };

};

mostraOMaior(5, 6);


//utilizando o operador ternario

let numeros = funcaoTenario(5,7);

function funcaoTenario(x,y){
    return x > y ? x : y;
}

console.log(numeros)

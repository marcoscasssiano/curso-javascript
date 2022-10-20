//exemplo 0
let numeros = [1,2,3,4,5,6];
let outros = numeros;

numeros = [0];
console.log(outros);//retonar [1,2,3,4,5,6];

//exemplo 1

let outrosNumeros = [1,2,3,4,5,6];
let outrosOutros = outrosNumeros;

outrosNumeros.length = 0;
console.log(outrosOutros);//retornar [1,2,3,4,5,6, lenght:0]

//exemplo 2
let outrosNumerosDenovo = [1,2,3,4,5,6];
let outrosOutrosDenovo = outrosNumerosDenovo;

outrosNumerosDenovo.splice(0,outrosNumerosDenovo.length);
console.log(outrosNumerosDenovo);
console.log(outrosOutrosDenovo);

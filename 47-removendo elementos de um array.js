const numeros = [1,2,3,4,5,6];

numeros.push();
numeros.unshift();
numeros.splice();

//final
const ultimo = numeros.pop();///retirou o ultimo valor
console.log(ultimo);
console.log(numeros);

//Inicio
const primeiro = numeros.shift();//retirou o primeiro
console.log(primeiro);
console.log(numeros);

//meio
const meio = numeros.splice(2,1);//o primeir numero vc diz o local do lenght e o segundo quantos valores a partir do que vc escolheu
console.log(meio);
console.log(numeros)

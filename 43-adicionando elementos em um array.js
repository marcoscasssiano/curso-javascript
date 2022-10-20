//manipuação de array ocorre muito no js

const numero = [1,2,3];
//embora não seja possivel modificar uma constante, é possivel modificar o que há dentro de um array definida com const

numero.unshift(0);//unshift serve para adicionar um umero à esquerda
console.log(numero);

numero.splice(1,0,"a");//colocar um outo valor entre os valores citados
console.log(numero);

numero.push(5);//adiciona um numero no fim
console.log(numero);
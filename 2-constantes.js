let valorDoIngresso = 20; //declaro a variavel e dou um valor.
console.log(valorDoIngresso);
valorDoIngresso = 30;//quando de trada de uma variavel, posso simplesmente atribuir outro valor a hora que eu quiser.
console.log(valorDoIngresso);//(para atribuir o valor de uma variavel ja criada antes não é necessario declarar o let).

//diferente da variavel let, uma variavel const como o proprio nome já diz é um valor constante.
//ou seja, uma vez que o valor foi definido não poderá ser trocado.
const valorDoIngressoMeiaEntrada = 10; 
console.log(valorDoIngressoMeiaEntrada)
valorDoIngressoMeiaEntrada = 15;// aqui o programa dar erro pois esse tipo de modificação não é aceito.
                                //"constantes.js:10 Uncaught TypeError: Assignment to constant variable.at constantes.js:10:28"

                

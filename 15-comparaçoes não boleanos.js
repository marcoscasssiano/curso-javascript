//Em JavaScript, um valor truthy é um valor que se traduz em verdadeiro quando avaliado em um contexto Booleano. 
//Todos os valores são truthy a menos que eles sejam definidos como falsy 
//(ou seja., exceto para false , 0 , "" , null , undefined , e NaN )

console.log(false || true);//precisa de apenas um true para que retorne true
console.log(false || "marcos")//"marcos" é uma string, mas não é uma string vazia e sim uma string definida por isso retorna a string
console.log(false || 1);//valor definido

//exemplos
let valorFalsy = 0;
let mostreEsse = "mostre esse!"
let nãoEsse = "não mostre esse!"

console.log(nãoEsse || mostreEsse);//por que não apareceu o "mostre esse!"? 
                                   // O operador || precisa de apenas que a primeira ndição seja truthy
                                   //quando ele conseguiu o valor truthy ele descartou a segunda opção
                                   //independente de ser truthy ou falsy

console.log(valorFalsy || mostreEsse);//agora que o primeiro valor foi um falsy ele pegou o segundo valor que era falso

//para mais alguns exemplos vou inserer outra variavel que está definido como falsy:
let outroValorFalsy = "";//repare que essa string é vazia, entre os parenteses não há espaço. ou seja isto:"" é diferente de " ".
console.log(valorFalsy || outroValorFalsy);//não devolveu nada, embora eu esperava uma resposta em booleano.
console.log(valorFalsy || outroValorFalsy || mostreEsse);//o operador foi indo até encontrar uma opção truthy.



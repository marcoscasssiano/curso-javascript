//operador logico: e (&&)
//retorna TRUE se os dois operandos forem true

console.log (true && true);//retornar true
console.log(false && true);//retornar false
console.log(false && false);//retorna false
console.log(" ");

//operador logico: ou ( || )
//retornar true quando pelomenos um dos operadores for true

let falso = false;
let verdadeiro = true;
let operadorOu= falso || verdadeiro;

console.log(operadorOu);

//operador logico NOT (!)
//pelo que eu entendi ele vai devolver ou oposto, ou seja se for true vai dar false e se for false vai dar true.
console.log(" ");

let falseNot = false
let verdadeiroNot = true

console.log(!falseNot);//o valor do falseNot é false mas com o operador(!) na frente vai retornar true no console.
console.log(!verdadeiroNot);//o mesmo se aplica aqui, o valor do verdadeiroNot é true mas com o operador (!) vai retornar false.


//Operador de atribução
//o principal operador de atribuição é nada mais nada menos que o sinal de igual!
//estamos usando ele desde o começo, mas é importante deixar claro que o sinal de igual significa ATRIBUIÇÃO e não IGUALDADE!
//mais para frente vamos entender o porque dessa diferença..
//exemplo:

let valor = 10
console.log(valor);
console.log("");

/*
atribuir: = 
somar por ele mesmo: +=
subtrair por ele mesmo: -=
multiplica por ele mesmo: *=
divide por ele mesmo:/=
IMPORTANTE: ESSE TIPO DE OPERAÇÃO SÓ FUNCIONA QUANDO VOCE VAI MANIPULAR A PROPRIA VARIAVEL
*/

//a real necessidade de fazer esse comando é na ideia de deixar o código mais limpo por escrever menos código
//exemplo:

let maisCodigo = 1; //criei uma variavei e depois preciso subtrair ele por ela mesma
maisCodigo = maisCodigo - maisCodigo; //repare que escrevi 3 vezes a mesma varivel
console.log(maisCodigo);// 1-1=0

//agora vamos usar o operador -= para escrever menos codigo:
let menosCodigo = 2;
menosCodigo -= menosCodigo;//sei que de primeiro momento não parece que voce escreveu muito menos, mas imagine uma tabuada como isso pode ajudar
console.log(menosCodigo);

//outro exemplo:
let multiplicaEleMesmo = 5;
multiplicaEleMesmo *= multiplicaEleMesmo;
console.log(multiplicaEleMesmo);



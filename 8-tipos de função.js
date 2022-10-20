//basicamente temos 2 tipos de função

//a função que realiza uma tarefa, e não devolve nada:
function dizerNome(){
    console.log("Marcos");
};

dizerNome();

//realiza uma tarefa, cálculo ou operação retornando algo:
function multiplicaPorDois(valor){
    return valor * 2;
}
//alguns exemplos:
let multiplicaPorEleMesmo = multiplicaPorDois(1);
console.log(multiplicaPorDois(5));
console.log(multiplicaPorDois(10));



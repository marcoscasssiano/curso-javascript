//definindo de uma forma simples: array é um conjunto de dados que pode ser acessado através de um indice.

let informacaoDaFamilia = {
   sobrenome: "Saraiva",
   membros:4,
   temHomens:true,
   temCriancas:false
}

let familia = ["marcos", "beatriz","neuza","adenilson", informacaoDaFamilia]//no array pode se colocar varios tipos de variaveis
                                                                            //objetos, boolean, e até outro array
console.log(familia)
console.log(familia[0])//sempre se começa um array pelo numero 0
console.log(familia.length)//o lenght é um metodo que mostra o tamanho do array no caso 5 mas começa a se contar à partid do 0
console.log(familia[5])// deu undefiled por que não há um sexto item no array SE CONTA A PARTIR DO 0(kkk)
// basicamente vc declara a variavel fora no escopo global
// ai com o while voce exige uma condição
// while(condição){código a ser executado enquando aquela condifção for valida};

let i = 0;
while(i < 5){
    console.log("while", i)
    i++//CUIDADO PARA NÃO ESQUECE DE AUMENTAR O VALOR, POR QUE SELE CONTINUAR EM 0 SIMPLESMENTE VAI RODAR AO INFINITO
        //E EXPLODIR SUA MAQUINA
}
//if e else é basicamente um comando que se isso nao acontecer o outro acontece

/*if(condição desejada){
    código a ser executado
    }else{
        caso a condição desejada não foir possivel ele vai executar esse códido
    }

outro exemplo:
if(condição desejada){

    }else if (segunda condição se a primeira não for possivel){

                }else{
                    caso nenhum dos if seja executado esse else vai ser executado
                    }*/

//usarei esse exemplo de horas com um horário falso apenas para ver como funciona na pratica

let hora = 19;//é só exemplo de horario, existem formas de puxar o horario real mas nao vamos se atentar a isso por enquanto

if (hora >= 6 && hora <= 12) {
    console.log("bom dia");
}
else if (hora > 12 && hora <= 18){
    console.log("boa tarde");
}
else{
    console.log("boa noite");
}
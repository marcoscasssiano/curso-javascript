



function exibirTipo(entrada){


    for (let i = 0; i <= entrada; i++){
        let teste = i % 2;
        if(teste == 0 ){
            console.log(i, "par");
        } else{console.log(i, "impar")}
    }
}
exibirTipo(10);
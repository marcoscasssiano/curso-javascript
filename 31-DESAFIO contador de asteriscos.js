//criar uma funcao que exibe a quantidade de *
// que aquela linha possui

function exbibirAsteriscos(linhas){
//     let padrão = " ";
//     for(let linha = 1; linha <= linhas; linha++){
//         padrão += "*";
//         console.log(padrão);
//     }
// }
    for(let linha = 1; linha <= linhas; linha++){
        let padrão = ' '
        for(let i = 0; i < linha; i++){
            padrão+="*"
        }
        console.log(padrão)
    }
}
exbibirAsteriscos(10);

//a primeira opção é mto melhor
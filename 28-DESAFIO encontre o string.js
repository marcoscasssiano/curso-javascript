/*const filme1 = {
    titulo : "vingadores",
    ano : 2018,
    diretor: "Robin",
    personagem : "Thor"
}

const filme2 = {
    titulo : "se eu fosse você",
    ano : 1999,
    diretor : "marquinhos",
    personagem : "curupira"
}

function exibirPropriedades(objeto){
    console.log("titulo: "+objeto.titulo);
    console.log("diretor: "+objeto.diretor);
    console.log("personagem: "+objeto.personagem);
}

exibirPropriedades(filme1);
console.log(" ");
exibirPropriedades(filme2)
*/

const filme = {
    titulo : "vingadores",
    ano : 2018,
    diretor: "Robin",
    personagem : "Thor"
}
 function exibirPropriedades(objeto){
    for (propriedades in objeto)
        if(typeof objeto[propriedades] === "string")
            console.log(propriedades,objeto[propriedades])
 }

 exibirPropriedades(filme);

 //péssimo desafio..
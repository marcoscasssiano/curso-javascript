//de acordo com o cara ai esse é o que funciona melhor pra operar objetos ou arrays.
// TO DE SAO CHEIO VOU SÓ COPIAR DEPOIS VEJO ISSO AI

const pessoa = {
    nome: "Marcos",
    idade: 25
};

for(let chave in pessoa){
    console.log(chave,pessoa["nome"]);
    
}

const cores = ["vermelho", "azul", "verde"]

for (let indice in cores){
    console.log(indice,cores[indice]);
}

//"a vida é dor e sofrimento"
// aqui voce abre um switch e colocas as oçoes em cada caso
//basicamente é isso não tem muito  que explicar

let permissão = 200;// teste strings como: "comum", "gerente", "diretor" ou algum valor que não foi definido para cair no default.


switch(permissão){
    case "comum":
        console.log("usuario comum")
        break;
    
    case "gerente":
        console.log("usuario gerente")
        break;

    case "diretor":
        console.log("usuario diretor")
        break;

    default:
        console.log("usuario não reconhecido")
};
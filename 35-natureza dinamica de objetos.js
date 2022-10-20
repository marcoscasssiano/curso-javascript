//natureza dinamica de objetos
const mouse = {
    cor : "vermelho",
    marca : "logitech"
}//definimos um objeto
mouse.velocidade = 5000;//se colocarmos um metodo após o mouse eel sera acrescentado ao objeto
//mouse.trocaDPI = ()=> console.log("mudando DPI");
mouse.trocaDPI = function () {
    console.log("mudando dpi");
}

console.log(mouse)

// da mesma forma que foi adicionado podemos retirar com o delete

delete mouse.velocidade;
delete mouse.trocaDPI;

console.log(mouse);
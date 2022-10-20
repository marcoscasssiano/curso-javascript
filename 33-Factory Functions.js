function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("fazendo ligação...")
        }
    }
}

const celular1 = criarCelular("galaxy", 5.5, 5000);

console.log(celular1);


function criaMoto(marcaDaMoto, corDaMoto, motorDaMoto){
    return{
        marcaDaMoto,
        corDaMoto,
        motorDaMoto,
        extra(){
            console.log("manual e chave reserva")
        }
    }
}

const moto1 = criaMoto("yamaha", "vermelha", 150);
const moto2 = criaMoto("honda", "prata", 160);

console.log(moto1);
console.log(moto2);
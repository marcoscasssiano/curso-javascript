//Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("fazendo ligação...");
    }
}

const celular = new Celular("galaxy", 5.5, 3800);

console.log(celular);

// class Celular {
//     constructor(marcaCelular, tamanhoTela, capacidadeBateria) {
//         this.marcaCelular = marcaCelular,
//         this.tamanhoTela = tamanhoTela,
//         this.capacidadeBateria = capacidadeBateria,
//         this.ligar = function () {
//             console.log("fazendo ligação...");
//         };
//     }
// }

// const celular = new Celular("galaxy", 5.5, 3800);

// console.log(celular);

function Moto(marcaDaMoto, corDaMoto, motorDaMoto){
    this.marcaDaMoto = marcaDaMoto,
    this.corDaMoto =  corDaMoto,
    this.motorDaMoto = motorDaMoto,
    this.extra = ()=> console.log("manual e chave reserva")//ARROW FUNCTION BABY
}

const moto1 = new Moto("yamaha", "vermelho", 150);
const moto2 = new Moto("honda", "azul", 160);

console.log(moto1);
console.log(moto2);
let a = "vermelho";
let b = "azul";

console.log(a);
console.log(b);
console.log("inverte")

function inverteValores(){
    
    let c = a;
    a = b;
    b = c;
    
};

inverteValores(a, b);

console.log(a);
console.log(b);

const primeiro = [1,2,3];
const segundo = [4,5,6];

//combinar
const combinado = [...primeiro,...segundo];//posso concatenar varios arrays, misturando até arrays de strings e numeros.
console.log(combinado)

const clonado = [...combinado];//é possivel usar o spread para clonar
console.log(clonado)

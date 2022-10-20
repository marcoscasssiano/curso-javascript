//vou simplemente pegar a aula passa e fazer com arrow function

var array1 = [5,12,8,130,44];

var encontre = array1.find((elemento) => elemento > 10);

console.log(encontre);

// outro exemplo

const marcas = [
  {id:1, nome: "a"},
  {id:2, nome: "b"},
];

const marca = marcas.find((marca) => marca.nome === "b");

console.log(marca);

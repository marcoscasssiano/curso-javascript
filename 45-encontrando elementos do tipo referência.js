//o find() método retorna o valor do primeiro elemento no array,
//que satisfaz a condição que foi passada

var array1 = [5,12,8,130,44];

var encontre = array1.find(function (elemento){
  return elemento > 10;
});

console.log(encontre);

// outro exemplo

const marcas = [
  {id:1, nome: "a"},
  {id:2, nome: "b"},
];

const marca = marcas.find(function(marca){
  return marca.nome === "b";
});

console.log(marca);

let marcosIdade = 25
console.log(typeof marcosIdade);
marcosIdade = "a idade de marcos é 25";
console.log(typeof marcosIdade);

let confirmaMarcosTem25 = true;
console.log(typeof confirmaMarcosTem25);
confirmaMarcosTem25 = undefined;
console.log(typeof confirmaMarcosTem25);
//em resumo tudo isso aqui foi para mostrar que no javascript tem uma tipagem muito dinamica
//ou seja, se cria uma variavel do tipo numero e depois rapidamente ele pode se tornar uma tipo string ou tipo booleana
//outras linguagens como java não aceitam esse tipo de coisa, uma vez declarada o *tipo* da variavel, jamais poderá ser mudado

//criar um objeto endereço que contem
//rua
//cidade
//cep
//e uma função:
//exibirEndereço();

function Endereço(rua, cidade,cep){
	this.rua = rua,
	this.cidade = cidade,
	this.cep = cep
};

const endereço1 = new Endereço("Salvador Peluso Basile", "Taboão da Serra", 6755010);

function exibeEndereço(endereço){
	console.log(endereço.rua);
	console.log(endereço.cidade);
	console.log(endereço.cep);
}

exibeEndereço(endereço1);
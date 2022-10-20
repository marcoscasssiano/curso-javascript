//
function Endereço(rua, cidade,cep){
	this.rua = rua,
	this.cidade = cidade,
	this.cep = cep
};

const endereço1 = new Endereço("a", "b", 0);
const endereço2 = new Endereço("a", "b", 0);
const endereço3 = endereço1;

function saoIgaus(a, b){
	return a.rua == b.rua &&a.cidade == b.cidade && a.cep == b.cep
}

console.log(saoIgaus(endereço1,endereço2);
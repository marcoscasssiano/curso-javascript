const celular = {
	marcaCelular : "ASUS",
	tamanhoTela: {
		vertical: 155,
		horizontal: 75
	},
	ligar: ()=>{
		console.log("fazendo ligação")
	}
}

console.log(celular);

const cloneCelular = Object.assign({}, celular);

console.log(cloneCelular);

const novoCelular = Object.assign({
	bateria:5000// entre a chaves posso adicionar mais metodos para o objeto
}, celular);

console.log(novoCelular);

const outroClone = {...celular};//outra forma de fazer a mesma coisa.
console.log(outroClone);

console.log(celular);
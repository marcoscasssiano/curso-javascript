// tipo primitvo
const mensagem = "minha primeira mensagem";

// tipo objeto
const outraMensagem = new String("bom dia")

console.log(typeof mensagem);
console.log(typeof outraMensagem);

console.log(outraMensagem.length);

console.log(outraMensagem[2]);//pega a string dessa posição dentro do length

console.log(outraMensagem.includes("primeira"));//devolve um booleano se a palavra esta contida dentro da string

console.log(outraMensagem.includes("bom"));

console.log(outraMensagem.startsWith("verde"));//confere se a string começa com a palavra

console.log(outraMensagem.endsWith("mensagem"));//confere o final da string

console.log(outraMensagem.replace("dia","noite"));//troca a palavra
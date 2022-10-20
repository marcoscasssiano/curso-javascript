let corDeTexto = "azul"

function mudaCor(){//normalmente vai algo ali dentro dos parenteses, você vera nos proximos exemplos...

    corDeTexto = "vermelho";

};

function mudaCorComParametroEArgumento(cor){//repare que criei um paremetro que vai ser adicionao na hora que eu chamar a função

    corDeTexto = cor;

};

function mudaCorETom(cor, tom){//agora criei um parametro com dois ergumentos
    corDeTexto = cor + tom;

}

console.log(corDeTexto);//está com a cor orginal que foi setada na hora de criar a variavel

mudaCor();//função que roda sem paremetro, dentro da função mudamos a variavel criada anteriormente
console.log(corDeTexto);

mudaCorComParametroEArgumento("amarelo");//função com 1 paremetro, na hora de chama-la dizemos qual é o argumento
console.log(corDeTexto);

mudaCorETom("azul"," escuro");//mesmo esquema mas com dois parametros e dois argumentos, é importante respeitar bem a ordem dos parametros.
console.log(corDeTexto);
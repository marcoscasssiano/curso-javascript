//  function verificaVelocidade(velocidade){
//     if (typeof velocidade !== 'number')
//         return "não é um numero";
//     if (velocidade <= 74)
//         return"0 pontos";
//     if (velocidade >= 75 && velocidade <= 79)
//         return "1 ponto";
//     if (velocidade >= 80 && velocidade <= 84)
//         return "2 pontos";
//     if (velocidade >= 85 && velocidade <= 89) 
//         return "3 pontos";
//     if (velocidade >= 90 && velocidade <= 94)
//         return "4 pontos";
//     if (velocidade >= 95 && velocidade <= 99)
//         return "5 pontos";
//     if (velocidade >= 100 && velocidade <= 104)
//         return "6 pontos";
//     if (velocidade >= 105 && velocidade <= 109)
//         return "7 pontos";
//     if (velocidade >= 110 && velocidade <= 114)
//         return "8 pontos";
//     if (velocidade >= 115 && velocidade <= 119)
//         return "9 pontos";
//     if (velocidade >= 120 && velocidade <= 124)
//         return "10 pontos";
//     if (velocidade >= 125 && velocidade <= 129)
//         return "11 pontos";
//     if (velocidade >= 130) 
//         return "12 pontos";  
//  }

 //velocidade maxima até 70
 //a cada 5km acima do limite voce ganha 1 ponto
 //Math.Floor()
 //caso pontos maior que 12 -> "carteira suspedida"


// de 74 pra menos = 0 pontos
//75 = 1 ponto

function verificaVelocidade(velocidade){
   const velocidadeMaxima = 70;
   const kmPorPonto = 5;
   if(velocidade <= velocidadeMaxima)
        console.log("ok");
    
    else{
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if (pontos >=12)
            console.log("carteira suspensa");
        else
            console.log("pontos", pontos);
    }
}

verificaVelocidade(100);
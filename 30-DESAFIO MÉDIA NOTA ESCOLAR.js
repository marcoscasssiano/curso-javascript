const array = [70, 70, 80];

function mediaDoAluno(){
    let notas = 0;

    for(let i = 0; i < array.length; i++){
        notas += array[i];
    }
    notas = notas / array.length;

    if (notas <= 59){
        console.log("F");
    }else if(notas > 59 && notas <=69){
        console.log("D")
    }else if(notas > 69 && notas <=79){
        console.log("C")
    }else if(notas > 79 && notas <=89){
        console.log("B")
    }else if(notas > 89){
        console.log("A")
    }
};

mediaDoAluno(array);

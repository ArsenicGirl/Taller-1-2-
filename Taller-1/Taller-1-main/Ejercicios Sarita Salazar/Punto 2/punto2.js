'use strcit'

let num;
num = 0;
//num = -8;

num = prompt("ingrese un número: ");
let result;
result = 0;
    if (num>0){
        result = (num);
        alert("Es positivo el número" +result);
        //console.log('positivo');
    }
    else{
        alert("Su numero es negativo")
        //console.log('negativo');
    }
    export{num as punto2}
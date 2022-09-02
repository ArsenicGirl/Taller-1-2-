//Leer 3 números, determinar el mayor de los 3 e imprimirlo.
'use strict';

let num1;
let num2;
let num3;

/*num1 = 3;
num2 = 7;
num3 = 38;*/
num1 = 0;
num2 = 0;
num3 = 0;

num1 = parseFloat(prompt("Ingrese el primer número:"));
num2 = parseFloat(prompt("Ingrese el segundo número:"));;
num3 = parseFloat(prompt("Ingrese el tercer número:"));;

let mayor
if (num1 >= num2 && num1 >= num3){
    mayor = (num1);
    alert("Es número mayor es: " +num1);
}
else if (num2 >= num1 && num2 >= num3){
    mayor=(num2);
    alert("Es número mayor es: "+num2);
}
else{
    mayor=(num3);
    alert("Es número mayor es:"+num3 );
}
console.log("el numero mayor es "+ mayor)

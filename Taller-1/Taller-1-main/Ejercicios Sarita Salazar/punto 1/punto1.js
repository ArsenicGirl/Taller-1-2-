'use strict'
//Realizar un programa que pida al usuario 2 números y se realicen las 4operaciones básicas (Suma, resta, multiplicación, división). Imprimir los resultados.
let num1;
let num2;
//let resta;
/*let multiplicacion;
let division;

//resta = 0;
multiplicacion = 0;
division = 0;*/

num1 = parseFloat(prompt("ingrese un número: "));
num2 = parseFloat(prompt("ingrese otro segundo número: "));

    function suma (num1 =0, num2=0){
        return num1 + num2;
    }
    let result1 = 0;
    result1 = parseFloat(num1) + parseFloat(num2);
    //result1 = suma (3,5);
    console.log(result1);
    alert ("El resultado de la suma es: "+result1);
   
    function resta (num1= 0, num2 = 0){
            return num1 - num2;
        }
        let result2 = 0;
        result2 = parseFloat(num1) - parseFloat(num2);
        alert ("El resultado de la resta es: "+result2);
        //result2 = resta (3,5);
        console.log(result2);
    
    function multiplicacion (num1= 0, num2 = 0){
            return num1 * num2;
        }
        let result3 = 0;
        result3 = parseFloat(num1) * parseFloat(num2);
        alert ("El resultado de la multiplicación es: "+result3);
        //result3 = multiplicacion (3,5);
        console.log(result3);
    
        function division (num1= 0, num2 = 0){
            return num1 / num2;
        }
        let result4 = 0;
        result4 = parseFloat(num1) / parseFloat(num2);
        alert ("El resultado de la divisón es: "+result4);
        //result4 = division (3,5);
        console.log(result4);

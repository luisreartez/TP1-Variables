// ejercicio 7

let numero1 = prompt("Escribe un numero");
let numero2 = prompt("Escribe otro numero");
let numero3 = prompt("Escribe otro numero");

if (numero1 > numero2 && numero1 > numero3){
    document.write(numero1);
}

else if (numero2 > numero3){
    document.write(numero2);
}

else {
    document.write(numero3);
}
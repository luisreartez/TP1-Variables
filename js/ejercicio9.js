// ejercicio 9

let frase = prompt("Ingrese una frase");
for(let posicion = 0; posicion < frase.length; posicion++ ){
    if(frase.charAt(posicion) =="a" || frase.charAt(posicion) == "e" || frase.charAt
    (posicion) == "i" || frase.charAt(posicion) == "o" || frase.charAt(posicion) == "u"){
        document.write(frase.charAt(posicion));
    }
}
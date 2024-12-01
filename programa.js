
//sindy Fabiola Perdomo Rapalo
//conversion de binario a decimal
let binariodecimal=prompt("Ingreasr el numero binario");
let binario=binariodecimal.split('');//areglo del numero decimal
let e =binario.length;//longitud del numero binario
let n = 0; //posicion del digito
let d = 0; //el valor del decimal

//condicion para darme cuenta si el numero ingresado es valido .
//se busca si el areglo tiene 1 o 0, que son validos.
if (binario.some(digito => digito !== '0'&& digito !== '1')) {
    //si no es un binario, se manda un mensaje  que se ingrese un numero valido.
    console.log("ingresa un numero binario valido(solo 0 y 1.");
}else{
    //mientras la posicion es menor la longitud del array
    while(n<e){ 
        //se recorre cada digito de derecha a izquierda
        let numerodecimal=parseInt(binario[e-1-n]);
        //el ultimo digito se multiplica por 2 a la posicion
        d = d + (numerodecimal*2**n)
            //se incrementa la posicion del digito
            n++
    }
    
    //se muestra el resultado
            console.log(`El valor del binario en decimal es:${d}`);
            
            //Fin
 }
    

    
let entrada = "Libros Don Quijote de la mancha ";
let salida  = [];
let sale ="";
for (let index = (entrada.length - 1); index >= 0; index--) {
    salida.push(entrada[index]);    
}
for (let index = 0; index < salida.length; index++) {
    sale = sale + salida[index];    
}
console.log(sale);
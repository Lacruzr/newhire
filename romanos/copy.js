function fronr() {
/**let totaln = 0;
let ente = 0;
let entea = 0;
let caracter = document.getElementsByClassName("n-romano");*/
    console.log(caracter);
   /** for (let index = (caracter.length-1); index > -1; index--) {
        ente = cRoToEn(caracter[index]);

     if (ente<entea){
            totaln = totaln - ente;
        } else {
            totaln = totaln + ente;
        }
        entea = ente;
   

    document.getElementsByClassName("n-entero").innerHTML = totaln  *//
}

function cRoToEn(s) {
    switch (s) {
        
        case "I":
            return 1;
            break;
        case "V":
            return 5;
            break;
        case "X":
            return 10;
            break;
        case "L":
            return 50;
            break;
        case "C":
            return 100;
            break;
        case "D":
            return 500;
            break;
        case "M":
            return 1000;
            break;
        default:
            return 0;
            break;    
    }
}

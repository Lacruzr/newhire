function fronr() {
    let valroma = true;
    let totaln = 0;
    let ente = 0;
    let entea = 0;
    var s = "";    
    let caracter = document.getElementById("n-romano").value;
    s=caracter;
    
    for (let index = 0; index < s.length; index++) {

        if (cRoToEn(s[index]) == 0) {
            alert("Por favor introducir un Numero Romano Valido");
            valroma = false;
        }
        
        
    }
    if (valroma) {
        for (let index = (s.length-1); index > -1; index--) {
            ente = cRoToEn(s[index]);
    
        if (ente<entea){
                totaln = totaln - ente;
            } else {
                totaln = totaln + ente;
            }
            entea = ente;
        }
        document.getElementById("n-entero").innerHTML = totaln;
    }
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


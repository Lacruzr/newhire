   
    function cuentaletra() {

        let palabra = document.getElementById("texto").value;
        let va=0;
        let ve=0;
        let vi=0;
        let vo=0;
        let vu=0;
        let vsp=0;
        let vcons=0;
        let vtot=0;
        let vpala = palabra;
    
        
        for (let index = 0; index < vpala.length; index++) {
            
            if( vpala[index]=="a" || vpala[index]=="A") {
                va++;    
            }

            if( vpala[index]=="e" || vpala[index]=="E") {
                 ve++;    
            }
            if( vpala[index]=="i" || vpala[index]=="I") {
                vi++;    
            }

            if( vpala[index]=="o" || vpala[index]=="O") {
                 vo++;    
            }
            if( vpala[index]=="u" || vpala[index]=="U") {
                vu++;    
            }
            if( vpala[index]==" ") {
                vsp++;    
            }
        }
        vtot = (vpala.length);
        vcons = vtot - (vsp+va+ve+vi+vo+vu);
   
        document.getElementById("respuesta").innerHTML = `a,A: ${va} <br> e,E: ${ve} <br> i,I: ${vi} <br> o,O: ${vo} <br> u,U: ${vu} <br> consonantes: ${vcons} <br> espacios: ${vsp} <br> total: ${vtot} `;
    }

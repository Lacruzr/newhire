function BubbleSort(){
    let vin = 0;
    let arreglo = document.getElementById("arreglo").value;
    let vorder = document.getElementById("order").value;
    let varr =[];
    let arreglon=arreglo;
    for (let k = 0; k < arreglon.length; k=k+2) {
        varr.push(Number(arreglon[k]));
    }
    
        if(varr.length > 1) {
            if(vorder == "a"){
                for (let i = 0; i < (varr.length - 1); i++) {
                    for (let j = (i+1); j < varr.length; j++) {
                        if(varr[i] < varr[j]){
                            vin = varr[i];
                            varr[i] = varr[j];
                            varr[j] = vin;
                        }
            
                    }
                }
            }
        
            if(vorder == "d"){
                for (let i = 0; i < (varr.length - 1); i++) {
                    for (let j = (i+1); j < varr.length; j++) {
                        if(varr[i] > varr[j]){
                            vin = varr[i];
                            varr[i] = varr[j];
                            varr[j] = vin;
                        }
            
                    }
                }
            }
        }
    document.getElementById("salida").innerHTML = `Sorted Array: ${varr}`;
}
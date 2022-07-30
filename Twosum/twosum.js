function twosum() {
    let arreglo = document.getElementById("arr").value;
    let destino = document.getElementById("tar").value;
    let arreglon = arreglo;
    var numeros = [];
    var resulta = [];
    var i1 =0;
    var i2 =0;

    console.log(arreglo);
    console.log(destino);
    console.log(arreglon);
    console.log(numeros);
    console.log(resulta);
    for (let index = 0; index < arreglon.length; index=index + 2) {
        numeros.push(Number(arreglon[index]));
      
    }
    console.log(numeros);
    for (let i = 0; i < numeros.length; i++) {
        for (let j = i+1; j < numeros.length; j++) {
            if((numeros[i]+numeros[j])==destino){
                i1=i;
                i2=j;
            }
            
        }
       

    }  
    console.log(i1 +" "+i2)        
    resulta.push(i1);
    resulta.push(i2);
    if(i1==0 && i2 ==0){
        document.getElementById("salida").innerHTML = `No es posible obtener una respuesta: ${resulta}`;    
    } else {
        document.getElementById("salida").innerHTML = ` estos son los indices: ${resulta}`;  
    }
}
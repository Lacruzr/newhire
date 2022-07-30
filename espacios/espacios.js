let entrada = "Roberto La cruz loren este programa es arrecho, en realidad tiene peos conlos espacios";

salida ="";

for (let i = 0; i < entrada.length; i++)
{
    if(entrada[i] != " ") 
    {
        salida=salida+entrada[i];
    }
}
console.log(salida);
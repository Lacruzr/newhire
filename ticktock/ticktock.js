let mens ="";
for (let index = 0; index < 101; index++) {
    if ((index%2)==0){
        mens = mens + "tick";
    }
    if ((index%5)==0){
        mens = mens +  "tock";
    }
    if (mens !="") {
        console.log(mens);
    } else {
        console.log(index);
    }
    mens="";
}
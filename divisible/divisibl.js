let div2 = " 2 , ";
let div3 = " 3 , ";
let div5 = " 5 , ";
let div7 = " 7 , ";
let mens = "Es Divisible por:";
let numb = 21;

if ((numb%2) == 0) {
    mens = mens + div2;
}


if ((numb%3) == 0) {
    mens = mens + div3;
}


if ((numb%5) == 0) {
    mens = mens + div5;
}


if ((numb%7) == 0) {
    mens = mens + div7;
}

console.log(`El Numero : ${numb} ${mens}`);
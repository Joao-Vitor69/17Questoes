i = prompt("Digite seu primeiro número: ")
ii = prompt("Digite seu segundo número: ")

i = parseFloat(i)
ii = parseFloat(ii)

somadi = i+ii;

if(somadi>20){
    aumento = somadi + 8;
    alert(aumento)
}else if(somadi<=20){
    diminui = somadi - 5;
    alert(diminui)
}
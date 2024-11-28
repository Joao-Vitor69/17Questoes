let i = prompt("Digite seu primeiro número: ")
let ii = prompt("Digite seu segundo número: ")
let iii = prompt("Digite seu terceiro número:")

i = parseFloat(i)
ii = parseFloat(ii)
iii = parseFloat(iii)

maior = i;

if(maior<ii){
    maior = ii;
}   if(maior<iii){
    maior = iii;
}
alert("Seu maior número é: "+maior)
let valor = prompt("Digite o valor total: ")

valor = parseFloat(valor)

if(valor>=20){
    aumento = ((valor*0.45)+valor)
    alert("Sua ficou: "+aumento)
}else{
    aumento2 = ((valor*0.30)+valor)
    alert("Sua compra ficou: "+aumento2)
}
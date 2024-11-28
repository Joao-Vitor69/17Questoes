let i = prompt("Digite sua primeira nota: ")
let  ii = prompt("Digite sua segunda nota: ")
let iii = prompt("Digite sua terceira nota: ")

i = parseFloat(i)
ii = parseFloat(ii)
iii = parseFloat(iii)

media = (i+ii+iii)/3

if(7<=media){
    alert("ALUNO APROVADO")
}else{
    alert("ALUNO REPROVADO")
}
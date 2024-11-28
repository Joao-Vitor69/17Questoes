let i = prompt("Digite sua idade: ")

i = parseFloat(i)

if(i>=18){
    alert("Adulto")
}else if(i>=14){
    alert("Juvenil")
}else if(i>=9){
    alert("Infantil")
}else{
    alert("Mirim")
}
let salario = prompt("Digite seu salario: ")

salario = parseFloat(salario)
//como na questão não fala qual foi o percentual de aumento
//vou entender que o aumento foi de 30%
aumento = (((30/100)*salario)+salario)

alert("Seu salario com o aumento ficou de: "+aumento)
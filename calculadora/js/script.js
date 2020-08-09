console.log('Hello, Michelle!')

// entrada do ganho/mês
var inputSalario = document.querySelector('#ganho-mes')

//entrada das horas/dia
var inputHoras = document.querySelector('#horas-dia')

//botao de calcular e resultado

var resultado = document.querySelector('span')

function calcularValorHora() {
    var salario = inputSalario.valueAsNumber

    var horas = inputHoras.valueAsNumber

    var salarioXhora = horas / salario
    var horasMes = horas * 22
    var valorHora = salario / horasMes
    var valorDuasCasas = valorHora.toFixed(2)

    resultado.textContent = "R$" + valorDuasCasas

}

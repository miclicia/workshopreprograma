//entrada preço
var valorHora = document.querySelector('#valor-hora')
//entrada horas
var horasProjeto = document.querySelector('#horas-projeto')

//calcular
var resultado = document.querySelector('span')

function calcular() {
    var horas = valorHora.valueAsNumber
    var valor = horasProjeto.valueAsNumber

    var totalProjeto = horas * valor
    var total = totalProjeto.toFixed(2)
    
    resultado.textContent = 'Valor total: R$ ' + total

}
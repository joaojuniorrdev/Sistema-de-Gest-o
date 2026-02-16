/*--Sistema de coloração de prioridade--*/ 

let prioridade = document.getElementsByClassName("prioridade")
console.log(prioridade)


for (let i = 0; i < prioridade.length; i++){
    let prioridadeValor = prioridade[i]
    
    let textoPrioridadeValor = prioridadeValor.textContent

    if (textoPrioridadeValor == "Alta"){
        console.log(prioridadeValor)
        prioridadeValor.style.color = 'red'
        prioridadeValor.style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
        prioridadeValor.style.width = '50px'
        prioridadeValor.style.borderRadius = '5px'
    }
    if(textoPrioridadeValor == "Media"){
        prioridadeValor.style.color = 'blue'
        prioridadeValor.style.backgroundColor = 'rgba(0, 17, 255, 0.1)'
        prioridadeValor.style.width = '50px'
        prioridadeValor.style.borderRadius = '5px'
    }
     if(textoPrioridadeValor == "Baixa"){
        prioridadeValor.style.color = 'green'
        prioridadeValor.style.backgroundColor = 'rgba(12, 146, 19, 0.1)'
        prioridadeValor.style.width = '50px'
        prioridadeValor.style.borderRadius = '5px'
    }

}

 
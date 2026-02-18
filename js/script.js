/*--Sistema de coloração de prioridade--*/ 
let botaoPrioridade = document.getElementById('botao-adicionar')


document.addEventListener("click", function(e){
    let prioridade = document.getElementsByClassName("prioridade")
    for (let i = 0; i < prioridade.length; i++){
        let prioridadeValor = prioridade[i]
        console.log(prioridadeValor)
        let textoPrioridadeValor = prioridadeValor.textContent

        if (textoPrioridadeValor == "Alta"){
            console.log(prioridadeValor)
            prioridadeValor.style.color = 'red' 
        }
        if(textoPrioridadeValor == "Média"){
            prioridadeValor.style.color = 'blue'
        }
        if(textoPrioridadeValor == "Baixa"){
            prioridadeValor.style.color = 'green'
        }

}
}
)


 
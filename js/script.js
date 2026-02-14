function addTarefa(){
    let textoInput = document.getElementById("texto-input")
    let valorInput = textoInput.value

    if (valorInput  === ""){
        alert("Por favor, digite uma tarefa antes!")
    }

    let li = document.createElement("li")
    li.textContent = valorInput

    let deleteBtn = document.createElement("btn")
    deleteBtn.textContent = "X"
    deleteBtn.className = "botao-apagar"

    deleteBtn.onclick = function(){
        li.remove()
    }

    li.appendChild(deleteBtn)
    document.getElementById("lista-de-tarefa").appendChild(li);

    textoInput.value = ""
}

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

   
    console.log(textoPrioridadeValor)
    console.log(i)

}
 
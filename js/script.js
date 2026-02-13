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
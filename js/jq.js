$("#botao-adicionar-tarefa-topo").click(function(){
    $("#form-tarefa").slideDown()
})
$("#cancelar-tarefa")
$("#cancelar-tarefa").click(function(e){
    e.preventDefault()
    $("#form-tarefa").slideUp("slow", function(){})
})
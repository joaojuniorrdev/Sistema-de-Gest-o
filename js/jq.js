/* Animação do botao de adicionar tarefa */
$("#botao-adicionar-tarefa-topo").click(function(){
    $("#form-tarefa").slideDown()
})
$("#cancelar-tarefa")
$("#cancelar-tarefa").click(function(e){
    e.preventDefault()
    $("#form-tarefa").slideUp("slow", function(){})
})
/*-- Funcão de adicionar tarefa --*/
$(function(){
    $("#botao-adicionar").on("click", function(e){
        e.preventDefault()
        const tarefa = $("#nome-tarefa-input").val().trim()
        const prioridade = $("#prioridade-input").val().trim()
        const categoria = $("#categorias-input").val().trim()
        const usuario = $("#usuarios-input").val().trim()
        const data = new Date();
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // +1 pois janeiro é 0
        const ano = data.getFullYear();
        const dataAtual = dia + '/' + mes + '/' + ano;
        
        if(!tarefa || !prioridade || !categoria || !usuario){
            alert("Preencha todos os campos para adicionar sua tarefa!")
            return
        }

        const novaBox = $(`
                        <div class="box">
                            <div>
                                <h3>${tarefa}</h3>
                            </div>
                            <div>
                                <p class="prioridade">${prioridade}</p>
                                <p class="categoria">${categoria}</p>
                            </div>
                            <div>
                                <p>${dataAtual}</p>
                                <div class="botao-ok">
                                    <p>${usuario}</p>
                                    <button>ok</button>
                                </div>
                            </div>
                        </div>
            `)

        $("div-a-fazer").append(novaBox)

        $("#nome-tarefa-input").val("")
        $("#prioridade-input").val("")
        $("#categorias-input").val("")
        $("#usuarios-input").val("")
    })
})
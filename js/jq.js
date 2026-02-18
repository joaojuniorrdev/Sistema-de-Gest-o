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
                                <p>Prioridade: <span class="prioridade">${prioridade}</p>
                                <p class="categoria">Categoria: ${categoria}</p>
                            </div>
                            <div>
                                <p>${dataAtual}</p>
                                <div class="botao-ok">
                                    <p>${usuario}</p>
                                    <button>Concluído</button>
                                </div>
                            </div>
                        </div>
            `)

        
        $("#boxes-a-fazer").append(novaBox)

        $("#nome-tarefa-input").val("")
        $("#prioridade-input").val("")
        $("#categorias-input").val("")
        $("#usuarios-input").val("")
    })
})

/*-- Função de passar um item da lista de a fazer para feito --*/

$(function(e){
    $("#boxes-a-fazer").on("click", "button", function(e){
        e.preventDefault()
        
        const box = $(this).closest(".box")
        box.find(".botao-ok").remove()

        const usuario = box.find(".botao-ok p").text()

        box.append(`<p class = "concluido">Concluído</p>`)
        $("#div-feito").append(box)

        const boxFeitos = $("#div-feito .box")
/*-- Função de remover a box mais antiga --*/ 
        if (boxFeitos.length > 4){
            boxFeitos.first().remove()
        }
    })
})

$(function(e){
    if($("#div-feito <p>") == "concluido"){
        $("#div-feito <p>").style()
    }
})


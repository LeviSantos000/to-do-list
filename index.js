function abrirModal() {
    overlay.classList.add("active")
    criarTarefa.classList.add("active")
}

function fecharModal() {
    overlay.classList.remove("active")
    criarTarefa.classList.remove("active")
}

function buscarTarefas() {
    fetch("http://localhost:3000/tarefas")
    .then(res => res.json())
    .then(res => {
        inserirTarefas(res);
    })
} buscarTarefas();

function inserirTarefas(listaDeTarefas) {
    if(listaDeTarefas.length > 0){
        lista.innerHTML = ""
        listaDeTarefas.map(tarefa => {
            lista.innerHTML += `
                <li>
                    <h5>${tarefa.titulo}</h5>
                    <p>${tarefa.descricao}</p>
                    <div class="actions">
                        <i class='bxr bxs-trash' onclick="deletarTarefa(${tarefa.id})"></i> 
                    </div>
                </li>
            `;
        })
    }
}

function novaTarefa() {
    event.preventDefault();

    let tarefa = {
        titulo: titulo.value,
        descricao: descricao.value
    }

    fetch("http://localhost:3000/tarefas", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(tarefa)
    })
    .then(res => res.json())
    .then(res => {
        fecharModal();
        buscarTarefas();
        let form = document.querySelector("#criarTarefa form")
        form.reset();
    })
    
}

function pesquisarTarefas() {
    let lis = document.querySelectorAll("ul li");
    if (pesquisar.value.length > 0) {
        lis.forEach(li => {
            let titulo = li.children[0].innerText.toLowerCase()
            let descricao = li.children[1].innerText.toLowerCase()

            if(titulo.includes(pesquisar.value) || descricao.includes(pesquisar.value)){
                li.classList.remove('oculto');
            }
            else{
                li.classList.add('oculto');
            }
        })
    } else {
        lis.forEach(li => {
            li.classList.remove('oculto');
        })
    }
}

function deletarTarefa(id) {
    fetch(`http://localhost:3000/tarefas/${id}`, {
        method: "DELETE",
    })
    .then(res => res.json())
    .then(res => {
        alert("Tarefa deletada com sucesso!");
    })
}
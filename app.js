//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    
    if (nome) {
        listaAmigos.push(nome);
        atualizarListaAmigos();
        input.value = '';
    }
}

// Função para atualizar a lista exibida no HTML
function atualizarListaAmigos() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

// Função para sortear os amigos
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }
    
    const resultado = [...listaAmigos];
    resultado.sort(() => Math.random() - 0.5);
    
    const ul = document.getElementById('resultado');
    ul.innerHTML = '';
    
    resultado.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${amigo} tirou ${resultado[(index + 1) % resultado.length]}`;
        ul.appendChild(li);
    });
}

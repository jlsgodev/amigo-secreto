// Lista para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    
    if (nome) {
        if (listaAmigos.includes(nome)) {
            alert(`O amigo ${nome} já foi adicionado.`);
            input.value = '';
            return;
        }
        listaAmigos.push(nome);
        atualizarListaAmigos();
        input.value = '';
        input.focus();
    } else {
        alert('Por favor, insira um nome.');
    }
}

// Função para atualizar a lista exibida no HTML
function atualizarListaAmigos() {
    let ul = document.getElementById('listaAmigos');
    
    // Se o elemento não existir, criá-lo
    if (!ul) {
        ul = document.createElement('ul');
        ul.id = 'listaAmigos';
        document.querySelector('.list-section').appendChild(ul);
    }
    
    ul.innerHTML = '';
    
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remover';
        deleteButton.onclick = () => removerAmigo(index);
        li.appendChild(deleteButton);
        
        ul.appendChild(li);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarListaAmigos();
}

// Função para sortear os amigos
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }
    
    const resultado = [...listaAmigos];
    resultado.sort(() => Math.random() - 0.5);
    
    let ul = document.getElementById('resultado');
    
    // Se o elemento não existir, criá-lo
    if (!ul) {
        ul = document.createElement('ul');
        ul.id = 'resultado';
        document.querySelector('.result-section').appendChild(ul);
    }
    
    ul.innerHTML = '';
    
    resultado.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${amigo} tirou ${resultado[(index + 1) % resultado.length]}`;
        ul.appendChild(li);
    });

    // Limpar a lista de amigos após o sorteio
    listaAmigos = [];
    atualizarListaAmigos();
}

// Adicionando event listeners aos botões
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.input-section button').addEventListener('click', adicionarAmigo);
    document.querySelector('.result-section button').addEventListener('click', sortearAmigo);
});
let amigos = []; // Lista para armazenar os amigos

// Função para atualizar a lista na tela
function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpa a lista

  amigos.forEach((amigo, index) => {
    let item = document.createElement('li');
    item.textContent = amigo;

    // Botão para remover amigo
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remover';
    deleteButton.onclick = () => removerAmigo(index);
    item.appendChild(deleteButton);

    lista.appendChild(item);
  });
}

// Função para adicionar um amigo
function adicionarAmigo() {
  let campo = document.getElementById("amigo");
  let nome = campo.value.trim(); // Remove espaços extras

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  if (amigos.includes(nome)) {
    alert(`O amigo ${nome} já foi adicionado.`);
    campo.value = '';
    campo.focus();
    return;
  }

  amigos.push(nome); // Adiciona o nome ao array
  atualizarLista(); // Atualiza a lista exibida
  campo.value = ""; // Limpa o campo de entrada
  campo.focus();
}

// Função para remover um amigo
function removerAmigo(index) {
  amigos.splice(index, 1);
  atualizarLista();
}

// Função para sortear um amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista está vazia. Adicione amigos antes de sortear.");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let sorteado = amigos[indiceSorteado]; // Escolhe um nome aleatório

  // Limpa a lista de amigos antes de exibir o sorteado
  document.getElementById("listaAmigos").innerHTML = "";

  // Exibe o resultado formatado
  document.getElementById("resultado").innerHTML = `<li><strong>O amigo secreto sorteado é:</strong> ${sorteado} 🎉</li>`;

  // Limpa a lista de amigos
  amigos = [];
}

// Adicionando event listeners aos botões
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.input-section button').addEventListener('click', adicionarAmigo);
  document.querySelector('.result-section button').addEventListener('click', sortearAmigo);
});
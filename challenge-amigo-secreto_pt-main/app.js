var listaAmigosAdicionados = [];

function adicionarAmigo() {
    var inputNome = document.getElementById('amigo');
    var nome = inputNome.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome.');
        return;
    }

    var amigoJaAdicionado = false;
    for (let i = 0; i < listaAmigosAdicionados.length; i++) {
        if (listaAmigosAdicionados[i] === nome) {
            amigoJaAdicionado = true;
            break;
        }
    }

    if (amigoJaAdicionado) {
        alert(nome + ' já está na lista.');
    } else {
        listaAmigosAdicionados.push(nome);
        atualizarListaAmigos();
        inputNome.value = ''; 
    }
}

function atualizarListaAmigos() {
    var lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (var i = 0; i < listaAmigosAdicionados.length; i++) {
        var li = document.createElement('li');
        li.textContent = listaAmigosAdicionados[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (listaAmigosAdicionados.length > 0) {
        var sorteado = listaAmigosAdicionados[Math.floor(Math.random() * listaAmigosAdicionados.length)];
        var li = document.createElement('li');
        li.textContent = 'Amigo sorteado: ' + sorteado;
        resultado.appendChild(li);
    } else {
        alert('A lista de amigos está vazia.');
    }
}

var sorteio;
var chances;
var tentativas = 2;
var numerosJogados = [];

function iniciarJogo() {
    sorteio = Math.floor(Math.random() * 11); // Gera número entre 0 e 10
    chances = 0;
    document.getElementById('mensagem').textContent = '';
    document.getElementById('numeroJogado').value = '';
    numerosJogados = []; // Limpa a lista de números jogados
    document.getElementById('numeroJogado').disabled = false;
    document.getElementById('adivinhar').disabled = false;
}

document.getElementById('formAdivinhacao').addEventListener('submit', function(event) {
    event.preventDefault();
    const numeroJogado = parseInt(document.getElementById('numeroJogado').value);

    if (numerosJogados.includes(numeroJogado)) {
        document.getElementById('mensagem').textContent = 'Você ja escolheu esse número! Escolha outro.';
        return;
    }

    numerosJogados.push(numeroJogado);
    console.log("Array atualizado:", numerosJogados);

    chances++;

    if (numeroJogado === sorteio) {
        document.getElementById('mensagem').textContent = 'Parabéns! Você acertou o número!';
        document.getElementById('numeroJogado').disabled = true;
        document.getElementById('adivinhar').disabled = true;
    } else {
        if (chances < tentativas) {
            document.getElementById('mensagem').textContent = 'Número errado. Tente novamente!';
        } else {
            document.getElementById('mensagem').textContent = 'Número errado. Você esgotou suas tentativas. O número era ' + sorteio;
            document.getElementById('numeroJogado').disabled = true;
            document.getElementById('adivinhar').disabled = true;
        }
    }
});

document.getElementById('reiniciarJogo').addEventListener('click', function() {
    iniciarJogo();
});

iniciarJogo();

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.glow-on-hover1');
    button.classList.add('glow-active');
});

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.glow-on-hover2');
    button.classList.add('glow-active');
});

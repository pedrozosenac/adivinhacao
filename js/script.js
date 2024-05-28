var sorteio;
var chances;
var tentativas = 2;
var numerosJogados = [];

const somErro = new Audio('sounds/erro.mp3');
const somAcerto = new Audio('sounds/acerto.mp3');
const somPerder = new Audio('sounds/perder.mp3');
const somGanhar = new Audio('sounds/ganhar.mp3');

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
    console.log(sorteio);

    if (numerosJogados.includes(numeroJogado)) {
        document.getElementById('mensagem').textContent = 'Você já escolheu esse número! Escolha outro.';
        somErro.play(); // Toca som de erro se número já foi jogado
        return;
    }

    numerosJogados.push(numeroJogado);
    chances++;

    if (numeroJogado === sorteio) {
        document.getElementById('mensagem').textContent = 'Parabéns! Você acertou o número!';
        document.getElementById('numeroJogado').disabled = true;
        document.getElementById('adivinhar').disabled = true;
        somGanhar.play();
    } else {
        if (chances < tentativas) {
            document.getElementById('mensagem').textContent = 'Número errado. Tente novamente!';
            somErro.play();
        } else {
            document.getElementById('mensagem').textContent = 'Número errado. Você esgotou suas tentativas. O número era ' + sorteio;
            document.getElementById('numeroJogado').disabled = true;
            document.getElementById('adivinhar').disabled = true;
            somPerder.play();
        }
    }
});

document.getElementById('reiniciarJogo').addEventListener('click', function() {
    iniciarJogo();
    
});

document.addEventListener('DOMContentLoaded', function() {
    iniciarJogo(); // Inicializa o jogo ao carregar a página

    // Ativa a classe glow nos botões
    var button1 = document.querySelector('.glow-on-hover1');
    var button2 = document.querySelector('.glow-on-hover2');
    button1.classList.add('glow-active');
    button2.classList.add('glow-active');
});

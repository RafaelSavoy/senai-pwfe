let jogadorScore = 0;
let computadorScore = 0;

const escolhaDoJogadorElem = document.getElementById("jogador-escolha");
const escolhaDoComputadorElem = document.getElementById("computador-escolha");
const jogadorScoreElem = document.getElementById("jogador-score");
const computadorScoreElem = document.getElementById("computador-score");
const resultadoElem = document.getElementById("resultado");

const escolhas = ["pedra", "papel", "tesoura"];

document.getElementById("pedra").addEventListener("click", () => playRound("pedra"));
document.getElementById("papel").addEventListener("click", () => playRound("papel"));
document.getElementById("tesoura").addEventListener("click", () => playRound("tesoura"));

function playRound(escolhaDoJogador) {
    const escolhaDoComputador = escolhas[Math.floor(Math.random() * escolhas.length)];

    escolhaDoJogadorElem.textContent = escolhaDoJogador;
    escolhaDoComputadorElem.textContent = escolhaDoComputador;

    const resultado = gerarResultado(escolhaDoJogador, escolhaDoComputador);
    mostrarResultado(resultado);

    if (resultado === "Jogador Ganhou") {
        jogadorScore++;
    } else if (resultado === "Computador Ganhou") {
        computadorScore++;
    }

    updateScore();
    
    setTimeout(resetRound, 3000);
}

function gerarResultado(jogador, computador) {
    if (jogador === computador) {
        return "EMPATE!!!";
    } else if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    ) {
        return "Jogador Ganhou";
    } else {
        return "Computador Ganhou";
    }
}

function mostrarResultado(resultado) {
    resultadoElem.textContent = resultado;
    resultadoElem.classList.remove("hidden");
}

function updateScore() {
    jogadorScoreElem.textContent = jogadorScore;
    computadorScoreElem.textContent = computadorScore;
}

function resetRound() {
    resultadoElem.classList.add("hidden");
    escolhaDoJogadorElem.textContent = "";
    escolhaDoComputadorElem.textContent = "";
}


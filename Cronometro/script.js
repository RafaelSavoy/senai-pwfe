let tempo = 0;
let cronometro;
let rodando = false;

function iniciarCronometro() {
    if (!rodando) {
        rodando = true;
        cronometro = setInterval(function () {
            tempo++;
            atualizarCronometro();
        }, 1000);
    }
}

function pararCronometro() {
    rodando = false;
    clearInterval(cronometro);
}

function zerarCronometro() {
    tempo = 0;
    atualizarCronometro();
}

function atualizarCronometro() {
    const horas = Math.floor(tempo / 3600);
    const minutos = Math.floor((tempo % 3600) / 60);
    const segundos = tempo % 60;
    document.getElementById('cronometro').innerHTML = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

const teclas = document.querySelectorAll('.tecla')

function tocarNota(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const tecla = document.querySelector(`div[data-key="${e.keyCode}"]`)

    tecla.style.boxShadow = 'inset 0 0 10px #000'
    audio.currentTime = 0;
    audio.play();
}

window.addEventListener('keydown', tocarNota)

window.addEventListener('keyup', (e) => {
    const tecla = document.querySelector(`div[data-key="${e.keyCode}"]`)
    tecla.style.backgroundColor = 'white'
    tecla.style.boxShadow = ''
})
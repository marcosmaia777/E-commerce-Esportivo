//Evento Modal
function adicionar () {
    document.getElementById('janela').style.display = 'flex';
}

function cancelar () {
    document.getElementById('janela').style.display = 'none'
}

// scroll backHome
function backHome () {
    window.scroll({
        behavior: "smooth",
        top: 0
    })
}
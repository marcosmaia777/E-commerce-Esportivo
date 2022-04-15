const button = document.getElementById('continue')

button.addEventListener('click', (event) => {
    event.preventDefault()
    let nome = document.getElementById('name')

    if(nome.value == "") {
        nome.classList.add("errorInput")
    }
})
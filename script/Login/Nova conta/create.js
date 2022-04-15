const button = document.getElementById('continue')

button.addEventListener('click', (event) => {
    event.preventDefault()
    let nome = document.getElementById('name')
    let email = document.getElementById('email')
    let password = document.getElementById('password')

    if(nome.value == "") {
        nome.classList.add("errorInput")
    }
    if(email.value == "" || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        email.classList.add("errorInput")
    }
    if(password.value.length <= 5) {
        password.classList.add("errorInput")
    }
})  
const continuar = document.getElementById('continuar')

continuar.addEventListener('click', (event) => {
    event.preventDefault()
    let nome = document.getElementById('name')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let confir = document.getElementById('confirmation')

    if(nome.value == "") {
        nome.classList.add("errorInput")
    }
    if(email.value == "" || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        email.classList.add("errorInput")
    }
    if(password.value.length <= 5) {
        password.classList.add("errorInput")
    }
    if (confir.value === password.value) {
    } else {
        alert("As senhas não coincidem")
    }
})  


function save () {
    let dados = JSON.parse(localStorage.getItem('form') || '[]')
dados.push(
    {
        email: email.value,
        password: password.value,
        confirmation: confirmation.value
    }
)

localStorage.setItem('form' , JSON.stringify(dados))
}

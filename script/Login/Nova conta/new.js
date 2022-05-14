/*const button = document.getElementById('continue')

button.addEventListener('click', (event) => {
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
*/

const button = document.getElementById('continuar')


button.addEventListener('click', (evento) => {
    evento.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmation = document.getElementById('confirmation').value

    console.log(name)
    console.log(email)
    console.log(password)
    console.log(confirmation)

})
// Validação
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

// Create 

const dadosNew = {
    nome: 'Marcos Maia Fidelis',
    email: 'marcosmaiafidelis777@outlook.com',
    senha: '123456',
    confirmaçao: '123456'
}

const createNew  = (newUser) => {
    const DB = JSON.parse(localStorage.getItem('DB'))
    console.log(DB)
    DB.push(newUser)
    localStorage.setItem('DB', JSON.stringify(DB))
}
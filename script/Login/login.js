const button = document.getElementById('continue')

button.addEventListener('click', button => {
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    if (email.value == ""){
        alert("Digite seu email")
    } else{
        
    }
    if (password.value == ""){
        alert("Digite sua senha")
    }  if (email.value !== "@") {
        alert("falta o @")
    } 
    if (email.value !== ".") {
        alert("falta o ponto")
    }
    if (password.value < 6) {
        alert("minimo 6 caracter")
    }
})

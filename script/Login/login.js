const button = document.getElementById('continue')

button.addEventListener('click', button => {
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    if (email.value == ""){
        alert("Digite seu email")
    }
    if (password.value == ""){
        alert("Digite sua senha")
    }
}) 
  

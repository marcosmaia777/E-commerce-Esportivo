const button = document.getElementById('continue')

button.addEventListener('click' , (event) =>{
    event.preventDefault()

    let email = document.getElementById('email')
    let password = document.getElementById('password')

    if (email.value == ""){
        email.classList.add('errorInput')
    }
    if (password.value == ""){
        password.classList.add('errorInput')
    }
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        alert("preenche direto porra")
    } else{
        
    }
})
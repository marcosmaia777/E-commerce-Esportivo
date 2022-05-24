const button = document.getElementById('continue')

button.addEventListener('click' , (event) =>{
    event.preventDefault()

    let email = document.getElementById('email')
    let password = document.getElementById('password')

    if  (email.value == "" || 
        email.value.indexOf("@") == -1 || 
        email.value.indexOf(".") == -1 || 
        password.value.length <= 5) {
            email.classList.add('errorInput')
            password.classList.add('errorInput')
    
    } else {
    email.value = ''
    password.value = ''
    window.location.href = 'file:///C:/Users/marco/OneDrive/%C3%81rea%20de%20Trabalho/Projetos/MMfitness/Home.html'
}})
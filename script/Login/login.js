const button = document.getElementById('continue')

button.addEventListener('click' , (event) =>{
    event.preventDefault()

    let email = document.getElementById('email')
    let password = document.getElementById('password')

    if  (email.value == "" || 
        email.value.indexOf("@") == -1 || 
        email.value.indexOf(".") == -1 || 
        password.value.length <= 5) {
            alert('Preencha os campos')
    
    } else {
    email.value = ''
    password.value = ''
    window.location.href = 'file:///C:/Users/marco/OneDrive/Documentos/Projetos/MMfitness/Home.html'
}})

const newCont = document.getElementById('create')
newCont.addEventListener('click', (event)=> {
    event.preventDefault()
    window.location.href = 'file:///C:/Users/marco/OneDrive/Documentos/Projetos/MMfitness/novaConta.html'
})
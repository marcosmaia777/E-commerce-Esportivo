function cadastrar () {
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let confirmation = document.getElementById('confirmation')

    if  (nome.value == "" ||  
        email.value == "" || 
        email.value.indexOf("@") == -1 || 
        email.value.indexOf(".") == -1 || 
        password.value.length <= 5 ||
        confirmation.value !== password.value ) {
           alert('Preencha os campos')
        
    } else {
        save()
        nome.value = ''
        email.value = ''
        password.value = ''
        confirmation.value = ''
        window.location.href = 'file:///C:/Users/marco/OneDrive/Documentos/Projetos/MMfitness/Login.html'
    }

}
 
function save () {
    let dados = JSON.parse(localStorage.getItem('form') || '[]')
dados.push(
    {
        nome: nome.value,
        email: email.value,
        password: password.value,
        confirmation: confirmation.value
    }
)
localStorage.setItem('form' , JSON.stringify(dados))
}
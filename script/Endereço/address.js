'use strict'

function address () {
    let cep = document.getElementById('cep')
    if (cep.value == '') {
        alert('Insira um CEP válido')
    } else {
        window.location.href = 'file:///C:/Users/marco/OneDrive/Documentos/Projetos/MMfitness/Login.html'
    }
}

const showData = (result) => {
    for(const campo in result){
        if(document.querySelector('#'+campo)){
            document.querySelector('#'+campo).value = result[campo]
        }
    }
}

cep.addEventListener('blur' ,(e)=>{
    let search = cep.value.replace("-" , "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response=>{response.json()
        .then(data => showData(data))
    })
    .catch(e => console.log('Deu erro' + e,message))
})


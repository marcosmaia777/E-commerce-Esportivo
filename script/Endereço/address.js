'use strict'

const cep = document.getElementById('cep')

cep.addEventListener('blur' ,(e)=>{
    let search = cep.value
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response=>{response.json()
        .then(data => console.log(data))
    })
    .catch(e => console.log('Deu erro' + e,message))
    
    
})
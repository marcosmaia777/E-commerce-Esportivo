'use strict'


let preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro
    document.getElementById('bairro').value = endereco.localdiade
    document.getElementById('cidade').value = endereco.uf
    document.getElementById('estado').value = endereco.logradouro
}

const pesquisarCep = async () => {
    let cep = document.getElementById('cep').value
    let url = `http://viacep.com.br/ws/${cep}/json/`;
    
    let dados = await fetch(url);
    let endereco = await dados.json();
    console.log(endereco)
}

document.getElementById('cep')
    .addEventListener('focusout', pesquisarCep)
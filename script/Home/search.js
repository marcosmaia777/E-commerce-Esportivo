document.addEventListener('keypress', function(e){

    if(e.key === '' ) {
        console.log('não tem nada')
    }
    else (e.key === 'Enter') 
        let button = document.getElementById('buscar');
        button.click();
    }
);

/*let button = document.getElementById('buscar')
button.addEventListener('click', function(e){
    e.preventDefault();
    let input = document.getElementById('search')
    let value = input.value
    console.log(value) 
})
*/
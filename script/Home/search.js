document.addEventListener('keypress', function(e){

    if(e.key === 'Enter') {
        let button = document.getElementById('buscar');
        button.click();
    }
})
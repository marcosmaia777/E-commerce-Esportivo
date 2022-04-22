
imgJson.map((item , index)=> {
    let imgJson = document.querySelector('.models .item').cloneNode(true);
    //Informações dos produtos.
    imgJson.setAttribute('data-key' , index)
    imgJson.querySelector('.item--name').innerHTML = item.name
    imgJson.querySelector('.item--desc').innerHTML = item.description
    imgJson.querySelector('.item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    imgJson.querySelector('.item--img  img').src = item.img
    //Modal.
    imgJson.querySelector('a').addEventListener('click' , (e) => {
        e.preventDefault()
        let key = e.target.closest('.item').getAttribute('data-key');
        
       

        

        document.querySelector('.modal').style.opacity = 0
        document.querySelector('.modal').style.display = 'flex';
        setTimeout(() => {
            document.querySelector('.modal').style.opacity = 1
        }, 200)
    });


    document.querySelector('.area').append( imgJson )
})









// scroll backHome
function backHome () {
    window.scroll({
        behavior: "smooth",
        top: 0
    })
}
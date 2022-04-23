imgJson.map((item, index)=> {
    //Preenchimento 
    let Item = document.querySelector('.models .item').cloneNode(true);
    Item.setAttribute('data-key' , index)
    Item.querySelector('.item--name').innerHTML = item.name
    Item.querySelector('.item--desc').innerHTML = item.description
    Item.querySelector('.item--img img').src = item.img
    Item.querySelector('.item--price').innerHTML = `${item.price.toFixed(2)}`
    //Modal
    Item.querySelector('a').addEventListener('click' , (e) => {
        e.preventDefault()
        let key = e.target.closest('.item').getAttribute('data-key');
        document.querySelector('.modal--info h1').innerHTML = imgJson[key].name
        document.querySelector('.modal--desc').innerHTML = imgJson[key].description
        document.querySelector('.modal--big img').src = imgJson[key].img
        document.querySelector('.modal--actualPrice').innerHTML = `R$ ${imgJson[key].price.toFixed(2)}`

        if (item.name === 'Short térmico Nike' || item.name === 'Tênis feminino Nike' || item.name === 'Short Adidas' || item.name === 'Camisa da seleção brasileira' || item.name === 'Básica feminina' ) {
            document.querySelector('.modal--sizes').style.display = 'inline-flex'
        } else {
            document.querySelector('.modal--sizes').style.display = 'none'
        }

        

        document.querySelector('.modal').style.opacity = 0
        document.querySelector('.modal').style.display = 'flex';
        setTimeout(() => {
            document.querySelector('.modal').style.opacity = 1
        }, 200)
    });



    document.querySelector('.area').append( Item )
});









// scroll backHome
function backHome () {
    window.scroll({
        behavior: "smooth",
        top: 0
    })
}
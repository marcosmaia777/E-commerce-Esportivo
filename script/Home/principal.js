imgJson.map((item, index)=> {
    let Item = document.querySelector('.models .item').cloneNode(true);
    Item.setAttribute('data-key' , index)
    Item.querySelector('.item--name').innerHTML = item.name
    Item.querySelector('.item--desc').innerHTML = item.description
    Item.querySelector('.item--img img').src = item.img
    Item.querySelector('.item--price').innerHTML = `${item.price.toFixed(2)}`

    Item.querySelector('a').addEventListener('click' , (e) => {
        e.preventDefault()
        let key = e.target.closest('.item').getAttribute('data-key');
        document.querySelector('.modal--info h1').innerHTML = imgJson[key].name
        document.querySelector('.modal--desc').innerHTML = imgJson[key].description
        document.querySelector('.modal--big img').src = imgJson[key].img
        document.querySelector('.modal--actualPrice').innerHTML = `R$ ${imgJson[key].price.toFixed(2)}`

        

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
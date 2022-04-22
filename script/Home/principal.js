imgJson.map((item , index)=> {
    let imgJson = document.querySelector('.models .item').cloneNode(true);
    
    imgJson.querySelector('.item--name').innerHTML = item.name
    imgJson.querySelector('.item--desc').innerHTML = item.description
    imgJson.querySelector('.item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    imgJson.querySelector('.item--img  img').src = item.img

    document.querySelector('.area').append( imgJson )
})






// scroll backHome
function backHome () {
    window.scroll({
        behavior: "smooth",
        top: 0
    })
}



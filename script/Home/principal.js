let cart = []
let modalQt = 1;
let modalKey = 0;

imgJson.map((item, index)=> {
    //Preenchimento 
    let Item = document.querySelector('.models .item').cloneNode(true);
    Item.setAttribute('data-key' , index)
    Item.querySelector('.item--name').innerHTML = item.name
    Item.querySelector('.item--img img').src = item.img
    Item.querySelector('.item--price').innerHTML = `R$${item.price.toFixed(2)}`
    //Abrir modal
    Item.querySelector('a').addEventListener('click' , (e) => {
        e.preventDefault()

        let key = e.target.closest('.item').getAttribute('data-key');
        modalQt = 1;
        modalKey = key;

        document.querySelector('.modal--info h1').innerHTML = imgJson[key].name
        document.querySelector('.modal--desc').innerHTML = imgJson[key].description
        document.querySelector('.modal--big img').src = imgJson[key].img
        document.querySelector('.modal--actualPrice').innerHTML = `R$ ${imgJson[key].price.toFixed(2)}`
        //Botões de tamanho
        if (item.id2 === 'Variados') {
            document.querySelector('.modal--PMG').style.display = 'none'
            document.querySelector('.modal--sizes').style.display = 'none'
        }if (item.id2 === 'Moda') {
            document.querySelector('.modal--sizes').style.display = 'none'
        }if (item.id2 === 'Calçado') {
            document.querySelector('.modal--PMG').style.display = 'none'
        }

    document.querySelector('.modal').style.opacity = 0
    document.querySelector('.modal').style.display = 'flex';
    setTimeout(() => {
            document.querySelector('.modal').style.opacity = 1
        }, 200)
    });
    document.querySelector('.area').append( Item )
});
    document.querySelector('.modal--qt').innerHTML = modalQt;
//Eventos do modal 
function closeModal() {
    document.querySelector('.modal').style.opacity = '0'
    setTimeout(() => {
        document.querySelector('.modal').style.display = 'none'
    }, 500)
}
// fechar modal ao clicar em cancelar
let fecharModal = document.querySelector('.modal--cancelButton')
    fecharModal.addEventListener('click' , closeModal);
// Adicionar 
document.querySelector('.modal--qtmais').addEventListener('click', () => {
    modalQt++;
    document.querySelector('.modal--qt').innerHTML = modalQt;
})

// Diminuir 
document.querySelector('.modal--qtmenos').addEventListener('click', () => {
    
    if(modalQt > 1) {
        modalQt--;
        document.querySelector('.modal--qt').innerHTML = modalQt;
    } 
})
//Adicionar ao carrinho 
document.querySelector('.modal--addButton').addEventListener('click' , () =>{
  cart.push({
      id: imgJson[modalKey].id,
      qt: modalQt
  });
  updateCart()
  closeModal()
})

function updateCart() {
    if (cart.length > 0) {
        document.querySelector('aside').classList.add('show')
    closeModal()
        for(let i in cart) {
            let item = imgJson.find((item)=>item.id == cart[i].id);
    let cartItem = document.querySelector('.models .cart--item').cloneNode(true);

    cartItem.querySelector('img').src = item.img;
    cartItem.querySelector('.cart--item-name').innerHTML = item.name
    cartItem.querySelector('.cart--item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    cartItem.querySelector('.cart--item--desc').innerHTML = item.description

    document.querySelector('.cart').append(cartItem);
}
    } else {
        document.querySelector('aside').classList.remove('show')
    }
}

let buttonFinish = document.querySelector('.finish');
buttonFinish.addEventListener('click', () => {
    document.querySelector('aside').classList.remove('show')
})

//Imagens na lista MODA
modaJson.map((item, index) => {
    let Moda = document.querySelector('.fashionRow .fashionRow-listArea').cloneNode(true)
    Moda.querySelector('.fashionRow-item img').src = item.img

    document.querySelector('.slider2').append( Moda )
})

//Scroll lista Moda
var overflow = 0


// scroll backHome
function backHome () {
    window.scroll({
        behavior: "smooth",
        top: 0
    })
}

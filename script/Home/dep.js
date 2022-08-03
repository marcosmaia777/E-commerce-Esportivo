

modaJson.map((item, index)=> {
    let Moda = document.querySelector('.modelo-dep .dep-img').cloneNode(true)
    Moda.querySelector('.dep-img img').src = item.img

    Moda.querySelector('.dep-img').addEventListener('click', (e)=> {
        e.preventDefault()
    })
  

      
    
       


    document.querySelector('.area-dep').append( Moda )
})

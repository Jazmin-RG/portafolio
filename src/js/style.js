const lienzo = document.querySelector('body')
console.log(lienzo);

function crearAnimacion(){
    const punto = document.createElement('span')

    /* Tamaño */
    let size = Math.random() * 10;
    punto.style.width =  size + 'px'
    punto.style.height = size + 'px'

    /* Color */
    punto.style.backgroundColor = 'red'

    /* posicion */
    punto.style.left = (Math.random() * lienzo.clientWidth) - size +'px' 
    punto.style.top = (Math.random() * lienzo.clientHeight) + 'px'

    lienzo.appendChild(punto)

    setTimeout(() => {
        punto.remove()
    }, 3000)

}

setInterval(crearAnimacion, 20)

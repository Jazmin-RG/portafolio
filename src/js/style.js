const lienzo = document.querySelector('body')
console.log(lienzo);

function crearAnimacion(){
    const punto = document.createElement('span')

    /* Tamaño */
    let size = Math.random() * 10 + 15;
    punto.style.width =  size + 'px'
    punto.style.height = size + 'px'

    /* Color */
    punto.style.backgroundColor = 'red'
    const colores=["#FFEAAA","#F0D1D9","#D7F0D1","#D4BDE2","#CBE2FF"]
    punto.style.background=colores[Math.floor(Math.random()*5)];

    /* posicion */
    punto.style.left = (Math.random() * lienzo.clientWidth) - size +'px' 
    punto.style.top = (Math.random() * lienzo.clientHeight) + 'px'

    lienzo.appendChild(punto)

    setTimeout(() => {
        punto.remove()
    }, 3000)

}

setInterval(crearAnimacion,30)

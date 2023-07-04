function pulsado(event){
   event.preventDefault()
}


window.onload = function(){
    let boton = document.querySelector('#btnSubmit')
    console.log(boton);
    boton.addEventListener('click',  pulsado)
}
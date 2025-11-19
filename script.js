const boton=document.getElementById ('boton-tema');
const body = document.body;

boton.addEventListener ('click', function(){
    body.classList.toggle('modo-oscuro');
    if (body.classList.contains('modo-oscuro')){
boton.textContent = '☀️ Modo Claro';
    } else {
        boton.textContent = '🌙Modo Oscuro'; 
    }
});
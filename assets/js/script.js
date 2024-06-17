/*function pintar(){
    ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById('ele1')

ele.addEventListener('click', pintar);*/




const ele = document.getElementById('ele1')


function pintar(elemento, color='green') {
    elemento.style.backgroundColor = color;
}
  
  
  ele.addEventListener("click", function(){pintar(ele, 'yellow')} )





/*const ele = document.getElementById('ele1'); 

ele.style.backgroundColor = 'green';
var color = 'yellow';

ele.addEventListener('click', function( e ){
    console.log(color);
    e.target.style.backgroundColor = color;
})*/
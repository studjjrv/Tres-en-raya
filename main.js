//Realizar el juego 3 en raya (la vieja).
var elemento = 'circulo'
var contador = 0
function validar(evento){
    let cuadrado = document.getElementById(evento.id)
    let valor = evento.id   
    contador += 1
      
    if(contador == 9){        
        ganador = ""
        haGanado(ganador)

    }
   if(elemento == "circulo"){
        let img = document.createElement('img')
        img.src= "images/circulo.png"
        cuadrado.style.pointerEvents = "none"
        cuadrado.title = "circulo"
        cuadrado.appendChild(img)
        elemento = "equis"
        comprobar()
    }else if(elemento == "equis"){
        let img = document.createElement('img')
        img.src= "images/equis.png"
        cuadrado.style.pointerEvents = "none"
        cuadrado.title = "equis"
        cuadrado.appendChild(img)
        elemento = "circulo"
        comprobar()
    }   
}

function comprobar(){
    let nodelist = document.querySelectorAll('div')
    let ganador
    if(nodelist[0].title == nodelist[1].title && nodelist[0].title == nodelist[2].title && nodelist[0].title ){
        ganador =  nodelist[0].title
        haGanado(ganador)
    }else if(nodelist[3].title == nodelist[4].title && nodelist[3].title == nodelist[5].title && nodelist[3].title ){
        ganador =  nodelist[3].title
        haGanado(ganador)
    }else if(nodelist[6].title == nodelist[7].title && nodelist[6].title == nodelist[8].title && nodelist[6].title ){
        ganador =  nodelist[6].title
        haGanado(ganador)
    }else if(nodelist[0].title == nodelist[3].title && nodelist[0].title == nodelist[6].title && nodelist[0].title ){
       ganador =  nodelist[0].title
        haGanado(ganador)
    }else if(nodelist[1].title == nodelist[4].title && nodelist[1].title == nodelist[7].title && nodelist[1].title ){
        ganador =  nodelist[1].title
        haGanado(ganador)
    }else if(nodelist[2].title == nodelist[5].title && nodelist[2].title == nodelist[8].title && nodelist[2].title ){
       ganador =  nodelist[2].title
       haGanado(ganador)
    }else if(nodelist[0].title == nodelist[4].title && nodelist[0].title == nodelist[8].title && nodelist[0].title ){
       ganador =  nodelist[0].title
        haGanado(ganador)
    }else if(nodelist[2].title == nodelist[4].title && nodelist[2].title == nodelist[6].title && nodelist[2].title ){
       ganador =  nodelist[2].title
        haGanado(ganador)    
    }
}

function haGanado(ganador){
    let bloquear = document.getElementById('section')
    bloquear.style.pointerEvents = "none" 
    let h2  = document.getElementById('h2')
    if(ganador == "circulo"){
        h2.innerHTML = 'Ha ganado el <input type="image" src="images/circulo.png" class="w-[20px]">'
        botones()
     
    }else if(ganador == "equis"){
        h2.innerHTML = 'Ha ganado la  <input type="image" src="images/equis.png" class="w-[20px]">'
        botones()
      
    }else{
        h2.textContent = 'Nadie gano, vuelve a intentarlo'
        botones()
       
    }
    
}

function reset(){
    window.location.reload()
}



function botones(){

    let reset= document.getElementById('reset')
    
    reset.innerHTML = '<button class="inline-block rounded bg-amber-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]" onclick="reset()">Comenzar</button>'

}


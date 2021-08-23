//Função para scrol suave
function irTopo(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    }
    )
}
//Função para menu mobile
function mudarMenu(){
    let menu = document.querySelector(".lista_menu")
   
    if(menu.style.display == "flex"){
        menu.style.display = "none"
        
    }else{
        menu.style.display = "flex";
       
    }
}




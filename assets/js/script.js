function irTopo(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    }
    )
}
function mudarMenu(){
    let menu = document.querySelector(".lista_menu")
    if(menu.style.display == "flex"){
        menu.style.display = "none"
    }else{
        menu.style.display = "flex";
    }
}
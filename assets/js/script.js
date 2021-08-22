function irTopo(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    }
    )
}
function mudarMenu(){
    let menu = document.querySelector(".lista_menu")
    let banner = document.querySelector('#banner')
    if(menu.style.display == "flex"){
        menu.style.display = "none"
        banner.style.opacity = '100%'
    }else{
        menu.style.display = "flex";
        banner.style.opacity = '5%'
    }
}
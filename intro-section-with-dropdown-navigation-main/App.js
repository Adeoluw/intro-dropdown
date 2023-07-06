const menu = document.getElementsByClassName("menu")[0]

const nav = document.getElementsByClassName("mobile-nav")[0]


const closeMenu = document.getElementsByClassName("close-menu")[0]

menu.addEventListener("click", () =>{
    nav.style.display = "block"
    menu.style.display = "none"
})

closeMenu.addEventListener("click", () =>{
    nav.style.display = "none"
    menu.style.display = "block"
})
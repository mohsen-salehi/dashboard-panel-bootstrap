const menuBtn = document.getElementById("menu-btn")
const closeBtn = document.getElementById("close_btn")
const sidebarElement = document.getElementById("sidebar")
const mainContentElement = document.getElementById("main_content")


menuBtn.addEventListener("click" , () => {
    sidebarElement.classList.toggle("no-active-sidenav")
    mainContentElement.classList.toggle("no-active-content")
})
closeBtn.addEventListener("click" , () => {
    sidebarElement.classList.toggle("no-active-sidenav")
    mainContentElement.classList.toggle("no-active-content")
})
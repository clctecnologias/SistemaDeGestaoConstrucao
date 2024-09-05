const hamb = document.querySelector(".menuHamburguer")
const menu = document.querySelector("header")

hamb.addEventListener("click", () => {
    menu.classList.toggle("active")
})

onload = function() {
    const txt1 = document.getElementById("txt1")
    const txt2 = document.getElementById("txt2")
    const txt3 = document.getElementById("txt3")
    txt1.classList.add("opacity-100")
    txt2.classList.add("opacity-100")
    txt3.classList.add("opacity-100")
}
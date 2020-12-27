document.getElementById("menu").addEventListener("click", () => {
    document.getElementById("nav").classList.toggle("visible")
})

const as = document.querySelectorAll(".container a")
as.forEach(a => {
    a.addEventListener("click", () => {
        document.getElementById("nav").classList.remove("visible")
    })
})
const elementInputKm = document.getElementById("inputKm")
const elementInputAge = document.getElementById("inputAge")
const form = document.querySelector("form")

let valInputKm = 0
let valInputAge = 0

form.addEventListener("submit", (event) => {

    event.preventDefault()
    valInputKm = parseInt(elementInputKm.value)
    valInputAge = parseInt(elementInputAge.value)

})

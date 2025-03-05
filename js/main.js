const elementInputKm = document.getElementById("inputKm")
const elementInputAge = document.getElementById("inputAge")
const form = document.querySelector("form")

const elementKmOutput = document.getElementById("kmOutput")
const elementAgeOutput = document.getElementById("ageOutput")
const elementPriceOutput = document.getElementById("priceOutput")


// submit 
form.addEventListener("submit", (event) => {

    event.preventDefault()
    let valInputKm = parseInt(elementInputKm.value)
    let valInputAge = parseInt(elementInputAge.value)

    const ticketPrice = valInputKm * 0.21
    let Discount = 0


    //     - se minorenne (età < 18)
    if (valInputAge < 18) {
        //         - sconto 20%
        Discount = (ticketPrice * 20) / 100
        //     - se età over 65 (età > 65)  
    } else if (valInputAge > 65) {
        //         - sconto 40%
        Discount = (ticketPrice * 40) / 100
    }
    //     - altrimenti prezzo pieno

    // - il prezzo deve essere printato in forma umana (massimo 2 decimali)
    const finalPrice = (ticketPrice - Discount).toFixed(2)

    elementKmOutput.innerHTML = "km = " + valInputKm
    elementAgeOutput.innerHTML = "età = " + valInputAge
    elementPriceOutput.innerHTML = "prezzo finale = " + finalPrice + " €"
   

})







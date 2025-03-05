const elementInputKm = document.getElementById("inputKm")
const elementInputAge = document.getElementById("inputAge")
const form = document.querySelector("form")





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
    console.log((ticketPrice - Discount).toFixed(2))
})






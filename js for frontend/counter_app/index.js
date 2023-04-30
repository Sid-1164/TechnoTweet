// document.getElementById("count-el").innerText = 0

// let myAge = 20
// let dogAge = 7

// let myAge_inDogyrs = myAge * dogAge

// console.log(myAge_inDogyrs)

// --------------------------------------------------------------------
// for increment function

// function increment() {
//     console.log("button clicked")
// }

// document.getElementById("count-el").innerText = 0

// let myAge = 20
// let dogAge = 7

// let myAge_inDogyrs = myAge * dogAge

// console.log(myAge_inDogyrs)

// --------------------------------------------------------------------

let laps = 0
let countEL = document.getElementById("count-el")  // passing by argument

function cnt() {
    laps = laps + 1
    countEL.innerHTML = laps
}

let print_res = document.getElementById("save-el")

function save() {
    print_res.innerHTML += laps + " - "
    countEL.textContent = 0
    laps = 0
    // laps = 0
    // countEL.innerHTML = laps
}


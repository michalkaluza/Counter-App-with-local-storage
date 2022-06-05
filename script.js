
let value = localStorage.getItem("number")

const counter = () => {
    if (value === null) {
        document.querySelector(".number").innerHTML = 0  
    } else {
        // get the number from lS
        document.querySelector(".number").innerHTML = value
    }  
} 

document.addEventListener("DOMContentLoaded", counter)

// Events on buttons
document.querySelector(".buttons").addEventListener("click", (e) => {
    if (e.target.classList.contains("subtract")) {
        // set new value for number
        localStorage.setItem("number", `${--value}`)
        // insert new value in p
        document.querySelector(".number").innerHTML = localStorage.getItem("number")
    } else if (e.target.classList.contains("add")) {
        localStorage.setItem("number", `${++value}`)
        document.querySelector(".number").innerHTML = localStorage.getItem("number")
    } else if (e.target.classList.contains("resetCount")) {
        value = 0
        localStorage.setItem("number", `${value}`)
        document.querySelector(".number").innerHTML = 0;
    }
})
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
//activating targets
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
//remove targets when link is clicked
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

/* Home page */

const button = document.getElementById('heroButton')

button.addEventListener('mouseover', function() {
    button.style.backgroundColor = 'black'
    button.style.color = 'white'
    button.style.borderStyle = 'solid'
    button.style.borderColor = 'white'
    button.style.fontSize = '2rem'
    button.style.textDecoration = 'underline'
})

button.addEventListener('mouseout', function() {
    button.style.backgroundColor = 'white'
    button.style.color = 'black'
    button.style.borderStyle = 'none'
    button.style.borderColor = 'black'
    button.style.fontSize = '1rem'
    button.style.textDecoration = 'none'
})
console.log('hej')

/* Webstorage form */

/* OBS EJ KLART */

let form = document.querySelector('#form')
let firstName = document.querySelector('#name')
let lastName = document.querySelector('#lastName')
let seats = document.querySelector('#seats')
let date = document.querySelector('#date')
let time = document.querySelector('#time')
let submit = document.querySelector('#submit')
let bookedSection = document.querySelector('.bookedTable')
let bookingText = document.querySelector('#bookingText')

submit.addEventListener("click", function() {
    console.log('hej')
    localStorage.setItem('firstName',firstName.value)
    localStorage.setItem('lastName', lastName.value)
    localStorage.setItem('seats',seats.value)
    localStorage.setItem('date', data.value)
    localStorage.setItem('time', time.value)


   /*  bookingText.innertext = `Välkommen till oss ${firstName.value} ${lastName.value}! Du har ett bord för ${seats.value} ${date} klockan ${time.value}` */
})

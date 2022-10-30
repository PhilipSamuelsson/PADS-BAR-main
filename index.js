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

submit.addEventListener("click", function(event) {
    event.preventDefault()
    console.log('hej')
    localStorage.setItem('firstName',firstName.value)
    localStorage.setItem('lastName', lastName.value)
    localStorage.setItem('seats',seats.value)
    localStorage.setItem('date', date.value)
    localStorage.setItem('time', time.value)
    console.log('hej')
    bookingText.innerHTML = `Välkommen till oss ${firstName.value} ${lastName.value}!<br> Du har ett bord för ${seats.value}<br> datum: ${date.value}<br> klockan: ${time.value}`
})

/* MODAL */
const modalButton = document.querySelector('[data-modal-target]')
const closeButton = document.querySelector('[data-close-button]')
const overlay = document.querySelector('#overlay')

modalButton.addEventListener('click', function() {
const modal = document.querySelector('#modal')
openModal(modal)
})

closeButton.addEventListener('click', function() {
    const modal = document.querySelector('#modal')
    closeModal(modal)
    })

function openModal(modal) {
if (modal == null) return
modal.classList.add('active')
overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    }

    overlay.addEventListener('click', function() {
        closeModal(modal)
    })

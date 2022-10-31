fetch(`https://avancera.app/cities/`)
.then (response => response.json())
.then (data => {
    for(let i = 0; i < 12; i++) {
     document.querySelector(".city1").innerHTML = data[i].name;

        let c = data[i].name;
        data.push(c);

}
console.log(data)

})

/*Formulär recensioner*/
let form2 = document.querySelector("#form2");
let anonym = document.querySelector(".opt");
let sub = document.querySelector(".sub");
let text = document.querySelector(".text");
let yourName = document.querySelector(".your-name");
sub.disabled = true;


anonym.addEventListener('click', () => {
    if (anonym.checked == true) {
        sub.disabled = false;
    } else {
        sub.disabled = true;
    }
})
yourName.addEventListener('keydown', (event) => {
    let key = event.key;
    sub.disabled = true;
    if (yourName.value.length === 1 && key == "Backspace") {
    sub.disabled = true;
   } else {
     sub.disabled = false;
     }})


     form2.addEventListener('submit', (event) => {
        event.preventDefault();
        localStorage.setItem('yourName', yourName.value);
        localStorage.setItem('text', text.value);
     })

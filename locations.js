    /* LOCATIONS */

/*   city1 = document.getElementsByClassName('city1')
      city2 = document.getElementsByClassName('city2')
            city3 = document.getElementsByClassName('city3')
            city4 = document.getElementsByClassName('city4')
            city5 = document.getElementsByClassName('city5')
           city6 = document.getElementsByClassName('city6')

    let getLocations = () => {
        fetch('https://avancera.app/cities/')
        .then (response => response.json())
        .then (data => {
        citiesArray = data
            console.log(citiesArray)
            city1.innerHTML = citiesArray[0].name
            city2.innerHTML = citiesArray[1].name
            city3.innerHTML = citiesArray[2].name
            city4.innerHTML = citiesArray[3].name
            city5.innerHTML = citiesArray[4].name
            city6.innerHTML = citiesArray[5].name
            })
        } */
/* getLocations() */
     console.log("hai")

     fetch(`https://avancera.app/cities/`)
.then (response => response.json())
.then (data => {
    for(let i = 0; i < 3; i++) {
     document.querySelector(".city1").innerHTML = data[2].name;

        let c = data[i].name;
        data.push(c);
        console.log(c)
        console.log(data[0].name)

        document.querySelector(".city1").innerHTML = data[0].name;
        document.querySelector(".city2").innerHTML = data[1].name;
        document.querySelector(".city3").innerHTML = data[2].name;

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

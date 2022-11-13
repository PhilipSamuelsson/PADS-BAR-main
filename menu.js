/* Fetching out the data from non-alcoholic API */

/* let api_url = 'https:/www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
async function getMenu {
    const response = await fetch (api_url);
    const data = await response.json();
    const { strDrink, strDrinkThumb,  } = data.drinks;

    console.log(data)
  document.getElementById('text1').innerHTML = data.drinks[0].strDrink
  document.getElementById('image1').src = data.drinks[0].strDrinkThumb
  document.getElementById('text2').innerHTML = data.drinks[1].strDrink
  document.getElementById('image2').src = data.drinks[1].strDrinkThumb
  document.getElementById('text3').innerHTML = data.drinks[2].strDrink
  document.getElementById('image3').src = data.drinks[2].strDrinkThumb
  document.getElementById('text4').innerHTML = data.drinks[3].strDrink
  document.getElementById('image4').src = data.drinks[3].strDrinkThumb
  document.getElementById('text5').innerHTML = data.drinks[4].strDrink
  document.getElementById('image5').src = data.drinks[4].strDrinkThumb
  document.getElementById('text6').innerHTML = data.drinks[5].strDrink
  document.getElementById('image6').src = data.drinks[5].strDrinkThumb
  document.getElementById('text7').innerHTML = data.drinks[6].strDrink
  document.getElementById('image7').src = data.drinks[6].strDrinkThumb
  document.getElementById('text8').innerHTML = data.drinks[7].strDrink
  document.getElementById('image8').src = data.drinks[7].strDrinkThumb
  document.getElementById('text9').innerHTML = data.drinks[8].strDrink
  document.getElementById('image9').src = data.drinks[8].strDrinkThumb
} */

let menu = document.getElementById('menu')
menu.style.display = "none";

let alcoholic = () => {
    fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .then (response => response.json())
    .then (data => {

            document.querySelector("#text1").innerHTML = data.drinks[2].strDrink;
            document.querySelector("#image1").src = data.drinks[2].strDrinkThumb;
            document.querySelector("#text2").innerHTML = data.drinks[5].strDrink;
            document.querySelector("#image2").src = data.drinks[5].strDrinkThumb;
            document.querySelector("#text3").innerHTML = data.drinks[6].strDrink;
            document.querySelector("#image3").src = data.drinks[6].strDrinkThumb;
            document.querySelector("#text4").innerHTML = data.drinks[8].strDrink;
            document.querySelector("#image4").src = data.drinks[8].strDrinkThumb;
            document.querySelector("#text5").innerHTML = data.drinks[9].strDrink;
            document.querySelector("#image5").src = data.drinks[9].strDrinkThumb;
            document.querySelector("#text6").innerHTML = data.drinks[12].strDrink;
            document.querySelector("#image6").src = data.drinks[12].strDrinkThumb;
            document.querySelector("#text7").innerHTML = data.drinks[13].strDrink;
            document.querySelector("#image7").src = data.drinks[13].strDrinkThumb;
            document.querySelector("#text8").innerHTML = data.drinks[14].strDrink;
            document.querySelector("#image8").src = data.drinks[14].strDrinkThumb;
            document.querySelector("#text9").innerHTML = data.drinks[48].strDrink;
            document.querySelector("#image9").src = data.drinks[48].strDrinkThumb;

        })
    }
    let nonAlcoholic = () => {
        fetch('https:/www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
        .then (response => response.json())
        .then (data => {

            document.querySelector("#text1").innerHTML = data.drinks[2].strDrink;
            document.querySelector("#image1").src = data.drinks[2].strDrinkThumb;
            document.querySelector("#text2").innerHTML = data.drinks[5].strDrink;
            document.querySelector("#image2").src = data.drinks[5].strDrinkThumb;
            document.querySelector("#text3").innerHTML = data.drinks[6].strDrink;
            document.querySelector("#image3").src = data.drinks[6].strDrinkThumb;
            document.querySelector("#text4").innerHTML = data.drinks[8].strDrink;
            document.querySelector("#image4").src = data.drinks[8].strDrinkThumb;
            document.querySelector("#text5").innerHTML = data.drinks[9].strDrink;
            document.querySelector("#image5").src = data.drinks[9].strDrinkThumb;
            document.querySelector("#text6").innerHTML = data.drinks[12].strDrink;
            document.querySelector("#image6").src = data.drinks[12].strDrinkThumb;
            document.querySelector("#text7").innerHTML = data.drinks[13].strDrink;
            document.querySelector("#image7").src = data.drinks[13].strDrinkThumb;
            document.querySelector("#text8").innerHTML = data.drinks[14].strDrink;
            document.querySelector("#image8").src = data.drinks[14].strDrinkThumb;
            document.querySelector("#text9").innerHTML = data.drinks[48].strDrink;
            document.querySelector("#image9").src = data.drinks[48].strDrinkThumb;

            })
        }
    /* alcoholic() */
    let btn1 = document.querySelector("#alcoholic");

    btn1.addEventListener('click', () => {
        let btns = document.querySelector(".sub-hero-text");
        btns.style.height = "30vh";
        menu.style.display = 'grid'
        alcoholic()

    })

    let btn2 = document.querySelector("#non-alcoholic");

    btn2.addEventListener('click', () => {
        let btns = document.querySelector(".sub-hero-text");
        btns.style.height = "30vh";
        menu.style.display = 'grid'
        nonAlcoholic()

    })
/* let button = document.querySelectorAll('button')

button[1].addEventListener('click', function() {
  api_url = 'https:/www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
  getMenu()
})

button[0].addEventListener('click', function() {
  api_url = 'https:/www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
  getMenu()
}) */

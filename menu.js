/* Fetching out the data from non-alcoholic API */



let menu = document.getElementById('menu')
menu.style.display = "none";

let alcoholic = () => {
    fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .then (response => response.json())
    .then (data => {

            document.querySelector("#text1").innerHTML = data.drinks[23].strDrink;
            document.querySelector("#image1").src = data.drinks[23].strDrinkThumb;
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
            document.querySelector("#text8").innerHTML = data.drinks[21].strDrink;
            document.querySelector("#image8").src = data.drinks[35].strDrinkThumb;
            document.querySelector("#text9").innerHTML = data.drinks[36].strDrink;
            document.querySelector("#image9").src = data.drinks[36].strDrinkThumb;

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

    let btn1 = document.querySelector("#alcoholic");
    let btn2 = document.querySelector("#non-alcoholic");

    btn1.addEventListener('click', () => {
        let btns = document.querySelector(".sub-hero-text");
        btns.style.height = "30vh";
        menu.style.display = 'grid'
        alcoholic()
    })

    btn2.addEventListener('click', () => {
        let btns = document.querySelector(".sub-hero-text");
        btns.style.height = "30vh";
        menu.style.display = 'grid'
        nonAlcoholic()
    })

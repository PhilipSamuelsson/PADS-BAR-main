    /* LOCATIONS */

  city1 = document.getElementsByClassName('city1')
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
        }
getLocations()

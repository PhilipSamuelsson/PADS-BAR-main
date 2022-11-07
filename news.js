const upcoming = function() {
fetch('https://avancera.app/cities/')
  .then(response => response.json())
  .then(result => {
    console.log(result)
    let allCells = document.querySelectorAll('.name')
    let allidcells = document.querySelectorAll('.id')
    let allUvCells = document.querySelectorAll('.upvotes')
    for (let i = 0; i < result.length; i++) {
      allCells[i].textContent = result[i].name
    }
    for (let j = 0; j < result.length; j++) {
    allidcells[j].textContent =  result[j].id
}
for (let k = 0; k < result.length; k++) {
    allUvCells[k].textContent = result[k].population
}
  })
}

upcoming()


/* POST, PATCH AND DELETE */

let cityNameInput = document.querySelector('.cityName');
let cityIdInput = document.querySelector('#idInput');
let cityButton = document.querySelector('.submit-city');
let method = document.querySelector('#method')

cityButton.addEventListener('click', function() {
  if (method.value === 'post') {
  fetch('https://avancera.app/cities/', {
    body: JSON.stringify({ name: cityNameInput.value, population: 123 }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
  }
  else if (method.value === 'patch') {
    fetch('https://avancera.app/cities/' + cityIdInput.value, {
      body: JSON.stringify({ name: cityNameInput.value, population: 123 }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PATCH'
    })
  }
  else if (method.value === 'remove') {
    fetch('https://avancera.app/cities/' + cityIdInput.value, {
    method: 'DELETE'
})
  }

  upcoming()


})

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

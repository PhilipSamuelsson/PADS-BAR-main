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
let form2 = document.querySelector(".form2");
let anonym = document.querySelector(".opt");
let post = document.querySelector(".post");
let comment = document.querySelector(".comment");
let yourName = document.querySelector(".your-name");
let comments = document.querySelector("#comments");
post.disabled = true;


anonym.addEventListener('click', () => {
    if (anonym.checked == true) {
        post.disabled = false;
    } else {
        post.disabled = true;
    }
})
yourName.addEventListener('keydown', (event) => {
    let key = event.key;
    post.disabled = true;
    if (yourName.value.length === 1 && key == "Backspace") {
    post.disabled = true;
   } else {
     post.disabled = false;
     }})

/*      comment.addEventListener('keydown', () => {
        if (comment.value.length > 0){
            post.disabled = false
        } else {
            post.disabled = true;
        }
     }) */

      form2.addEventListener('submit', (event) => {
        event.preventDefault();
        let q = localStorage.setItem('yourName', yourName.value);
        let w = localStorage.setItem('comment', comment.value);



        yourName.value = '';
        comment.value = '';
        anonym.checked = false;
        post.disabled = true;

     }
     )

     //getitem här??
    post.addEventListener('click', () => {
        let commentBox = document.querySelector(".comment").value;
        let div = document.createElement("div");
        let text = document.createTextNode(commentBox);
        div.appendChild(text);
        document.querySelector("#comments").appendChild(div);
        div.style.backgroundColor = "grey";
        div.style.height = "15vh";
         div.style.padding = "1rem";
        div.style.margin = "1rem";
        div.style.borderRadius = "10px";
        if (anonym.checked == false) {
            ita = document.querySelector(".your-name").value;
        div.innerHTML = `"${comment.value}"<br>-${ita.italics()}`
        } else {
            div.innerHTML = `"${comment.value}"<br>-Anonym`
    }
    }
    )

    let oldName = localStorage.getItem('yourName', yourName.value);
    let oldComment = localStorage.getItem('comment');
    let lastComment = document.querySelector(".lastComment");
    lastComment.innerHTML = `Senaste kommentaren:<br>"${oldComment}"<br>-${oldName}`;

    if (oldName && oldComment ==! null) {
        comments.style.display = "none";
    } else {
        comments.style.display = "grid";
    }

    //Charts
    fetch('chart.json')
    .then ((response) => response.json())
    .then ((result) => {
        const chart = document.querySelector("#myChart").getContext('2d')

        const data = [];
        const labels = [];

        for(let n = 0; n < result.length; n++){
            const votes = result[n];
            data.push(votes.value);
            labels.push(votes.name)
        }
        console.log('labels', labels)
        const myChart = new Chart(chart, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Votes',
                    data: data,
                    backgroundColor: [
                        'rgba(150, 200, 200, 0.6)',
                        'rgba(150, 200, 200, 0.6)',
                        'rgba(150, 200, 200, 0.6)',
                        'rgba(150, 200, 200, 0.6)',
                        'rgba(150, 200, 200, 0.6)',


                    ],

                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        let sum = data.reduce((a, b) => a + b, 0);
        //antal röster
         let a = data[0];
        let b = data[1];
        let c = data[2];
        let d = data[3];
        let e = data[4];
        console.log(sum)
        let avg = (a*1 + b*2 + c*3 + d*4 + e*5) / sum;
        let avgRounded = Math.round(avg * 10) / 10;
        document.querySelector(".avg").innerHTML = avgRounded + "/5"
    })

    /* LOCATIONS */



     fetch(`https://avancera.app/cities/`)
.then (response => response.json())
.then (data => {
    for(let i = 0; i < 3; i++) {

        let c = data[i].name;
        data.push(c);


        document.querySelector(".city1").innerHTML = data[0].name;
        document.querySelector(".city2").innerHTML = data[1].name;
        document.querySelector(".city3").innerHTML = data[2].name;

}

console.log(data)

})

/*form recensioner*/
let form2 = document.querySelector(".form2");
let anonym = document.querySelector(".opt");
let post = document.querySelector(".post");
let comment = document.querySelector(".comment");
let yourName = document.querySelector(".your-name");
let comments = document.querySelector("#comments");
let lastComment = document.querySelector(".lastComment");

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

      form2.addEventListener('submit', (event) => {
        event.preventDefault();
        localStorage.setItem('yourName', yourName.value);
        localStorage.setItem('comment', comment.value);
        yourName.value = '';
        comment.value = '';
        anonym.checked = false;
        post.disabled = true;
     })

     /*creating new element*/
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
    }})


    /*last comment*/
    let oldName = localStorage.getItem('yourName');
    let oldComment = localStorage.getItem('comment');

    if (anonym.checked == false && oldName !== null) {
    lastComment.innerHTML = `Senaste kommentaren:<br><br> "${oldComment}"<br> -${oldName.italics()}`;

    } else if (anonym.checked == true && oldName !== null) {
        lastComment.innerHTML = `Senaste kommentaren:<br> "${oldComment}"<br> -Anonym`
    } else if (oldName === null) {
        lastComment.style.display = "none"
    }

     /* localStorage.clear(); */



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
                    label: 'Antal röster',
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

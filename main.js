const allCards = [
                    'dA', 'hA', 'cA', 'sA', 
                    'd2', 'h2', 'c2', 's2',
                    'd3', 'h3', 'c3', 's3', 
                    'd4', 'h4', 'c4', 's4', 
                    'd5', 'h5', 'c5', 's5', 
                    'd6', 'h6', 'c6', 's6', 
                    'd7', 'h7', 'c7', 's7', 
                    'd8', 'h8', 'c8', 's8', 
                    'd9', 'h9', 'c9', 's9', 
                    'd10','h10','c10','s10', 
                    'dJ', 'hJ', 'cJ', 'sJ',
                    'dQ', 'hQ', 'cQ', 'sQ', 
                    'dK', 'hK', 'cK', 'sK', 
                 ]

let i = 51;
let pimg1=document.getElementById('pimg1')
let pimg2=document.getElementById('pimg2')
let pimg3=document.getElementById('pimg3')
addEventListener("DOMContentLoaded", generateAndReduce)
// addEventListener("DOMContentLoaded", generateAndReduce2)
// addEventListener("DOMContentLoaded", generateAndReduce3)



function generateAndReduce(){
    let randomNumberGenerate1 = Math.floor(Math.random() * i); 
    let selectedCard1 = allCards[randomNumberGenerate1];
    allCards.splice(randomNumberGenerate1, 1);

    pimg1.src= `img/${selectedCard1}.png`;

    let randomNumberGenerate2 = Math.floor(Math.random() * i); 
    let selectedCard2 = allCards[randomNumberGenerate2];
    allCards.splice(randomNumberGenerate2, 1);

    pimg2.src= `img/${selectedCard2}.png`;
    
    let randomNumberGenerate3 = Math.floor(Math.random() * i); 
    let selectedCard3 = allCards[randomNumberGenerate3];
    allCards.splice(randomNumberGenerate3, 1);

    pimg3.src= `img/${selectedCard3}.png`;
    
    i=i-3
    console.log(allCards);
    console.log(selectedCard1,selectedCard2,selectedCard3);
    console.log(i);
    
    
    
}


//---------------------tommorow work--------------------------------------------------------

function generateAndReduce1(){
    let randomNumberGenerate = Math.floor(Math.random() * i); 
    let selectedCard = allCards[randomNumberGenerate];
    allCards.splice(randomNumberGenerate, 1);

    pimg1.src= `img/${selectedCard}.png`;

    i--;
}

function generateAndReduce2(){
    let randomNumberGenerate = Math.floor(Math.random() * i); 
    let selectedCard = allCards[randomNumberGenerate];
    allCards.splice(randomNumberGenerate, 1);

    pimg2.src= `img/${selectedCard}.png`;
    
    i--;
}

function generateAndReduce3(){
    let randomNumberGenerate = Math.floor(Math.random() * i); 
    let selectedCard = allCards[randomNumberGenerate];
    allCards.splice(randomNumberGenerate, 1);

    pimg3.src= `img/${selectedCard}.png`;
    
    i--;
}




//----------------------DO NOT TOUCH ANYTHING BELOW THIS-----------------------------//

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("inputForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const player1_name = document.getElementById("player1_name").value;
            localStorage.setItem("player1_name", player1_name);
            window.location.href = "page3.html";
        });
    }

    const displayText = document.getElementById("name1");
    if (displayText) {
        const player1_name = localStorage.getItem("player1_name");
        if (player1_name) {
            displayText.textContent = player1_name;
        } else {
            displayText.textContent = "Player 1";
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("inputForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const player2_name = document.getElementById("player2_name").value;
            localStorage.setItem("player2_name", player2_name);
            window.location.href = "page3.html";
        });
    }

    const displayText = document.getElementById("name3");
    if (displayText) {
        const player2_name = localStorage.getItem("player2_name");
        if (player2_name) {
            displayText.textContent = player2_name;
        } else {
            displayText.textContent = "Player 2";
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("inputForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const player3_name = document.getElementById("player3_name").value;
            localStorage.setItem("player3_name", player3_name);
            window.location.href = "page3.html";
        });
    }

    const displayText = document.getElementById("name2");
    if (displayText) {
        const player3_name = localStorage.getItem("player3_name");
        if (player3_name) {
            displayText.textContent = player3_name;
        } else {
            displayText.textContent = "Player 3";
        }
    }
});



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

//----------------------------------------------------------------------------------//


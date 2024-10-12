document.addEventListener("DOMContentLoaded", () => {
    const initalDiv = document.getElementById("initial");
    const informationsDiv = document.getElementById("informations");
    const button = document.getElementById("btn");
    const date = new Date().getHours();

    button.addEventListener("click", () => {
        initalDiv.style.display = "none";
        informationsDiv.style.display = "flex";
    })


    let time = "Boa noite";
    let color = "#8EF9F3";  

    if (date >= 0 && date < 12) {
        time = "Bom dia";
        color = "#FF9F1C";
    } else if (date > 12 && date < 18) {
        time = "Boa tarde";
        color = "#DE6449";
    } 

    const greeting = document.getElementById('greeting');
    greeting.textContent = time;
    greeting.style.color = color;
    greeting.style.textDecoration = "underline";
    greeting.style.textDecorationColor = color;
    greeting.style.textUnderlineOffset = "8px";

});
    

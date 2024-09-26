const headElement = document.createElement("p");
const divElement = document.createElement("div");
const timeElement = document.createElement("span");
const inputElement = document.createElement("input");

const bodyElement = document.getElementById("body");
bodyElement.appendChild(headElement);
headElement.innerHTML = "Time remaining until the Christmas holidays";
bodyElement.appendChild(divElement);
divElement.appendChild(timeElement);

inputElement.setAttribute("type", "date");
inputElement.classList.add("input-size");
bodyElement.appendChild(inputElement);

headElement.classList.add("head");
divElement.classList.add("container");
timeElement.classList.add("time");

let date = new Date(2024, 11, 20, 21, 45);
let countDown = new Date(date).getTime();


let today = new Date();
let y = today.getFullYear();
let m = today.getMonth();
let d = today.getDay();
let todayDate = y + "-" + m + "-" + d
inputElement.setAttribute("min", todayDate);



inputElement.addEventListener("change", function() {
    let selectedDate = inputElement.value;
    if (selectedDate) {
        countDown = new Date(selectedDate).getTime();
        bodyElement.classList.remove("background");
        bodyElement.classList.add("background");

        headElement.innerHTML = "¡¡ Time Remaining !!";
        headElement.classList.add("text-color");
        divElement.classList.remove("green");
        divElement.classList.remove("red");
        divElement.classList.remove("orange");

        start();
    }
});




function start(){
    var count = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDown - now;
            
        var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44));
        var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        timeElement.innerHTML = months + "m " + days + "d " + hours + "h " 
        + minutes + "m " + seconds + "s ";
    
        
        if (days < 7 && months == 0){
            divElement.classList.add("red");
        } else if (days < 14 && months == 0){
            divElement.classList.add("orange");
        } else {
            divElement.classList.add("green");
        }
            
        if (seconds < 0) {
            clearInterval(count);
            timeElement.innerHTML = "Finished counter";
            divElement.classList.remove("green");
            divElement.classList.remove("red");
            divElement.classList.remove("orange");
        }
    }, 1000);
}

start();
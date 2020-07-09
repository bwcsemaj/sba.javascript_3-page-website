class Vacaction {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}

var running = false;
var vacations = new Array();
var randomIntervalId = null;

window.onload = (event) => {
    //Initialize imageElements
    //First get Div holding Images
    let div = document.getElementById("image-container");
    imageElements = div.getElementsByTagName("img");
    for (imageElement of imageElements) {
        vacations.push(new Vacaction(imageElement.name, imageElement.currentSrc));
        imageElement.onclick = (event) => {
            if (running) {
                return;
            }
            running = true;
            console.log(running);
            startRandomSelectionAnimation();
        };
    }
    console.log(vacations);

    //Add Listener to body so that we can start animation by click
    var centerContainer = document.getElementById("center-container");
    console.log(centerContainer);
    centerContainer.onclick = (event) => {
        if (running) {
            return;
        }
        running = true;
        //Make mouse transparent for Center
        let centerContainerElement = document.getElementById("center-container");
        centerContainerElement.style = "pointer-events:none;"
        randomIntervalId = setInterval(randomStep, 500);
    };


};

var previousSelectedImageElement = null;
var centerTopTextElement = null;
var count = 0;
const MAX_RANDOM_COUNT = 10;
//Select Random Element and Change CSS
function randomStep() {

    //Reset Previous
    if(centerTopTextElement != null){
        centerTopTextElement.id = "";
    }

    if (previousSelectedImageElement != null) {
        previousSelectedImageElement.id = "";
    }

    //Pick a random element and change its id so it is glowing
    let randomIndex = getRandomInt(vacations.length);
    let randomVacation = vacations[randomIndex];
    let imageElement = document.getElementsByName(randomVacation.name)[0];
    imageElement.id = "select-image";

    //Update Center Top Text to display the name of vacation;
    centerTopTextElement = document.getElementsByName("center-top")[0];
    centerTopTextElement.textContent = randomVacation.name;

    count++;
    previousSelectedImageElement = imageElement;

    //Stop loop
    if (MAX_RANDOM_COUNT < count) {
        count = 0;
        clearInterval(randomIntervalId);
        running = false;
        centerTopTextElement.id = "center-top";
        let centerContainerElement = document.getElementById("center-container");
        centerContainerElement.style = "pointer-events:all;"
                return;
    }
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


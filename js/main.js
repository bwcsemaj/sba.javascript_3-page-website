class Vacaction {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}

var running = false;
var vacations = new Array();
var intervalId = null;

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
        console.log(running);
        intervalId = setInterval(step, 500);
    };


};

var previousSelectedImageElement = null;
var count = 0;
const MAX_COUNT = 10;
//Select Random Element and Change CSS
function step() {
    console.log("STEP" + count);
    //Reset Previous
    if (previousSelectedImageElement != null) {
        previousSelectedImageElement.id = "";
    }

    //Stop loop
    if (MAX_COUNT < count) {
        count = 0;
        clearInterval(intervalId);
        running = false;
        return;
    }
    console.log("STEP" + count);
    //Pick a random element and change its id so it is glowing
    let randomIndex = getRandomInt(vacations.length);
    let randomVacation = vacations[randomIndex];
    let imageElement = document.getElementsByName(randomVacation.name)[0];
    console.log(imageElement);
    imageElement.id = "select-image";
    console.log("STEP" + count);
    count++;
    previousSelectedImageElement = imageElement;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


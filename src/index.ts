function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const randomNumber: number = getRandomArbitrary(1,90);
const messageToDisplay: string = `Numero Random <br> <span>${randomNumber}</span>`;

// document.write(messageToDisplay);

const datePrint = document.createElement("p");
datePrint.innerHTML = messageToDisplay;

document.getElementById("container").appendChild(datePrint);
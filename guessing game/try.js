
const tryTime = document.querySelector("#time");
const guess = document.querySelector("#gnumber");
const infoField = document.querySelector("#infofield");
const infoField2 = document.querySelector("#infofield2");
console.log("guess element is here", guess);
let howMany;
const randomNumber = Math.floor((Math.random() * 10) + 1);
console.log(randomNumber);
let enteredGuess;
let health;
console.log(enteredGuess);
eventListeners();
function eventListeners() {
    console.log(tryTime);
    howManyEventListener();
    enteredGuessListener();
}

function howManyEventListener() {
    tryTime.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            howMany = Number(tryTime.value);
            console.log("try time is here ", howMany);
            health = howMany;

        }

    })
}

function enteredGuessListener() {
    guess.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            enteredGuess = Number(guess.value);
            console.log(`entered guess is ${enteredGuess}`);
            checkIfTrue();

        }

    })
}

function checkIfTrue() {
    health--;
    if (health > 0) {
        if (enteredGuess < randomNumber) {

            changeInfoField(infoField, "up");

            guess.value = "";
        }
        else if (enteredGuess > randomNumber) {
            changeInfoField(infoField, "down");

            guess.value = "";
        }
        else if (randomNumber === enteredGuess) {

            let count = howMany - health;


            changeInfoField(infoField2, ` well done u found at try ${count}`);
            /*changeInfoField(`u found at ${count}`);*/
            setTimeout(() => {
                location.reload();
            }, 3000);

        }

    } else {
        changeInfoField(infoField2, `Try again the number was ${randomNumber} `);

        setTimeout(() => {
            location.reload();
        }, 3000);
    }
}
function changeInfoField(tag, message) {
    tag.innerHTML = message;

}



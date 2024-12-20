// CONSTS ELEMENTS
const PLAYER_COMBO_VALUE_ELEMENT = document.getElementById("playerCombination");
const BUTTON_PLAY_GAME = document.getElementById("buttonTry");
const PLAYER_CURRENT_COMBO_ELEMENT = document.getElementById("currentCombo");
const COLORS_WELLPLACED_ELEMENT = document.getElementById("rightPlace");
const COLORS_MISSPLACED_ELEMENT = document.getElementById("missplaced");
const COLORS_NOT_IN_COMBO_ELEMENT = document.getElementById("notInCombo");
const COLORS_NOT_ACCEPTED_ELEMENT = document.getElementById("colorsNotInGame");
const ALL_COMBO_TRIED_ELEMENT = document.getElementById("allComboTried");
const GAME_WON_ELEMENT = document.getElementById("gameWon");
const REMAINING_OF_TRIALS_ELEMENT = document.getElementById("numberOfTries");

// CONSTS USED FOR GAME
const COMBINATION_TO_GUESS = ["yellow", "blue"];
const COLORS_ACCEPTED = ["green","red","blue","yellow","pink","purple","orange"];

let comboTried = [];
let numberOfTries = 0;



function areColorsAccepted(COLORS_ACCEPTED, arrayPlayerAnswer) {

    let myArray = [];
    for (let i = 0; i < COLORS_ACCEPTED; i++) {
        if (COLORS_ACCEPTED[i] !== arrayPlayerAnswer[i]) {
            myArray.push(arrayPlayerAnswer[i])
        }
    }
    return myArray
}

function isRightCombination(arrayCombinationToGuess, arrayPlayerAnswer) {

    // let myArray = [];
    // for (let i = 0; i<arrayPlayerAnswer; i++) {
    //     if (arrayPlayerAnswer[i] === arrayCombination) {
    //         myArray.push(arrayPlayerAnswer[i])
    //     }
    // }

    let rightCombination = arrayCombinationToGuess.join(',');
    let playerAnswer = arrayPlayerAnswer.join(',');

    if (rightCombination === playerAnswer) {
        return true
    } else {
        return false
    }
}

function playMastermind() {

    let playerAnswer = PLAYER_COMBO_VALUE_ELEMENT.value;
    let arrayPlayerAnswer = playerAnswer.split(' ');
    comboTried.push(arrayPlayerAnswer);
    let colorsNotInGame = areColorsAccepted(COLORS_ACCEPTED,arrayPlayerAnswer);
    let gameWon = isRightCombination(COMBINATION_TO_GUESS,arrayPlayerAnswer);

    if (gameWon == true) {
        GAME_WON_ELEMENT.innerText = 'Nice, you won !';
    } else {
        numberOfTries++;
        gameOver(numberOfTries);
        console.log(colorsNotInGame)
        displayMastermind(playerAnswer,comboTried,colorsNotInGame);
    }

}

function displayMastermind(playerAnswer,comboTried,colorsNotInGame) {

    PLAYER_CURRENT_COMBO_ELEMENT.innerText = `Current combo : ${playerAnswer}`;
    // COLORS_WELLPLACED_ELEMENT.innerText= ; `Colors wellplaced : ${}`;
    // COLORS_MISSPLACED_ELEMENT.innerText = ; `Colors missplaced : ${}`;
    // COLORS_NOT_IN_COMBO_ELEMENT.innerText = ; `Colors not in combo : ${}`;
    COLORS_NOT_ACCEPTED_ELEMENT.innerText = `Colors not in accepted in game : ${colorsNotInGame}`;
    ALL_COMBO_TRIED_ELEMENT.innerText = `All combo tried : ${comboTried}`;
    REMAINING_OF_TRIALS_ELEMENT.innerText = `Game over when you reach 12 trials : ${numberOfTries}`;
    COLORS_NOT_ACCEPTED_ELEMENT.innerText = `Colors not in accepted in game : ${colorsNotInGame}`;
}

function gameOver(numberOfTries) {
    if (numberOfTries==12) {
        PLAYER_CURRENT_COMBO_ELEMENT.innerText = '';
        COLORS_NOT_ACCEPTED_ELEMENT.innerText = '';
        ALL_COMBO_TRIED_ELEMENT.innerText = '';
        GAME_WON_ELEMENT.innerText = 'Sorry, you loose !';
    }
}








// //Étape 2
// Gardons la même logique mais cette fois-ci nous aurons une combinaison de 4 couleurs 
// différentes et un choix de 8 couleurs possibles.

// Étape 3
// Maintenant, la combinaison à deviner peut avoir plusieurs fois la même couleur.
// Ex : Le code secret : [blue, blue, yellow, green].

// Étape 4
// Désormais, ce n’est plus nous mais l’ordinateur qui va proposer une combinaison à deviner. À vous de trouver comment générer de manière aléatoire ce code.

// Étape 5
// Proposer une interface graphique pour que l’on puisse voir visuellement les couleurs 
// et jouer à votre jeu de manière plus ludique !



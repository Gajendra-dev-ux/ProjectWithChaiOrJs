let randomNumber = parseInt(Math.random()*20 +1);
console.log(randomNumber);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);        
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Enter a valid Number')
    }
    else if(guess < 1){
        alert('Enter a number greater than 1')
    }
    else if(guess > 20){
        alert('Enter a Number less than 20')
    }
    else{
        prevGuess.push(guess)
        displayGuess(guess)
        checkGuess(guess)
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        lowOrHi.innerHTML = `<h2 style="color : green;">You Guessed it Right !</h2>`
        // displayMessage("You Guessed it Right !")
        endgame()
    }
    else if(guess < randomNumber){
        lowOrHi.innerHTML = `<h2 style="color : red;">The Number is TOO low</h2>`
        // displayMessage("The Number is TOO low")
        if(numGuess === 6){
            lowOrHi.innerHTML = `<h2 style = "color : brown;">Game Over! The Number was ${randomNumber}</h2>`
            // displayMessage(`Game Over! The Number was ${randomNumber}`)
            endgame();
        }
    }
    else{
        lowOrHi.innerHTML = `<h2 style = "color : red;">The Number TOO high</h2>`
        // displayMessage('The Number TOO high')
        if(numGuess === 6){
            lowOrHi.innerHTML = `<h2 style = "color : red;">Game Over. The Number was ${randomNumber}</h2>`
            // displayMessage(`Game Over. The Number was ${randomNumber}`)
            endgame();
        }
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${6-numGuess}`
}

// function displayMessage(message){
//     lowOrHi.innerHTML = `<h2>${message}</h2>`
// }

function endgame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newgame"> Start new game</h2>'
    startOver.appendChild(p)
    playGame = false
    newgame()
}

function newgame(){
    const newGameButtoon = document.querySelector('#newgame')
    newGameButtoon.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*10 +1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${6-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    lowOrHi.innerHTML =''
    playGame = true
    })
}
 
/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
//state = game needs to keep track of smth 
//inital state
let currentPlayer = 'X'
let isGameOver = false
let move = 0


/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector('#message')


const sqr0El = document.getElementById('0')
const sqr1El = document.getElementById('1')
const sqr2El = document.getElementById('2')
const sqr3El = document.getElementById('3')
const sqr4El = document.getElementById('4')
const sqr5El = document.getElementById('5')
const sqr6El = document.getElementById('6')
const sqr7El = document.getElementById('7')
const sqr8El = document.getElementById('8')
/*-------------------------------- Functions --------------------------------*/
messageEl.textContent = `It's ${currentPlayer}'s turn`


 




/*----------------------------- Event Listeners -----------------------------*/
sqr0El.addEventListener('click',() => {
    if(isGameOver === false && sqr0El.textContent === ''){
        sqr0El.textContent = currentPlayer
        move++
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`
    }
})
sqr1El.addEventListener('click',() => {
      if(isGameOver === false && sqr1El.textContent === ''){
        sqr1El.textContent = currentPlayer
        move++
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`
    }
})
sqr2El.addEventListener('click',() => {
    if(isGameOver === false && sqr2El.textContent === ''){
        sqr2El.textContent = currentPlayer
        move++
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`
    }
})
sqr3El.addEventListener('click',() => {
    if(isGameOver === false && sqr3El.textContent === ''){
        sqr3El.textContent = currentPlayer
        move++
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`
    }
})
sqr4El.addEventListener('click',() => {
    if(isGameOver === false && sqr4El.textContent === ''){
        sqr4El.textContent = currentPlayer
        move++
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
    }
})
sqr5El.addEventListener('click',() => {
    if(isGameOver === false && sqr5El.textContent === ''){
        sqr5El.textContent = currentPlayer
        move++
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`
    }
})
sqr6El.addEventListener('click',() => {
    if(isGameOver === false && sqr6El.textContent === ''){
        sqr6El.textContent = currentPlayer
        move++
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`
    }
})
sqr7El.addEventListener('click',() => {
    if(isGameOver === false && sqr7El.textContent === ''){
        sqr7El.textContent = currentPlayer
        move++
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`
    }
})
sqr8El.addEventListener('click',() => {
    if(isGameOver === false && sqr8El.textContent === ''){
        sqr8El.textContent = currentPlayer
        move++
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`
    }
})
/*---------------------------- Variables (state) ----------------------------*/
let currentPlayer = 'X' // + O
let moveCount = 0 //max 9
let gameOver = false // + false



/*------------------------ Cached Element References ------------------------*/
//CACHED ELEMENT
const boardEl = document.querySelector('.board') //whole board
const messageEl = document.querySelector('#message') //message h2
const resetBtnEl = document.querySelector('#reset') //reset button
const squareEls = document.querySelectorAll('.sqr') //array of square elements


/*-------------------------------- Functions --------------------------------*/
//FUNC 1 -> HANDLE SWITCHING BETWEEN PLAYER X AND O
const handleSwitching = () => {
    if(currentPlayer === 'X'){
    currentPlayer = 'O'
}else{
    currentPlayer = 'X'
}
}

//FUNC 2 -> HANDLE PLAYER'S TURN MESSAGE
const handleTurnMessage = () => {
    messageEl.textContent = `It is ${currentPlayer}'s turn`
}

//FUNC 3 -> HANDLE WINING GROUPS USING GIVEN COMBINIATIONS
const winningGroups = () => {
//TOP ROW
if(squareEls[0].textContent === currentPlayer && squareEls[1].textContent === currentPlayer && squareEls[2].textContent === currentPlayer){
    gameOver = true
}
//MIDDLE ROW
else if(squareEls[3].textContent === currentPlayer && squareEls[4].textContent === currentPlayer && squareEls[5].textContent === currentPlayer){
 gameOver = true
    
}
//BOTTOM ROW
else if(squareEls[6].textContent === currentPlayer && squareEls[7].textContent === currentPlayer && squareEls[8].textContent === currentPlayer){
 gameOver = true
   
}
//LEFT COLUMN
else if(squareEls[0].textContent === currentPlayer && squareEls[3].textContent === currentPlayer && squareEls[6].textContent === currentPlayer){
 gameOver = true
    
}
//MIDDLE COLUMN
else if(squareEls[1].textContent === currentPlayer && squareEls[4].textContent === currentPlayer && squareEls[7].textContent === currentPlayer){
 gameOver = true
    
}
//RIGHT COLUMN
else if(squareEls[2].textContent === currentPlayer && squareEls[5].textContent === currentPlayer && squareEls[8].textContent === currentPlayer){
 gameOver = true
    
}
//TOP-LEFT TO BOTTOM-RIGHT DIAGONAL
else if(squareEls[0].textContent === currentPlayer && squareEls[4].textContent === currentPlayer && squareEls[8].textContent === currentPlayer){
 gameOver = true
    
}
//TOP-RIGHT TO BOTTOM-LEFT DIAGONAL
else if(squareEls[2].textContent === currentPlayer && squareEls[4].textContent === currentPlayer && squareEls[6].textContent === currentPlayer){
 gameOver = true
    
}
}

//FUNC 4 -> HANDLE MARK
const handleSelection = (event) => {
        //1. Check if event is empty and game is still running "Valid move"
    if(event.target.textContent === '' &&  gameOver === false){
        //2. Place player's mark 
        event.target.textContent = currentPlayer
        //3. Increase move count
        moveCount++
        //4. Check for a winner
        winningGroups()
        if (gameOver === true ){
            messageEl.textContent = `${currentPlayer} is the winner!`
            return //if there is a winner, exit
        }
        //5. Check for a tie
        if (moveCount === 9){
                messageEl.textContent = 'A Tie!'
                gameOver = true
                return //if there is a tie, exit
        }
        //6. Switch players and handle turn message
                handleSwitching()
                handleTurnMessage() 
            }
        }

//FUNC 5 -> HANDLE RESET OF THE GAME
const handleReset = () => {
    //1. Loop through the squares and clear
    squareEls.forEach(elemesquareEl => {
        elemesquareEl.textContent = ''
    });
    //2. Restore player to X
    currentPlayer= 'X'
    //3. Restore count to 0
    moveCount = 0
    //4. restore game state to running
    gameOver = false
    //5. restore turn message 
    handleTurnMessage()

}
//Initial message
handleTurnMessage()

/*----------------------------- Event Listeners -----------------------------*/
//EVENT LISTENER 1 -> WHOLE BOARD
boardEl.addEventListener('click', handleSelection)
//EVENT LISTENER 1 -> RESET BUTTON
resetBtnEl.addEventListener('click',handleReset)








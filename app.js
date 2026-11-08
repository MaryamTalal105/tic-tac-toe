/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
//state = game needs to keep track of smth 
//inital state
let currentPlayer = 'X'


/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector('#message')


/*-------------------------------- Functions --------------------------------*/
messageEl.textContent = `It's ${currentPlayer}'s turn`



/*----------------------------- Event Listeners -----------------------------*/
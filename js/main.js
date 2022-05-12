// Goal: create tic-tac-toe game
// Rules: Two players use X and O to select a cell one at a time, the first to three in a row wins

// identify player 1 as X (clicks first) and player 2 as O (clicks second)
document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', playerMove)
})

// Create a click event listener for each cell that will put a players choice into the cell
// do not allow a cell to be clicked more than once

let isXTurn = true

let c1 = document.getElementById("cell1")
let c2 = document.getElementById("cell2")
let c3 = document.getElementById("cell3")
let c4 = document.getElementById("cell4")
let c5 = document.getElementById("cell5")
let c6 = document.getElementById("cell6")
let c7 = document.getElementById("cell7")
let c8 = document.getElementById("cell8")
let c9 = document.getElementById("cell9")

document.querySelectorAll('.cell').forEach(cell => {
    console.log(cell)
    cell.addEventListener('click', checkWinOrDraw)
})

document.querySelector('.refresh').addEventListener('click', refresh)

function refresh(){
    window.location.reload()
}

function playerMove(e){
    console.log(isXTurn)
    if (e.currentTarget.innerText.length === 1){
        return
    }
    if (isXTurn === true){
        e.currentTarget.innerText = 'x'
    }else if (isXTurn === false){
        e.currentTarget.innerText = 'o'       
    }
    isXTurn = !isXTurn
}

// Create a win event for a player that achieves three in a row

function checkWinOrDraw(){
    let player1Win = false
    let player2Win = false
    let draw = false
    if ((c1.innerText==='x' && c2.innerText==='x' && c3.innerText==='x') || (c4.innerText==='x' && c5.innerText==='x' && c6.innerText==='x') || (c7.innerText==='x' && c8.innerText==='x' && c9.innerText==='x') || (c1.innerText==='x' && c5.innerText==='x' && c9.innerText==='x') || (c3.innerText==='x' && c5.innerText==='x' && c7.innerText==='x') || (c1.innerText==='x' && c4.innerText==='x' && c7.innerText==='x') || (c2.innerText==='x' && c5.innerText==='x' && c8.innerText==='x') || (c3.innerText==='x' && c6.innerText==='x' && c9.innerText==='x')){
        player1Win = true
    }
    else if ((c1.innerText==='o' && c2.innerText==='o' && c3.innerText==='o') || (c4.innerText==='o' && c5.innerText==='o' && c6.innerText==='o') || (c7.innerText==='o' && c8.innerText==='o' && c9.innerText==='o') || (c1.innerText==='o' && c5.innerText==='o' && c9.innerText==='o') || (c3.innerText==='o' && c5.innerText==='o' && c7.innerText==='o') || (c1.innerText==='o' && c4.innerText==='o' && c7.innerText==='o') || (c2.innerText==='o' && c5.innerText==='o' && c8.innerText==='o') || (c3.innerText==='o' && c6.innerText==='o' && c9.innerText==='o')){
        player2Win = true
    } else if (c1.innerText.length===1 && c2.innerText.length===1 && c3.innerText.length===1 && c4.innerText.length===1 && c5.innerText.length===1 && c6.innerText.length===1 && c7.innerText.length===1 && c8.innerText.length===1 && c9.innerText.length===1){
        draw = true
    }

    if (player1Win === true && player2Win === false){
        console.log('Player X Wins!')
    } 
    if (player2Win === true && player1Win === false){
        console.log('Player O Wins!')
    }
    if (player1Win === false && player2Win === false && draw === true){
        console.log('Draw!')
    }
}

// Create a draw event when a board is filled entirely and nobody has three in a row

//function to change the turn
let turn = 'X';
const changeTurn = ()=>{
    return turn === 'X'?"0":'X'
}

//function to check for a win
const checkWin = ()=>{
    
}


//game logic

let boxes = document.querySelectorAll('.box');
let button = document.querySelector('.btn');
Array.from(boxes).forEach((element)=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn = changeTurn();
            // document.getElementsByClassName('info')[0].innerText = 'turn for' + turn
        }
        button.addEventListener('click',()=>{
            boxtext.innerText = '';
        })
    })
})



const userScore = 0 ; 
const computerScore = 0 ; 
const userScore_html = document.getElementById("user-score");
const computerScore_html = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result") ; 
const rock_div = document.getElementById("r") ; 
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s")  ;
function random(){
    const choices=['p' , 'r' , 's'] ; 
    const ranNum = Math.floor(Math.random()*3) ;
    return  choices[ranNum] ; 
}
function game(userChoice){
    const comChoice = random() ; 
    switch(comChoice + userChoice){
        case "rp" :
        case "ps" :
        case "sr" :
            console.log("win!") ; 
            break ; 
        case "rs" :
        case "sp" :
        case "pr" :
            console.log("lose!") ;
            break ; 
        case "rr" :
        case "pp" :
        case "ss" :
            console.log("draw!") ; 
            break ; 
    }    
}
game() ; 


function main(){
    rock_div.addEventListener('click' , function(){
        game("r") ; 
    })
    paper_div.addEventListener('click' , function(){
        game("p") ;  
    })
    scissors_div.addEventListener('click' , function(){
        game("s") ; 
    })
}

main() ;










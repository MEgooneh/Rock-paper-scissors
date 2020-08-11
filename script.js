let userScore = 0 ; 
let computerScore = 0 ; 
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
function win(user , computer) {
    userScore++ ;
    userScore_html.innerHTML = userScore ; 
    switch(user + computer){
        case "pr":
            result_div.innerHTML = "کاغذ ، سنگ رو پوشوند ؛ تو بردی ! 🔥" ;
            break ; 
        case "rs":
             result_div.innerHTML = "سنگ ، قیچی رو شکوند ؛ تو بردی ! 🔥" ;
            break ; 
        case "sp":
            result_div.innerHTML = "قیچی ، کاغذ رو پاره کرد ؛ تو بردی ! 🔥" ;
            break ; 
    }
    document.getElementById(user).classList.add('green-glow'); 
    setTimeout(function(){ document.getElementById(user).classList.remove('green-glow');} , 2000);
    }
function lose(user , computer){
    computerScore++ ; 
    computerScore_html.innerHTML = computerScore ;
    switch(user + computer){
        case "rp":
            result_div.innerHTML = "کاغذ ، سنگ رو پوشوند ؛ تو باختی ! 💀" ;
            break ; 
        case "sr":
             result_div.innerHTML = "سنگ ، قیچی رو شکوند ؛ تو باختی ! 💀" ;
            break ; 
        case "ps":
            result_div.innerHTML = "قیچی ، کاغذ رو پاره کرد ؛ تو باختی ! 💀" ;
            break ; 
    }
    document.getElementById(user).classList.add('red-glow'); 
    setTimeout(function(){ document.getElementById(user).classList.remove('red-glow');} , 2000);
}
function draw(user , computer){
 switch(user + computer){
        case "rr":
            result_div.innerHTML = "سنگ ،به سنگ خورد ؛ مساوی شد !" ;
            break ; 
        case "ss":
              result_div.innerHTML = "قیچی ،به قیچی خورد ؛ مساوی شد !" ;
            break ; 
        case "pp":
             result_div.innerHTML = "کاغذ ،به کاغذ خورد ؛ مساوی شد !" ;
            break ; 
    }
    document.getElementById(user).classList.add('grey-glow'); 
    setTimeout(function(){ document.getElementById(user).classList.remove('grey-glow');} , 2000);
}
function game(userChoice){
    const comChoice = random() ; 
    switch(comChoice + userChoice){
        case "rp" :
        case "ps" :
        case "sr" :
            win(userChoice ,comChoice) ;  
            break ; 
        case "rs" :
        case "sp" :
        case "pr" :
            lose(userChoice ,comChoice) ; 
            break ; 
        case "rr" :
        case "pp" :
        case "ss" :
            draw(userChoice ,comChoice) ; 
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










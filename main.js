let compscore=0;
let userscore=0;
const compscore_span=document.getElementById("computer-score")
const userscore_span=document.getElementById("user-score");
const result_p=document.querySelector(".result >p")
const rock_div=document.querySelector("#r")
const paper_div=document.querySelector("#p")
const scissor_div=document.querySelector("#s")

function getComputerChoise(){
    const choicse=["r","p","s"]
    let computerChoise=Math.floor(Math.random() * 3) ;
    return choicse[computerChoise];
}
function conver(letter){
    if(letter==="r") return "Rock"
    if(letter==="p") return "Paper";
    return "scissor";
       

}
function win(userchoice,computerChoice){
userscore++
userscore_span.innerHTML=userscore;
compscore_span.innerHTML=compscore;
const smallUserWord="user".fontsize(3).sub();
const smallCompWord="comp".fontsize(3).sub();
result_p.innerHTML=`${conver(userchoice)}${smallUserWord} beats ${conver(computerChoice)}${smallCompWord} You win! `
document.getElementById(userchoice).classList.add("green-glow")
setTimeout( function(){document.getElementById(userchoice).classList.remove("green-glow")} ,1000)

}
function lose(userchoice,computerChoice){
    compscore++
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    result_p.innerHTML=`${conver(userchoice)}${smallUserWord} loses to ${conver(computerChoice)}${smallCompWord} You lose! `
    document.getElementById(userchoice).classList.add("red-glow")
setTimeout( function(){document.getElementById(userchoice).classList.remove("red-glow")} ,1000)
}
function draw(userchoice,computerChoice){
 
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    result_p.innerHTML=`${conver(userchoice)}${smallUserWord} equals ${conver(computerChoice)}${smallCompWord} its a draw`;
    document.getElementById(userchoice).classList.add("yelo-glow")
setTimeout( function(){document.getElementById(userchoice).classList.remove("yelo-glow")} ,1000)
}
function game(userchoice){
    const computerChoice=getComputerChoise();
    switch(userchoice+computerChoice) {
        case "rs":
        case "sp":
        case "pr":
        win(userchoice,computerChoice)
        break;
        case "rp":
        case "sr":
        case "ps":
        lose(userchoice,computerChoice)
        break;
        case "rr":
            case "ss":
            case "pp":
            draw(userchoice,computerChoice)
            break;

        
    }
}
function main(){
rock_div.addEventListener("click",function(){
    game("r");
})
paper_div.addEventListener("click",function(){
    game("p");
})
scissor_div.addEventListener("click",function(){
    game("s");
})
}
main();

console.log("heey");
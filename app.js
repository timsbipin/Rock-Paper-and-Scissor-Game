let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const  msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randomIndex=Math.floor(Math.random()*3);
return options[randomIndex];
};
const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw!";
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=` you win!Your choice ${userChoice} beats computer choice ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose!");
        msg.innerText=`You lose!computer choice ${compChoice} beats your choice ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
console.log("user choice=",userChoice);
const compChoice=genCompChoice();
console.log("comp choice=",compChoice);
if(userChoice===compChoice){
    //draw
    drawGame();
}
else{
   let userWin=true;
   if(userChoice==="rock") {
    //scissor,paper
    userWin=compChoice==="paper"?false:true;
   }else if(userChoice==="paper"){ 

   
   //rock,scissor
   userWin=compChoice==="scissor"?false:true;
}
else{
    //rock,paper for computer
   userWin= compChoice==="rock"?false:true;
}
showWinner(userWin,userChoice,compChoice);
}
};
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
playGame(userChoice);
    });
});
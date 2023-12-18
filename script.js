let UserScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const UserScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#comp-score");

const GenCompChoice = ()=>{
    const Option = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return Option[randIdx];
}
const DrawGame = ()=>{
    console.log("Draw Match");
    msg.innerText = "Draw Match! Play Again"
    msg.style.backgroundColor = "#CCDBFD"
    
};
const ShowWin = (UserWin, UserChoice, CompChoice)=>{
    if(UserWin === true){
        UserScore++;
        UserScorePara.innerText = UserScore;
        console.log("User Won !");
        msg.innerText = `You Won! ${UserChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "#80b918"
    }else{
        console.log("you Lose !");
        CompScore++;
        CompScorePara.innerText = CompScore;
        msg.innerText = `You Lose! ${CompChoice} beats ${UserChoice}` ;
        msg.style.backgroundColor = "#d00000";
    }
}

const PlayGame = (UserChoice)=>{
    console.log("User's Choice "+ UserChoice);
    const CompChoice = GenCompChoice();
    console.log("Comp's Choice "+ CompChoice);
    if(UserChoice === CompChoice){
        DrawGame();
    }else{
        let UserWin = true;
        if(UserChoice === "rock"){
            UserWin = CompChoice === "paper" ? false : true;
        }else if(UserChoice === "paper"){
            UserWin = CompChoice === "scissor"? false : true;
        }else{
            UserWin = CompChoice === "rock" ? false : true;
        }
        ShowWin(UserWin, UserChoice, CompChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const UserChoice = choice.getAttribute("id")
        console.log("choice was clicked", UserChoice);
        PlayGame(UserChoice)
    })
})
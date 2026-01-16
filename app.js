let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetGame");
let newGame = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let bgMusic = document.querySelector("#bgMusic");

let turnO = false;

document.addEventListener("click", () => {
    bgMusic.play();
}, { once: true });

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click", (e)=>{
        console.log("box was clicked");
        if(turnO!=true){
            box.innerText = "X";
            turnO = true;
        }
        else{
            box.innerText = "O"
            turnO = false;
        }
        box.disabled = true;
        checkWinner();
        
    });
});

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const resetGame = () =>{
    turnO = false;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const showWinner = (winner) =>{ 
    msg.innerHTML = `Congratulation the winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for (let pattern of winPatterns){
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val !="" && pos2val != ""  && pos3val != "")   {
            if(pos1val === pos2val && pos2val === pos3val){
                console.log(" winner is :", pos1val);
                showWinner(pos1val);
            }
        } 
    
    }
    
};



newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
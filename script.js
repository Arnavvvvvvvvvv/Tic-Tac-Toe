let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset-btn");
let newgamebtn= document.querySelector("#new-btn");
let msgcontainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let Xturn= true;  //X player ki turn (true means X aayega false means O aayega)

const winpattern=[[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

const resetgame= ()=>{
    Xturn=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
const newgame= ()=>{
    Xturn=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

let count=0;

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        count++;
        console.log(count);
        if(Xturn){
            box.classList.remove("colorO");
            box.innerText="X";
            Xturn= false;
        }
        else{
            box.classList.add("colorO");
            box.innerText="O";
            Xturn=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const disableBoxes= ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner= (winner)=>{
    msg.innerText=`Player ${winner} wins`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
    count=0;
}
const showDraw= ()=>{
    msg.innerText=`Its a Draw`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
    count=0;
}


const checkWinner= ()=>{
    for(let pattern of winpattern){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("winner winner chicken dinner for", pos1val);
                showWinner(pos1val);
            }
        }
        if(count==9){
            showDraw();
        }
    }
}

newgamebtn.addEventListener("click", newgame);
resetbtn.addEventListener("click", resetgame);

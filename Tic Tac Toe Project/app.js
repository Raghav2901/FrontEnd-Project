let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');


let turno = true;

const winPatterns = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8]

];

const  resetGame =  () => {
        turno = true;
        enableBoxes();
        msgcontainer.classList.add("hide");

}

boxes.forEach((box) => {
      box.addEventListener("click", () => {
            if (turno) {
                  box.innerText = 'O'
                  box.style.color = 'brown'
                  turno = false;

            } else {
                  box.innerText = 'X'
                  box.style.color = 'black'
                  turno = true;

            }
            box.disabled = true;
            CheckWinner()


      });
});

const disableBoxes = () =>{
       for(box of boxes){
           box.disabled = true;
       }
      
}
const enableBoxes = () =>{
       for(box of boxes){
           box.enabled = true;
           box.innerText = "";
       }
      
}
const showWinner = (winner) => {

         msg.innerText = `Congratulations, Winner is ${winner}`;
         msgcontainer.classList.remove("hide");
         disableBoxes();
}

const CheckWinner = () => {

      for (let pattern of winPatterns) {

            let pos1Val = boxes[pattern[0]].innerText
            let pos2Val = boxes[pattern[1]].innerText
            let pos3Val = boxes[pattern[2]].innerText

            if (pos1Val != " " && pos2Val != "" && pos3Val != "") {

                  if (pos1Val === pos2Val && pos2Val === pos3Val) {
                        showWinner(pos1Val);

                  }

            }
      }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


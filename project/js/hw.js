const emailInput = document.querySelector("#email-input");
const emailCheck = document.querySelector("#email-check");
const emailResult = document.querySelector(".email-result");


const regExp=/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/
  emailCheck.onclick=()=>{
    if(regExp.test(emailInput.value)){
        emailResult.innerHTML='ok'
        emailResult.style.color='green'
    } else{
        emailResult.innerHTML=' not ok'  
        emailResult.style.color='red'
    }
  }


  let smallblock = document.getElementById("smallblock");
let position = 0;
let direction = 1;

function moveBlock() {
    position += direction;
    if (position > 450) {
        direction = -1;
    } else if (position < 0) {
        direction = 1;
    }
    smallblock.style.left = position + "px";
    setTimeout(moveBlock, 10);
}

moveBlock();
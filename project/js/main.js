// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => javaScript.style.color = event.target.innerHTML
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide()

const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 6000)
}
autoSlider()


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
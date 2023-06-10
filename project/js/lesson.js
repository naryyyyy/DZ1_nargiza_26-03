//console.log('hello');
//регулярные выражения
//regular expression
//mdm const string = prompt('name')
//const regExp=/n/g 
//console.log(string.match(regExp));
//const numbers='123123123'
//const regExp= /\w/g
//console.log(numbers.replace(regExp, '*'))


 
//рекурсия
//let num=0
//const count= () =>{
 //   num++
  //  console.log(num);
   // if(num<500){
   //     count()
   // }
//}
//count()

const phoneInput = document.querySelector('#phone-input')
const phoneCheck = document.querySelector('#phone-check')
const phoneResult = document.querySelector('.phone-result')

const regExp=/^\+996 \d{3} \d{2}-\d{2}-\d{2}/

phoneCheck.onclick=()=>{
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML='ok'
        phoneResult.style.color='green'
    }
    else{
        phoneResult.innerHTML=' not ok'
        phoneResult.style.color='red'
    }
}
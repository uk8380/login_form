const myform = document.querySelector('.login-page');
const email=document.querySelector('.email');
const password=document.querySelector('.password');
const msg=document.querySelector('.msg');

myform.addEventListener)('submit',onsubmit)
function onsubmit(e){
    e.preventdefault();
    console.log(email.value,password.value);
    if(email.value==''|| password.value==''){
        msg.classList.add('error');
        msg.innerHTML'plz enter correct details';
        
    }
}
if(password.value.length<4){
    msg.innerHTML'plz enter min. letters';
}
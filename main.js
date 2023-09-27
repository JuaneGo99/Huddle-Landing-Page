let inputEmail = document.getElementById('Email');
let inputButton = document.getElementById('Button');

inputButton.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmail(inputEmail.value);
});

function validateEmail(email){
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if(expReg.test(email) == true){
        inputEmail.style.border = '2px solid #0fc0eb';
        ErroR.style.visibility = 'hidden';
        inputEmail.value = ''; 
    }else{
        inputEmail.style.border = '2px solid hsl(0, 100%, 63%)';
        ErroR.style.visibility = 'visible';
    }
}
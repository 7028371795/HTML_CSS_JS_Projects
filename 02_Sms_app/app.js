let password=document.querySelector('#pass');
let checkbox=document.querySelector('#check');
checkbox.addEventListener('change',()=>{
    let passType=password.getAttribute('type');
    if(passType === 'password')
    {
        password.setAttribute('type','text')
    }
    else
    {
        password.setAttribute('type','password')
    }
})
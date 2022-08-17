document.getElementById('submit').addEventListener('click',function(){
    const emailfield = document.getElementById('email-id');
    const email = emailfield.value;
   
    const passField = document.getElementById('user-pass');
    const pass = passField.value;

    if( email === 'nurulasad030@gmail.com' && pass === 'NurulasaD'){
        window.location.href="bank.html"
    }
    else{
        alert('Invalid input'); 
    }
})
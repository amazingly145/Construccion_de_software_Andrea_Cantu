const password_confirm = document.getElementById('password_confirm');
const password = document.getElementById('password');
const dont_match = document.getElementById('dont_match');
password_confirm.onkeyup = () => {
    if(password_confirm.value != password.value){
        dont_match.style.display = "block";
    } else {
        dont_match.style.display = "none";
    }
}
let message = document.getElementById("message");

function showMessage(){

    let userName = document.getElementById("userName").value;

    message.innerHTML = 'Hello ' + userName + '!';

}

//a keyboard function
function hideKeyboard(){

    let keyboard = document.getElementById("keyboard");

    keyboard.style.display = 'none';

}
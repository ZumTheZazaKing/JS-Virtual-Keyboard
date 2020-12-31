//start of keyboard functions

function backspace(){
    
    var string  = document.getElementById('userName').value;

    document.getElementById('userName').value=string.substring(0,string.length -1);
    
}

function shift(){

    let lowerCase = document.getElementsByClassName('lower');

    let shiftButton = document.getElementsByClassName('shift');

    let unshiftButton = document.getElementsByClassName('unshift');

    shiftButton[0].classList.add('hide')

    unshiftButton[0].classList.remove('hide');

    for(var i=0; i< lowerCase.length; i++){
        lowerCase[i].classList.add('hide');
    }

    let upperCase = document.getElementsByClassName('upper');

    for(var i=0; i< upperCase.length; i++){
        upperCase[i].classList.remove('hide');
    }


}

function unshift(){

    let lowerCase = document.getElementsByClassName('lower');

    let shiftButton = document.getElementsByClassName('shift');

    let unshiftButton = document.getElementsByClassName('unshift');

    shiftButton[0].classList.remove('hide');

    unshiftButton[0].classList.add('hide');

    for(var i=0; i< lowerCase.length; i++){
        lowerCase[i].classList.remove('hide');
    }

    let upperCase = document.getElementsByClassName('upper');

    for(var i=0; i< upperCase.length; i++){
        upperCase[i].classList.add('hide');
    }


}

//end of keyboard functions



function showKeyboard(){

    let keyboard = document.getElementById("keyboard");

    keyboard.style.display = 'block';

}
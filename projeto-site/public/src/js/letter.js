const letter = document.querySelector('#letter').innerHTML;
const letterArray = letter.split('');

var l;

document.getElementById('letter').innerHTML = '';

cont = 0;

const machineLetter = () => {
    if (cont < letterArray.length) {
        writter(cont)
        cont++;

        setTimeout(machineLetter, 50)
    }
}

const writter = (contador) => {
    document.getElementById('letter').innerHTML += letterArray[contador];
}

window.onload = machineLetter;
const display = document.getElementById('value');

let result = '';

function appendToDisplay(input) {
    display.value += input
}


function calculate() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = 'Error'
    }
};


function reset() {
    display.value = ''
}
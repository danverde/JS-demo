/* eslint-env: browser */
/* eslint no-unused-vars: 1, no-console:0*/

var num1 = null,
    keepScreen = true,
    screen;


function getPercent() {
    /* get percent & update screen */
    screen.innerHTML = parseInt(screen.innerHTML) / 100;
}


function changeSign() {
    /* get screen contents & current sign */
    var value = parseInt(screen.innerHTML),
        sign = Math.sign(value);

    /* reverse sign if not 0 */
    if (sign === 0) {
        return;
    } else {
        value *= -1;
    }

    /* update screen */
    screen.innerHTML = value;
}


function operandSelected(operandElement) {
    /* remove existing selected */
    var selected = document.querySelector('.button.selected');
    if (selected) selected.classList.remove('selected');

    /* add selected to new element */
    operandElement.classList.add('selected');

    /* save num1 */
    num1 = parseInt(screen.innerHTML);

    keepScreen = false;
}


function numberSelected(numberElement) {
    /* get new number */
    var numberValue = numberElement.innerHTML;

    /* get screen contents */
    var screen = document.getElementById('screen');
    var screenText = screen.innerHTML;

    /* don't stack 0's */
    if (screenText == '0') {
        if (numberValue == '0') {
            return;
        } else if (numberValue != '.') {
            screenText = '';
        }
    }

    if (keepScreen === true) {
        /* add new item */
        screenText += numberValue;
    } else {
        /* replace existing item */
        screenText = numberValue;
        keepScreen = true;
    }

    /* output to screen */
    screen.innerHTML = screenText;
}


function cancelEntry() {
    screen.innerHTML = '0';
}


function allClear() {
    cancelEntry();
    num1 = null;
    keepScreen = true;

    /* deselect operand */
    var selected = document.querySelector('.button.selected');
    if (selected) selected.classList.remove('selected');
}


function caclulate() {
    /* get operand */
    var operand = document.querySelector('.operand.selected').innerHTML,
        num2 = parseInt(screen.innerHTML);

    /* do math */
    if (operand === '*') {
        num1 *= num2;
    } else if (operand === '/') {
        num1 /= num2;
    } else if (operand === '-') {
        num1 -= num2;
    } else if (operand === '+') {
        num1 += num2;
    } else {
        return;
    }

    /* display results */
    screen.innerHTML = num1;
    keepScreen = false;
}

document.addEventListener('DOMContentLoaded', () => {
    screen = document.getElementById('screen');
});
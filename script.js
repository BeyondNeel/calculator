let string = "";
let buttons = document.querySelectorAll('.button');
let memoryValue = 0;
let currentOperation = "";
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            // Evaluate the expression
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'C') {
            // Clear the input string
            string = "";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'M+') {
            // Store the current value in memory and clear the input string
            memoryValue += parseFloat(string);
            string = "";
            document.querySelector('input').value = string;
            currentOperation = "M+";
        } else if (e.target.innerHTML == 'M-') {
            // Subtract the current value from memory and clear the input string
            memoryValue -= parseFloat(string);
            string = "";
            document.querySelector('input').value = string;
            currentOperation = "M-";
        } else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
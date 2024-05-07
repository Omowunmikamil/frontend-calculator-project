const output = document.getElementById('output');

function appendToOutput(input) {
    output.value += input;
}

function calculate() {
    try {
        output.value = eval(output.value);
    }
    catch (error) {
        output.value = 'Error';
    }
}
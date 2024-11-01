   // Get the display element
const display = document.getElementById('result');

// Function to append a value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to evaluate the expression and display the result
function calculate() {
    try {
        // Evaluate the expression and limit the result to 15 digits to prevent overflow
        display.value = eval(display.value).toFixed(15).replace(/\.?0+$/, "");
    } catch {
        display.value = 'Error';
    }
}

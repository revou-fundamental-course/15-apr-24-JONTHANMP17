document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateConversion();
});

document.getElementById('reverseBtn').addEventListener('click', function() {
    let tempUnit = document.getElementById('tempUnit').value;
    document.getElementById('tempUnit').value = (tempUnit === 'celsius') ? 'fahrenheit' : 'celsius';
    calculateConversion();
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('tempInput').value = '';
    document.getElementById('result').innerHTML = '';
});

function calculateConversion() {
    let tempInput = parseFloat(document.getElementById('tempInput').value);
    let tempUnit = document.getElementById('tempUnit').value;
    let result;
    let formula;

    if (tempUnit === 'celsius') {
        result = (tempInput * 9/5) + 32;
        formula = `${tempInput} Celsius * 9/5 + 32`;
        document.getElementById('result').innerHTML = `${tempInput} Celsius is equal to ${result.toFixed(2)} Fahrenheit.<br> Formula: ${formula}`;
    } else {
        result = (tempInput - 32) * 5/9;
        formula = `(${tempInput} Fahrenheit - 32) * 5/9`;
        document.getElementById('result').innerHTML = `${tempInput} Fahrenheit is equal to ${result.toFixed(2)} Celsius.<br> Formula: ${formula}`;
    }
}

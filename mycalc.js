function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementBlyId('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
let color;
if(mode==="dark-mode"){
    color="balck";


}
else{
    color="white";
}
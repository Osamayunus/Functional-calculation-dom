function textValue(textId) {
    const textField = document.getElementById(textId);
    const textValueString = textField.innerText;
    const textValue = parseInt(textValueString);
    return textValue;
}
function inputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValueNumber = parseInt(inputValueString);
    return inputValueNumber;
}

function add(value1, value2) {
    const value = value1;
    const total = value + value2;
    return total;
}
function minus(inputValue, value1) {
    const value = value1;
    const total = inputValue - value;
    return total;
}

function replacingInputValue(replacingId, value) {
    const replacingField = document.getElementById(replacingId);
    replacingField.value = value;
}
function replacingTextValue(replacingId, value) {
    const replacingField = document.getElementById(replacingId);
    replacingField.innerText = value;
}

function taxMultiple(subTotalValue) {
    const tax = subTotalValue * 0.1;
    return tax;
}

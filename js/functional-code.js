const inputPhoneQuantity = 1;
const phonePrice = 1219;
const coverPhonePrice = 59;
const fieldSubTotal = textValue('sub-total-price');
// phone-button
document.getElementById('plus-phone-btn').addEventListener('click', function () {
    const inputPhoneValue = inputValue('phone-quantity');
    const coverPrice = textValue('cover-price');
    const perPhonePrice = textValue('phone-price');
    const innerTextValuePhonePrice = add(phonePrice, perPhonePrice);
    const inputPhoneNewQuantity = add(inputPhoneQuantity, inputPhoneValue);
    const subTotal = add(coverPrice, innerTextValuePhonePrice);

    const totalTaxString = taxMultiple(subTotal).toFixed(2);
    const totalTax = parseFloat(totalTaxString);
    replacingTextValue('tax', totalTax);
    const total = add(subTotal, totalTax);
    replacingTextValue('total', total);

    replacingInputValue('phone-quantity', inputPhoneNewQuantity);
    replacingTextValue('phone-price', innerTextValuePhonePrice);
    replacingTextValue('sub-total-price', subTotal);
})
document.getElementById('minus-phone-btn').addEventListener('click', function () {
    const inputPhoneValue = inputValue('phone-quantity');
    const coverPrice = textValue('cover-price');
    const perPhonePrice = textValue('phone-price');
    const inputMinus = minus(inputPhoneValue, inputPhoneQuantity);
    if (inputPhoneValue > 1) {
        replacingInputValue('phone-quantity', inputMinus);
        const textValuePhone = minus(perPhonePrice, phonePrice);
        replacingTextValue('phone-price', textValuePhone);
        const subTotal1 = add(coverPrice, textValuePhone);
        replacingTextValue('sub-total-price', subTotal1);

        const totalTaxString = taxMultiple(subTotal1).toFixed(2);
        const totalTax = parseFloat(totalTaxString);
        replacingTextValue('tax', totalTax);
        const total = add(subTotal1, totalTax);
        replacingTextValue('total', total);
    }
    else {
        alert('must buy a phone!')
    }

})
// cover part
document.getElementById('plus-phone-btn-2').addEventListener('click', function () {
    const perPhonePrice = textValue('phone-price');
    const inputPhoneCoverValue = inputValue('cover-quantity');
    const coverPerPrice = textValue('cover-price');
    const innerTextCoverPrice = add(coverPerPrice, coverPhonePrice);
    replacingTextValue('cover-price', innerTextCoverPrice);
    const inputCoverQuantity = add(inputPhoneCoverValue, inputPhoneQuantity);
    replacingInputValue('cover-quantity', inputCoverQuantity);
    const currentSubTotal = coverPerPrice + 59;
    const subTotal = add(perPhonePrice, currentSubTotal);
    replacingTextValue('sub-total-price', subTotal);

    const totalTaxString = taxMultiple(subTotal).toFixed(2);
    const totalTax = parseFloat(totalTaxString);
    replacingTextValue('tax', totalTax);
    const total = add(subTotal, totalTax);
    replacingTextValue('total', total);
})
document.getElementById('minus-phone-btn-2').addEventListener('click', function () {
    const perPhonePrice = textValue('phone-price');
    const inputPhoneCoverValue = inputValue('cover-quantity');
    const coverPerPrice = textValue('cover-price');
    const inputMinus = minus(inputPhoneCoverValue, inputPhoneQuantity);
    if (inputPhoneCoverValue > 1) {
        replacingInputValue('cover-quantity', inputMinus);
        const textValuePhoneCover = minus(coverPerPrice, coverPhonePrice);
        replacingTextValue('cover-price', textValuePhoneCover);
        const currentSubTotal = coverPerPrice - 59;
        const subTotal = add(perPhonePrice, currentSubTotal);
        replacingTextValue('sub-total-price', subTotal);


        const totalTaxString = taxMultiple(subTotal).toFixed(2);
        const totalTax = parseFloat(totalTaxString);
        replacingTextValue('tax', totalTax);
        const total = add(subTotal, totalTax);
        replacingTextValue('total', total);
    }
    else {
        alert('must buy a phone!')
    }

})
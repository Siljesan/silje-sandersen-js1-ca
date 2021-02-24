const btn = document.querySelector('#submit');
const nameError = document.querySelector('.nameError');
const subjectError = document.querySelector('.subjectError');
const emailError = document.querySelector('.emailError');
const addressError = document.querySelector('.addressError');

btn.onclick = function (event) {
    event.preventDefault();
    const fullName = document.getElementById('name').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();

    if (testLength(fullName, 1)) {
        nameError.classList.add('hide');
        nameError.classList.remove('show');
    } else {
        nameError.classList.add('show');
        nameError.classList.remove('hide');
    }
    if (testLength(subject, 10)) {
        subjectError.classList.add('hide');
        subjectError.classList.remove('show');
    } else {
        subjectError.classList.add('show');
        subjectError.classList.remove('hide');
    }
    if (validateEmail(email)) {
        emailError.classList.add('hide');
        emailError.classList.remove('show');
    } else {
        emailError.classList.add('show');
        emailError.classList.remove('hide');
    }
    if (testLength(address, 25)) {
        addressError.classList.add('hide');
        addressError.classList.remove('show');
    } else {
        addressError.classList.add('show');
        addressError.classList.remove('hide');
    }

    function testLength(element, length) {
        if (element.length > length) {
            return true;
        } else {
            return false;
        };
    };
    function validateEmail(emailVal) {
        const expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-])/;
        const isValid = expression.test(emailVal);
        return isValid;
    };
};
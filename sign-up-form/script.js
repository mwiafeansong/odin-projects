const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const passRequirement = document.querySelector('#pass-requirement');
const submitBtn = document.querySelector('#submit');

function checkPassword() {
    if (password.value != confirmPassword.value) {
        passRequirement.textContent = '*Passwords do not match';
        passRequirement.style.color = 'red';
        password.style.border = '1px solid red';
        confirmPassword.style.border = '1px solid red';
        submitBtn.disabled = true;
    } else {
        passRequirement.textContent = '';
        password.style.border = '1px solid blue';
        confirmPassword.style.border = '1px solid blue';
        submitBtn.disabled = false;
    }
}

confirmPassword.addEventListener('keyup', checkPassword)
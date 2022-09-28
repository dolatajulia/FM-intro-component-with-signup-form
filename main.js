const form = document.getElementById('form');
const email = document.getElementById('email');
const name = document.getElementById('name');
const lastName = document.getElementById('last-name');
const password = document.getElementById('password');
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener('submit', (e) => {

    let isThereAnError = false;

    if(name.value == ''|| name.value == null){
        isThereAnError = true;
        document.getElementById('error-icon-name').style.display = 'block';
        document.getElementById('error-message-name').style.display = 'block';
        document.getElementById('name').style.border = 'solid 1px var(--bg-col)';
        document.getElementById('name').style.color = 'var(--bg-col)';
        document.getElementById('btn').style.backgroundColor = 'var(--accent-col-green)';
    }

    if(name.value != '' && name.value != null){
        document.getElementById('error-icon-name').style.display = 'none';
        document.getElementById('error-message-name').style.display = 'none';
        document.getElementById('name').style.border = 'solid 1px var(--fc-light)';
        document.getElementById('name').style.color = 'var(--fc-dark)';
    }

    if(lastName.value == ''|| lastName.value == null){
        isThereAnError = true;
        document.getElementById('error-icon-last-name').style.display = 'block';
        document.getElementById('error-message-last-name').style.display = 'block';
        document.getElementById('last-name').style.border = 'solid 1px var(--bg-col)';
        document.getElementById('last-name').style.color = 'var(--bg-col)';
        document.getElementById('btn').style.backgroundColor = 'var(--accent-col-green)';
    }

    if(lastName.value != '' && lastName.value != null){
        document.getElementById('error-icon-last-name').style.display = 'none';
        document.getElementById('error-message-last-name').style.display = 'none';
        document.getElementById('last-name').style.border = 'solid 1px var(--fc-light)';
        document.getElementById('last-name').style.color = 'var(--fc-dark)';
    }

    if(email.value == ''|| email.value == null || !email.value.match(emailPattern)){
        isThereAnError = true;
        document.getElementById('error-icon-email').style.display = 'block';
        document.getElementById('error-message-email').style.display = 'block';
        document.getElementById('email').style.border = 'solid 1px var(--bg-col)';
        document.getElementById('email').style.color = 'var(--bg-col)';
        document.getElementById('btn').style.backgroundColor = 'var(--accent-col-green)';
    }

    if(email.value != '' && email.value != null && email.value.match(emailPattern)){
        document.getElementById('error-icon-email').style.display = 'none';
        document.getElementById('error-message-email').style.display = 'none';
        document.getElementById('email').style.border = 'solid 1px var(--fc-light)';
        document.getElementById('email').style.color = 'var(--fc-dark)';
    }

    if(password.value == ''|| password.value == null){
        isThereAnError = true;
        document.getElementById('error-icon-password').style.display = 'block';
        document.getElementById('error-message-password').style.display = 'block';
        document.getElementById('password').style.border = 'solid 1px var(--bg-col)';
        document.getElementById('password').style.color = 'var(--bg-col)';
        document.getElementById('btn').style.backgroundColor = 'var(--accent-col-green)';
    }

    if(password.value != '' && password.value != null){
        document.getElementById('error-icon-password').style.display = 'none';
        document.getElementById('error-message-password').style.display = 'none';
        document.getElementById('password').style.border = 'solid 1px var(--fc-light)';
        document.getElementById('password').style.color = 'var(--fc-dark)';
    }

    if (isThereAnError){
        e.preventDefault()
    }
})


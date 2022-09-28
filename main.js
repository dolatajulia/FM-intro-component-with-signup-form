const form = document.getElementById('form');
const email = document.getElementById('email');
const name = document.getElementById('name');
const lastName = document.getElementById('last-name');
const password = document.getElementById('password');

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

    if(lastName.value == ''|| lastName.value == null){
        isThereAnError = true;
        document.getElementById('error-icon-last-name').style.display = 'block';
        document.getElementById('error-message-last-name').style.display = 'block';
        document.getElementById('last-name').style.border = 'solid 1px var(--bg-col)';
        document.getElementById('last-name').style.color = 'var(--bg-col)';
        document.getElementById('btn').style.backgroundColor = 'var(--accent-col-green)';
    }

    if(email.value == ''|| email.value == null){
        isThereAnError = true;
        document.getElementById('error-icon-email').style.display = 'block';
        document.getElementById('error-message-email').style.display = 'block';
        document.getElementById('email').style.border = 'solid 1px var(--bg-col)';
        document.getElementById('email').style.color = 'var(--bg-col)';
        document.getElementById('btn').style.backgroundColor = 'var(--accent-col-green)';
    }

    if(password.value == ''|| password.value == null){
        isThereAnError = true;
        document.getElementById('error-icon-password').style.display = 'block';
        document.getElementById('error-message-password').style.display = 'block';
        document.getElementById('password').style.border = 'solid 1px var(--bg-col)';
        document.getElementById('password').style.color = 'var(--bg-col)';
        document.getElementById('btn').style.backgroundColor = 'var(--accent-col-green)';
    }

    if (isThereAnError){
        e.preventDefault()
    }
})


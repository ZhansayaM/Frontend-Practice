window.onload = () => {
    var onlyInt = document.getElementById('name');
    onlyInt.onkeypress = () => {
        var letters = parseInt(event.key);
        if (!isNaN(letters)) {
            event.preventDefault();
        }
    }

    var user = document.getElementById('username');
    user.onkeypress = () => {
        var symbols = event.key;
        if (symbols === ',' || symbols === '.') {
            event.preventDefault();
        }
    }

    var check = document.getElementById('term');
    check.onchange = () => {
        if (check.checked === true) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    }

    var submit = document.getElementById('submit');
    submit.onclick = () => {
        if (document.forms['form']['name'].value === '') {
            alert('Заполните поле Full Name');
        } else if (document.forms['form']['username'].value === '') {
            alert('Заполните поле Your username');
        } else if (document.forms['form']['email'].value === '') {
            alert('Заполните поле E-mail');
        } else if (document.forms['form']['password'].value === '') {
            alert('Заполните поле Password');
        } else if (document.forms['form']['repeat-password'].value === '') {
            alert('Заполните поле Repeat Password');
        } else if (document.getElementById('repeat').value !== document.getElementById('password').value) {
            alert('Пароли не совпадают');
        } else if (document.getElementById('term').checked !== true) {
            alert('Agree to our Terms of Service and Privacy Statement');
        } else alert('OKAY');
    }

    var ask = document.getElementById('query');
    ask.onclick = () => {
        document.getElementById('title').innerText = 'Log in to the system';
        var forms = document.getElementById('form');
        forms.removeChild(document.getElementById('in-name'));
        forms.removeChild(document.getElementById('in-email'));
        forms.removeChild(document.getElementById('in-repeat'));
        forms.removeChild(document.getElementById('terms'));
        document.getElementById('submit').value = 'Sign In';
        forms.removeChild(document.getElementById('ask-query'));
    }

    document.getElementById('submit').onsubmit = (event) => {
        event.preventDefault();
        console.log('prevented');
    }
}
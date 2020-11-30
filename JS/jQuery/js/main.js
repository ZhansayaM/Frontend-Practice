$(document).ready(function () {
    //var onlyInt = $('#name');
    $('#name').keypress ((event) => {
        var letters = parseInt(event.key);
        if (!isNaN(letters)) {
            event.preventDefault();
        }
    });

    var user = $('#username');
    user.keypress ((event) => {
        var symbols = event.key;
        if (symbols === ',' || symbols === '.') {
            event.preventDefault();
        }
    });

    var check = $('#term');
    check.change (() => {
        if (check.attr('checked') === true) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    });

    var submit = $('#submit');
    submit.click(() => {
        if ($('#in-name').val() === '') {
            alert('Заполните поле Full Name');
        } else if ($('#in-username').val() === '') {
            alert('Заполните поле Your username');
        } else if ($('in-email').val() === '') {
            alert('Заполните поле E-mail');
        } else if ($('in-password').val() === '') {
            alert('Заполните поле Password');
        } else if ($('in-repeat').val() === '') {
            alert('Заполните поле Repeat Password');
        } else if ($('#repeat').val() !== $('#password').val()) {
            alert('Пароли не совпадают');
        } else if ($('#term').attr('checked') !== true) {
            alert('Agree to our Terms of Service and Privacy Statement');
        } else alert('OKAY');
    });

    //var ask = $('#query');
    $('#query').click (() => {
        $('#title').text('Log in to the system');
        $('#in-name').remove();
        $('#in-email').remove();
        $('#in-repeat').remove();
        $('#terms').remove();
        submit.val('Sign In');
        $('#ask-query').remove();
    });

    submit.submit ((event) => {
        event.preventDefault();
        console.log('prevented');
    });
});
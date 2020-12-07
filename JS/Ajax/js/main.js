$(document).ready(function () {
    let loader = $('#loader');

    $('#submit').click(function () {
        $('.error').hide();
        let name = $('#name');
        let address = $('#address');
        let phone = $('#phone');
        let hasError = false;
        name.css('border-color', 'rgb(185, 145, 80)');
        address.css('border-color', 'rgb(185, 145, 80)');
        phone.css('border-color', 'rgb(185, 145, 80)');


        if (!name.val()) {
            name.css('border-color', 'red');
            name.siblings('.error').show();
            hasError = true;
        }
        if (!address.val()) {
            address.css('border-color', 'red');
            address.siblings('.error').show();
            hasError = true;
        }
        if (!phone.val()) {
            phone.css('border-color', 'red');
            phone.siblings('.error').show();
            hasError = true;
        }

        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: 'https://itlogia.ru/test/checkout',
                data: {name: name.val(), address: address.val(), phone: phone.val()}
            })
                .done(function (message) {
                    console.log(message);
                    loader.hide();
                    if (message.success) {
                        let form = $('#order-form');
                        let width = form.css('width');
                        let height = form.css('height');
                        let msg = '<div id="success">Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!</div>';
                        form.hide();
                        $('#form').append(msg)
                        $('#success').css('width', width).css('height', height).css('font-size', '36px').css('color', 'rgb(128,101,56)').css('padding', '10px').css('display', 'flex').css('align-items', 'center').css('justify-content', 'center').css('text-align', 'center');

                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    }
                })
        }


    })

})
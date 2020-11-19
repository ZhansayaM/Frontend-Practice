let client = {};
client.name = prompt('ФИО');
client.date = new Date(prompt('Дата рождения в формате мм.дд.гггг'));
client.phone = prompt('Телефон');
client.email = prompt('Электронная почта');
client.country = prompt('Страна');
client.city = prompt('Город');

if (confirm('Применить скидку?')){
    client.discount = parseInt(prompt('Amount'));
}

let showClient = (object) => {
    console.log(object.name);
    console.log(object.date);
    console.log(object.phone);
    console.log(object.email);
    console.log(object.country);
    console.log(object.city);
    if (object.discount)
        console.log(object.discount);
}

setTimeout(function() {showClient(client)}, 2000);

try{
    showClient();
} catch(e){
    console.log('Вызвана функция без параметров');
    console.log(e.message);
}
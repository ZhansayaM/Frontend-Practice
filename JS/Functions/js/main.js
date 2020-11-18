var iphone = {
    name: 'Iphone',
    model: 7,
    color: 'silver',
    year: 2016,
    price: 500
};
var samsung = {
    name: 'Samsung',
    model: 'Galaxy S8',
    color: 'black',
    year: 2017,
    price: 300
};
var nokia = {
    name: 'Nokia',
    model: '7 plus',
    color: 'white',
    year: 2018,
    price: 200
};

function showModel(object){
    alert(object.name + ' ' + object.model + ' ' + object.year);
}

showModel(iphone);
showModel(samsung);
showModel(nokia);

function getColor(object){
    switch (object.color){
        case 'black':
            return 'черный';
            break;
        case 'white':
            return 'белый';
            break;
        case 'silver':
            return 'серебристый';
            break;
        default:
            return 'никакой';
            break;
    }
}

alert(getColor(iphone));
alert(getColor(samsung))
alert(getColor(nokia));

function canBuy(money, object){
    var message;
    if (money >= object.price){
        message = 'денег на покупку хватает';
    }
    else message = 'денег на покупку не хватает';
    alert(object.name + ' ' + object.model + ', ' + message);
}

canBuy(100, iphone);
canBuy(400, samsung);
canBuy(800, nokia);
canBuy(10, samsung);
canBuy(250, iphone);

function showInfo(object){
    alert(object.name + ' ' + object.model + ' ' + getColor(object));
}

showInfo(iphone);
showInfo(samsung);
showInfo(nokia);


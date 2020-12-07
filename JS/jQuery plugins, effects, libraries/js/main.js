$(document).ready(() => {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $(function () {
        $("#tabs").tabs();
    });
    $(function () {
        $("#accordion").accordion();
    });
    $("#accordion").accordion({ header: "h3", collapsible: true, active: false });
});
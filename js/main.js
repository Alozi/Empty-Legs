$(document).ready(function() {

    //open pop-up
    $('tr').click(function() {
        $('#popup').fadeIn(300);
        var mas = $(this).text().split('\n');
        var generateText = "Добрый день. Вы выбрали чартерный рейс на самолет " + mas[3] + ". Дата вылета данного самолета " + mas[2] + ". Мы были рады вам помочь.";
        $('#generate-text').text(generateText);
    });

    //close pop-up
    $('#close-button').click(function() {
        $('#popup').fadeOut(300);
    });

    //smooth scroll
    $('#scroll-btn').click(function () {
        var elementClick = $(this).attr('href');
        var destination = $(elementClick).offset().top;

        $('html, body').animate({scrollTop: destination}, 1000);
    });

});

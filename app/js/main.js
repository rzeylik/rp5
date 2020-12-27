$(function () {

    let newsFlag = 0;
    let tableFlag = 0;

    $('#news__more').on('click', function () {
        $('#news__hidden').slideToggle();

        if (newsFlag == 0) {
            $('#news__more-text').html("Згорнути текст");
            $('#news__more-icon').html('<i class="fas fa-sort-up"></i>');
            newsFlag = 1;
        } else {
            $('#news__more-text').html("Розгорнути текст")
            $('#news__more-icon').html('<i class="fas fa-sort-down"></i>');
            newsFlag = 0
        }
    })

    $('#table__more').on('click', function () {
        $('#weather__table-hidden').fadeToggle('fast');

        if (newsFlag == 0) {
            $('#table__more-text').html("Згорнути таблицю");
            $('#table__more-icon').html('<i class="fas fa-sort-up"></i>');
            newsFlag = 1;
        } else {
            $('#table__more-text').html("Розгорнути таблицю: <span>(Вологість, Сонце, Місяць: схід, захід, фаза)</span>")
            $('#table__more-icon').html('<i class="fas fa-sort-down"></i>');
            newsFlag = 0
        }
    })

    $('#header__topMenu-burger').on('click', function () {
        $('#header__topMenu-navbar').fadeToggle();
    })

});
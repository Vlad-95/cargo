$(document).ready(function() {
    // $('.js-select').select2({
    //     placeholder: 'Терминал'        
    // });

    $('.js-date').datepicker();

    //добавление иконок в мобильное меню
    if (window.innerWidth <= 992) {
        $('.header__links').appendTo('.header__bottom .header__wrap');
    }

    //клик по бургеру
    $('.burger').click(function() {
        $('.header__bottom').show("slide", { direction: "right" }, 500);
    });

    //закрытие меню
    $('.header__bottom .close').click(function() {
        $('.header__bottom').hide("slide", { direction: "right" }, 500);
    });

    //аккордион
    $('.js-accordion-toggle').click(function() {
        $(this).toggleClass('active').closest('.js-accordion-item').find('.js-accordion-drop').slideToggle();
    });


    //ширина для таблицы
    if($('.content__table').length) {
        let changeWidthTable = function () {
            let table = $('.content__table');
            let tabelWidth;
            if ($(window).width() > 768) {
                tabelWidth = $(window).width() - table.offset().left;                
            } else {
                tabelWidth = $(window).width() - (table.offset().left * 2);
            }

            table.outerWidth(tabelWidth);
        }
        changeWidthTable();
        $(window).resize(function() {
            changeWidthTable();
        })
    }

    //открытие всплывашки
    let timer;
    $('.js-popup-open').click(function() {
        let target = $(this).data("target");
        $('.popup__item').removeClass('active');
        $('.popup__item[data-name="'+ target +'"]').addClass('active');
        $('.popup').fadeIn();
        
        if($('.popup__item.active').find('.popup__close_wait')) {
            
            $('.popup__close_wait').addClass('animate');

            function activeClose() {
                $('.popup__close_wait').addClass('active');

                $('.popup__close_wait').bind('click', closeModal)
            }
              
            timer = setTimeout(activeClose, 5000);
            
        }        
        
    })
    //закрытие всплывашки
    let closeModal = function () {
        $('.popup__item').removeClass('active');
        $(this).closest('.popup').fadeOut();

        if($(this).hasClass('popup__close_wait')) {
            $('.popup__close_wait').removeClass('animate active');
            $('.popup__close_wait').unbind('click', closeModal);
            clearTimeout(timer);
        }
        
    }

    $('.js-popup-close').click(closeModal);
});

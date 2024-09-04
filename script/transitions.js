$(document).ready(function () {

    if ($(window).width() >= 768) {

        $('nav').fadeOut(0);

        $('.home01Section').animate({ opacity: 0 }, 0);

        $('.leftAnimated').css({ position: 'relative' });
        $('.leftAnimated').animate({ right: '+=1000px' }, 0);
        $('.rightAnimated').css({ position: 'relative' });
        $('.rightAnimated').animate({ left: '+=1000px' }, 0);

        $(window).on('load resize scroll', function () {

            if ($(window).scrollTop() < 100) {
                $('nav').fadeOut(700);

                $('.heading').fadeIn(1000);

                $('.landing').removeClass('landingAnimated');
            }

            if ($(window).scrollTop() >= 100) {
                $('nav').fadeIn(1000);

                $('.heading').fadeOut(700);

                $('.landing').addClass('landingAnimated');
            }


            if ($(window).scrollTop() >= 1000) {
                $(".home01img").animate({ width: '70%', height: '60vh' }, 1500);
            }

            if ($(window).scrollTop() >= 1200) {
                $('.home01Section').delay(500).animate({ opacity: 1 }, 2000);
            }

            if ($(window).scrollTop() >= 3400) {
                $('.leftAnimated').animate({ right: '0px' }, 2000);
                $('.rightAnimated').animate({ left: '0px' }, 2200);
            }

        });
    }
});
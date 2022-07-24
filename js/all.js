$(document).ready(function () {
        // $('.desc').find('h1').fadeIn('slow');
        console.log(0);
        // $('.init').css(display, flex);
        $('.desc').fadeIn(3000);
        let $opacity = 1;
        // $('h2').css('opacity', $opacity);
        if ($opacity != 0) {
                $opacity -= 0.1;
                $('h2').css('opacity', $opacity);
        } else {
                $opacity = 1;
                $('h2').css('opacity', $opacity);
        }
        // $('desc').find('h2').fadeToggle(1500);   
});
// function fadeIn() {
//         $('.init').css(display, flex);
//         $('.init').fadeIn(5000);
// }
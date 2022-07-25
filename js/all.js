let index =0 ;
$(document).ready(function () {
        // $('.desc').find('h1').fadeIn('slow');
        console.log(0);
        // $('.init').css(display, flex);
        $('.desc').fadeIn(3000);
        console.log($opacity);
    
});
$('a .init').hover(function () {
                // over
                $('h2').css('opacity', opacity);
                console.log(index);
        }, function () {
                // out
                console.log(index);
        }
);
function opacity() {
        FadeIn()/10;
  }
function FadeIn() {
        if (index < 11) {
                index ++;
                // $('h2').css('opacity', index);
                console.log(index);
        } else {
                index = 0;
                // $('h2').css('opacity', index);
                console.log(index);
        }
  }
// function fadeIn() {
//         $('.init').css(display, flex);
//         $('.init').fadeIn(5000);
// }
let $opacity = .1;
$(document).ready(function () {
        // $('.desc').find('h1').fadeIn('slow');
        console.log(0);
        // $('.init').css(display, flex);
        $('.desc').fadeIn(3000);
        $('h2').fadeIn(FadeIn);
       
      
       
       
});
function FadeIn() {
        if ($opacity != 1) {
                $opacity += 0.1;
                $('h2').css('opacity', $opacity);
                console.log($opacity);
        } else {
                $opacity = 1;
                $('h2').css('opacity', $opacity);
                console.log($opacity);
        }
  }
// function fadeIn() {
//         $('.init').css(display, flex);
//         $('.init').fadeIn(5000);
// }
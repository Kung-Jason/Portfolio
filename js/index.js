let index = 0;
$(document).ready(function () {
        // $('.desc').find('h1').fadeIn('slow');
        console.log(0);
        // $('.init').css(display, flex);
        $('.desc').fadeIn(3000);
       

});
 setInterval(() => {
        $('.desc h2').fadeToggle(1000);
        console.log(index / 10);
}, 200);    
$(selector).hover(function () {
                // over
           
        }, function () {
                // out
                clearInterval();
        }
);

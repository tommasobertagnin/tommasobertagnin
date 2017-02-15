jQuery(document).ready(function() {
    jQuery('#main').fadeIn(500);
    jQuery('#author').hide().delay(2500).fadeIn(150);
    jQuery('img').hide().load().fadeIn(500);
    var count = 1;
    jQuery('.project-link a').each(function() {
        if (count%2 == 0) { jQuery(this).css({'position': 'absolute', 'top': 0, 'left': 0, 'z-height': -1}); }
        count++;
    });
    jQuery('.project-link').hover(
        function () { jQuery(this).children().eq(1).fadeOut(300); },
        function () { jQuery(this).children().eq(1).fadeIn(300); }
    );
});

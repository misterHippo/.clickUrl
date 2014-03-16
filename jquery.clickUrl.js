$.fn.clickUrl = function() {
    var regexp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    this.each(function() {
        $(this).html(
            $(this).html().replace(regexp,'$1')
        );
    });
    return $(this);
}
/*
* Found on the net. Compiled by Mister (SushiHippos.com | http://github.com/misterHippo/) - but attributed to:
* - http://snipplr.com/view/21576/ 
* - http://stackoverflow.com/questions/37684/how-to-replace-plain-urls-with-links
*/

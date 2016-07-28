/**
 * Created by chenji13 on 7/26/2016.
 */
$(document).ready(function() {
    var div = $("#About");
    var pos = div.position();
    $(window).scroll(function () {
        /**var windowpos = $(window).scrollTop();
        if (windowpos >= (pos.top + 10)) {*/
        $(div).addClass("afterscroll");
    });
});

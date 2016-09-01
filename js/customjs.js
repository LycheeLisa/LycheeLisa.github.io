/**
 * Created by chenji13 on 7/26/2016.
 */
$(document).ready(function() {
    var div = $("#About");
    var pos = div.position();
    $(window).scroll(function () {
        $(div).addClass("afterscroll");
    });
    $(".showmore").click(function () {
        if ($(this).text() == "Show less") {
            $(this).prev().addClass("showextra");
            $(this).html("Show more...");
        }
        else {
            $(this).prev().removeClass("showextra");
            $(this).html("Show less");
        }
    });
});

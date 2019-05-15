$(function() {
    var pageTitle = $("title").text();
    var titleCount = 0;
    $(window).blur(function() {
        titleCount++;
        if (titleCount == 1)
            $("title").text("Nereye gittin..");
        else if (titleCount == 2)
            $("title").text("Geri gel :(");
        else if (titleCount == 3)
            $("title").text("Gelsene :(");
        else if (titleCount == 4)
            $("title").text("Küserim bak :(");
        else if (titleCount > 4)
            $("title").text("Küstüm -_-");
    });
    $(window).focus(function() {
        $("title").text(pageTitle);
        if (titleCount > 4) $("title").text(":))) " + pageTitle);
    });
});
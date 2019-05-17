$(() => {
    const title = $("title").text();
    const count = 0;
    $(window).blur(() => {
        count++;
        if (count == 1) $("title").text("Where you go?.");
        else if (count == 2) $("title").text("Come back :(");
        else if (count == 3) $("title").text("Come on :(");
        else if (count == 4) $("title").text("I'm sorry :(");
        else if (count > 4) $("title").text("You broke me -_-");
    });
    $(window).focus(() => {
        $("title").text(title);
        if (count > 4) $("title").text(":))) " + title);
    });
});
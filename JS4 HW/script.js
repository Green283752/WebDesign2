$(function () {

    $("#tags").autocomplete({
        source: availableTags
    });

    var availableTags = [

        "Help"
        "What",
        "Done",
        "Why",
        "How"
    ];
});


$(function () {
    $("#accordion").accordion();
});
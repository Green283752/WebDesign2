$(function () {

    var availableTags = [

        "Help",
        "What",
        "Done",
        "Why",
        "How"
    ];

    $("#tags").autocomplete({
        source: availableTags
    });


});


$(function () {
    $("#accordion").accordion();
});
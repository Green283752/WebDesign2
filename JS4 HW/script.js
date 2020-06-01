$(function () {

    $("#tags").autocomplete({
        source: availableTags
    });

    var availableTags = [

        "Scheme"
        "Java",
        "John",
        "Peter",
        "Cayla"
    ];
});


$(function () {
    $("#accordion").accordion();
});
// The code in add.js handles what happens when the user clicks the "Add a Charity" button.

// When user clicks add-btn
$("#add-btn").on("click", function (event) {
    event.preventDefault();

    // Make a newBook object
    var newCharity = {
        name: $("#name").val().trim(),
        category: $("#category").val().trim(),
        cause: $("#cause").val().trim(),
        location: $("#location").val().trim()
    };

    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newCharity)
        // On success, run the following code
        .then(function (data) {
            // Log the data we found
            console.log(data);
        });

    // Empty each input box by replacing the value with an empty string
    $("#name").val("");
    $("#category").val("");
    $("#cause").val("");
    $("#location").val("");

});

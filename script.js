function introduction() {
    swal({
        title: "What is your name?",
        closeOnClickOutside: false,
        content: {
            element: "input",
            attributes: {
                placeholder: "Enter your name",
                type: "text",
            },
        },
        buttons: {
            Submit: "Submit",
            Guest: "Guest",
        },


    }).then(function () {
        window.location = "homepage/home.html";
    })

}


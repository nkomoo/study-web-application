function introduction() {
    swal({
        title: "What is your name?",
        content: {
            element: "input",
            attributes: {
                placeholder: "Enter your name",
                type: "text",
            },
        },
        buttons: {
            Submit: "Submit",
            Guest: "Guest"
        }

    })
}


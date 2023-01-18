let form = document.querySelector('#contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = form.elements.name.value;
    let email = form.elements.email.value;
    let message = form.elements.message.value;

    // validate the form data here
    if(!name || !email || !message) {
        // display an error message
        alert("All fields are required!");
        return;
    }

    // send the form data using the Fetch API
    fetch('/send-message', {
        method: 'POST',
        body: JSON.stringify({name, email, message}),
        headers: { 'Content-Type': 'application/json' }
    }).then(function(response) {
        // handle the response here
        if(response.ok) {
            // display a success message
            alert("Your message has been sent successfully!");
            //reset the form
            form.reset();
        } else {
            // display an error message
            alert("An error occurred while sending your message. Please try again later.");
        }
    });
});

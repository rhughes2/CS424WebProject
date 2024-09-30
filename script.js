document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! We will get back to you soon.`);
        // You can later modify this to send the data to a server!
    } else {
        alert('Please fill in all fields.');
    }
});

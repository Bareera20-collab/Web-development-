window.onload = function() {
    alert("Welcome to Travelography!");
};


const bookNowButton = document.querySelector('.btn');
bookNowButton.addEventListener('click', function() {
    const confirmBooking = confirm("Are you sure you want to book now?");
    if (confirmBooking) {
        alert("Booking confirmed! Thank you for choosing Travelography.");
    } else {
        alert("Booking cancelled.");
    }
});


const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !phone || !message) {
        event.preventDefault(); // Prevent form submission
        alert("Please fill in all the fields before submitting.");
    }
});

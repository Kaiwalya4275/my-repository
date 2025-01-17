// Form validation and submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Display the form data in the console (you can send this to a server)
    console.log('Form submitted!');
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Message: ', message);

    // Show a confirmation alert
    alert('Thank you for contacting us! We will get back to you soon.');

    // Clear the form
    event.target.reset();
});

// Scroll-triggered animation for "About Us" section
document.addEventListener('DOMContentLoaded', () => {
    const aboutImages = document.querySelectorAll('.about-images img'); // Select all images inside the "About Us" section

    const onScroll = () => {
        aboutImages.forEach((image) => {
            const rect = image.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible) {
                image.classList.add('show'); // Add the animation class
            }
        });
    };

    // Listen for scroll events
    window.addEventListener('scroll', onScroll);

    // Trigger animation on load if already in view
    onScroll();
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.init('3kLCjXRG_Q43eWv0G');

    const formData = {
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
    };

    emailjs.send('service_u04hew8', 'template_4vlkzvm', formData)
        .then(() => {
            alert('Thank you for contacting us! Your message has been sent.');
            event.target.reset();
        })
        .catch(error => {
            alert('Oops! Something went wrong. Please try again later.');
            console.error('Error:', error);
        });
});

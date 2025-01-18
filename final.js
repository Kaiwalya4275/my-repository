(function () {
    emailjs.init("3kLCjXRG_Q43eWv0G"); 
})();

function sendOrderConfirmationEmail() {
    const plantName = document.getElementById('plant-name').textContent;
    const unitPrice = document.getElementById('unit-price').textContent;
    const quantity = document.getElementById('quantity').value;
    const totalCost = (quantity * unitPrice).toFixed(2);

    const shippingDetails = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    if (!shippingDetails.name || !shippingDetails.address || !shippingDetails.email || !shippingDetails.phone || !quantity) {
        alert("Please fill out all fields and ensure quantity is entered.");
        return;
    }

    const templateParams = {
        to_email: 'kaiwalyajadhav980@gmail.com', 
        plant_name: plantName,
        quantity: quantity,
        unit_price: unitPrice,
        total_cost: totalCost,
        customer_name: shippingDetails.name,
        customer_address: shippingDetails.address,
        customer_email: shippingDetails.email,
        customer_phone: shippingDetails.phone,
        message: `A customer has placed an order for ${quantity} of the ${plantName} at $${unitPrice} each. 
                  Total cost: $${totalCost}. Shipping to: ${shippingDetails.name}, 
                  ${shippingDetails.address}. Contact: ${shippingDetails.phone}. Email: ${shippingDetails.email}.`
    };

    emailjs.send('service_u04hew8', 'template_n19xa4y', templateParams)
        .then(function (response) {
            console.log('Email sent successfully!', response.status, response.text);
            alert('Order confirmed! A confirmation email has been sent.');
            // Redirect to a thank-you page
            window.location.href = "thankyou.html"; // Replace with your thank-you page URL
        }, function (error) {
            console.error('Failed to send email...', error);
            alert('Something went wrong while sending the confirmation email.');
        });
}

document.getElementById('shipping-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    sendOrderConfirmationEmail(); // Call email sending function
});

// Function to handle the "Add to Cart" button click
function addToCart(plantName, price) {
    // Store the selected plant details in sessionStorage
    const orderDetails = {
        plantName: plantName,
        price: price
    };

    // Save the order details to sessionStorage
    sessionStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    // Redirect to the confirmation page
    window.location.href = "final.html"; // Ensure this points to your confirmation page
}

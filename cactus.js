function addToCart(plantName, price) {
    const orderDetails = {
        plantName: plantName,
        price: price
    };

    sessionStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    window.location.href = "final.html"; // Ensure this points to your confirmation page
}

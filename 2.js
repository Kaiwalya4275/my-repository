



// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Animation on Scroll for Product Cards
const products = document.querySelectorAll('.product-card');

const handleScrollAnimation = () => {
    const windowHeight = window.innerHeight;

    products.forEach(product => {
        const position = product.getBoundingClientRect().top;

        if (position - windowHeight <= 0) {
            product.classList.add('animate');
        }
    });
};

// Initial Call to check if any products are visible on load
handleScrollAnimation();

// Scroll Event Listener
window.addEventListener('scroll', handleScrollAnimation);

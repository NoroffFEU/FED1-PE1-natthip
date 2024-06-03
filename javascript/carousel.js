let currentIndex = 0; // Initialize the current index

function nextSlide() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;

    // Update the index
    currentIndex = (currentIndex + 1) % totalItems;

    // Update the carousel position
    const newPosition = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${newPosition}%)`;
}

function prevSlide() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;

    // Update the index
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;

    // Update the carousel position
    const newPosition = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${newPosition}%)`;
}

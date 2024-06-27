document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.carousel-container').forEach(container => {
    const carousel = container.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const prev = carousel.querySelector('.prev');
    const next = carousel.querySelector('.next');
    const index = carousel.querySelector('.carousel-index');
    let currentIndex = 0;

    function updateCarousel() {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === currentIndex);
        });
        index.textContent = `${currentIndex + 1}/${images.length}`;
    }

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateCarousel();
    });

    next.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    updateCarousel();
});

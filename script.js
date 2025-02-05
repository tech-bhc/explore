const episodes = Array.from({length: 404}, (_, i) => i + 1);

function createCarousel(episodeNumber) {
  const carouselId = `carousel-ep${episodeNumber}`;
  
  const images = Array.from({length: 6}, (_, i) => 
    `<img src="webpage images/carousel/ep${episodeNumber}/${i+1}.jpg" 
          alt="Episode ${episodeNumber} Image ${i+1}" 
          ${i === 0 ? 'class="active"' : ''}>`
  ).join('');

  return `
    <div class="carousel-container">
      <div class="carousel" id="${carouselId}">
        ${images}
        <div class="carousel-controls">
          <div class="prev" onclick="navigateCarousel('${carouselId}', -1)">&#10094;</div>
          <div class="next" onclick="navigateCarousel('${carouselId}', 1)">&#10095;</div>
        </div>
        <div class="carousel-index">1/6</div>
      </div>
    </div>
  `;
}

document.getElementById('carouselsContainer').innerHTML = episodes.map(createCarousel).join('');

function navigateCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll('img');
    const indexDisplay = carousel.querySelector('.carousel-index');
    
    let currentIndex = Array.prototype.findIndex.call(images, img => img.classList.contains('active'));
    
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].classList.add('active');
    
    indexDisplay.innerText = `${currentIndex + 1} / ${images.length}`; 
}

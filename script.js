function getPics() {
  const imgs = document.querySelectorAll('.kunstwerk img');
  const fullPage = document.querySelector('#fullpage');

  imgs.forEach(img => {
    img.addEventListener('mouseover', function() {
      // Zoom in on the hovered image
      img.style.transform = 'scale(1.05)'; // You can adjust the scale factor as needed
      img.style.transition = 'transform 0.5s ease'; // Smooth transition for the zoom effect
    });
    
    img.addEventListener('mouseout', function() {
      // Reset zoom effect when mouse leaves the image
      img.style.transform = 'scale(1)';
    });
      img.addEventListener('click', function() {
          // Show full-size image
          fullPage.style.backgroundImage = 'url(' + img.src + ')';
          fullPage.style.display = 'block';

          // Close full-size image when clicking outside
          fullPage.addEventListener('click', function() {
              fullPage.style.display = 'none';
              // Reset zoom effect
              img.style.transform = 'scale(1)';
          });
      });
});
}

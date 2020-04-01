const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(event) {
    // Reset the opacity
    imgs.forEach(img => (img.style.opacity = 1));

    current.src = event.target.src;

    // Add fade in class
    current.classList.add('fade-in');


    // Remove fade-in class after .5 second
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Change the opacity to opacity var
    event.target.style.opacity = opacity;
}
// ----------------------------------------------
// Requires
// ----------------------------------------------
//= require components/_pageTransition
//= require vendor/_tinySlider

// ----------------------------------------------
// Inits
// ----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

  // Tiny Slider
  const slider = tns({
    container: document.querySelector('.tns'),
    controls: false,
    nav: false,
    speed: 500,
    autoplay: true,
    touch: false
  });

  // Inits
  PageTransition.init();
});
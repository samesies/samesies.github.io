// ----------------------------------------------
// Imports
// ----------------------------------------------
import tns from './vendor/_tinySlider.js';
import PageTransition from './components/_pageTransition.js';

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

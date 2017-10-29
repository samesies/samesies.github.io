// ----------------------------------------------
// Requires
// ----------------------------------------------
//= require components/_pageTransition
//= require vendor/_tinySlider

// ----------------------------------------------
// Inits
// ----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

  console.log(asset_path('images/barber/long/stories-mobile.jpg'));
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

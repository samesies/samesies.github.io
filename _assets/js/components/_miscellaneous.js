// ----------------------------------------------
// Imports
// ----------------------------------------------
import tns from '../vendor/_tinySlider.js';

// ----------------------------------------------
// Tiny Slider
// ---------------------------------------------- 
const miscTinySlider = () => {
  const slider = tns({
    container: document.querySelector('.tns'),
    controls: false,
    nav: false,
    speed: 500,
    autoplay: true,
    touch: false
  });
};

// ----------------------------------------------
// Exports
// ----------------------------------------------
module.exports = {
  miscTinySlider
};

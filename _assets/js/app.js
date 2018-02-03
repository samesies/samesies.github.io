// ----------------------------------------------
// Imports
// ----------------------------------------------
import { miscTinySlider } from './components/_miscellaneous.js';
import Navigation from './components/_navigation.js';
import PageTransition from './components/_pageTransition.js';

// ----------------------------------------------
// Inits
// ----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

  // Inits
  miscTinySlider();
  Navigation.init();
  PageTransition.init();
});

// ----------------------------------------------
// Imports
// ----------------------------------------------
import { miscTinySlider } from './components/_miscellaneous.js';
import Formspree from './components/_formspree.js';
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

  if (document.body.classList.contains('contact')) {
    Formspree.init();
  }
});

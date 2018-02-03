// ----------------------------------------------
// Navigation
// ---------------------------------------------- 
const Navigation = (() => {
  let s;

  return {
    settings() {
      return {
        html: document.documentElement,
        body: document.body,
        hamburger: document.getElementsByClassName('hamburger')[0],
        hamburgerClass: 'js-hamburger',
        navClass: 'js-nav',
        overflow: 'js-overflow'
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      this.toggleNav();
    },

    toggleNav() {
      s.hamburger.addEventListener('click', () => {
        s.hamburger.classList.toggle(s.hamburgerClass);
        s.body.classList.toggle(s.overflow);
        s.body.classList.toggle(s.navClass);
      });

      document.addEventListener('keyup', e => {
        if (s.body.classList.contains(s.navClass) && e.which === 27) {
          s.hamburger.classList.toggle(s.hamburgerClass);
          s.body.classList.toggle(s.overflow);
          s.body.classList.toggle(s.navClass);
        }
      });
    }
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Navigation;

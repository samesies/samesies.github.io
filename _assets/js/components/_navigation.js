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
        navigation: document.getElementsByClassName('navigation')[0],
        navigationContainer: document.getElementsByClassName('navigation__container')[0],
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
        this.toggleClasses();
      });

      document.addEventListener('keyup', e => {
        if (s.body.classList.contains(s.navClass) && e.which === 27) {
          this.toggleClasses();
        }
      });

      s.navigation.addEventListener('click', e => {
        if (s.body.classList.contains(s.navClass) && !s.navigationContainer.contains(e.target)) {
          this.toggleClasses();
        }
      });
    },

    toggleClasses() {
      s.hamburger.classList.toggle(s.hamburgerClass);
      s.body.classList.toggle(s.overflow);
      s.body.classList.toggle(s.navClass);
    }
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Navigation;

// ----------------------------------------------
// Please Don't Go
// ---------------------------------------------- 
const PleaseDontGo = (() => {
  let s;

  return {
    settings() {
      return {
        originalTitle: document.title,
        // New title when tab is changed
        newTitle: 'Are you on ThemeForest?',
        favicon: document.querySelectorAll('[rel="icon"]')[0],
        originalFavicon: document.querySelectorAll('[rel="icon"]')[0].href,
        // New favicon when tab is changed
        newFavicon: '/assets/images/favicon-dontgo.ico'
      };
    },

    init() {
      s = this.settings();
      this.visibility();
    },

    visibility() {
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          setTimeout(() => {
            document.title = s.newTitle;
            s.favicon.setAttribute('href', s.newFavicon);
          }, 1500);
        } else {
          document.title = s.originalTitle;
          s.favicon.setAttribute('href', s.originalFavicon);
        }
      });
    }
  }
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default PleaseDontGo;

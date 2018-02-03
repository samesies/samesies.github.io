// ----------------------------------------------
// Formspree
// ---------------------------------------------- 
const Formspree = (() => {
  let s;

  return {
    settings() {
      return {
        form: document.getElementById('form'),
        formAction: document.getElementById('form').getAttribute('action'),
        formMessage: document.getElementsByClassName('form__message')[0],
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      this.post();
    },

    post() {
      s.form.addEventListener('submit', e => {
        e.preventDefault();

        const request = new XMLHttpRequest();

        request.open('POST', 'https://formspree.io/okay@samesies.io', true);
        request.setRequestHeader('accept', 'application/json');

        const formData = new FormData(s.form);

        request.send(formData);

        request.onreadystatechange = () => {
          if (request.readyState < 4) {
            setTimeout(() => {
              s.formMessage.classList.remove(s.animation);
              s.formMessage.classList.add(s.animation);
              s.formMessage.text('Something Went Wrong');
            }, 750);
          } else if (request.readyState === 4) {
            if (request.status === 200 && request.status < 300) {
              setTimeout(() => {
                s.formMessage.classList.remove(s.animation);
                s.formMessage.classList.add(s.animation);
                s.formMessage.innerHTML = 'Message Sent';
              }, 1000);

              setTimeout(() => {
                form.reset();
              }, 3000);
            } else {
              setTimeout(() => {
                s.formMessage.classList.remove(s.animation);
                s.formMessage.classList.add(s.animation);
                s.formMessage.innerHTML ='Something Went Wrong';
              }, 750);
            }
          }
        };
      });
    }
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Formspree;

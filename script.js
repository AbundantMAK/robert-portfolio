const menu = document.querySelector('.menu');
const mobile = document.querySelector('.mobile-menu');

if (menu && mobile) {
  menu.addEventListener('click', (event) => {
    event.preventDefault();
    const isOpen = mobile.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
    menu.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  mobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobile.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Open menu');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

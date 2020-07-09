const harm = document.querySelector('.menualt');
const side = document.querySelector('.sidemenu');
const times = document.querySelector('.times');
const menus = document.querySelectorAll('.secmenu');
const mainMenus = document.querySelectorAll('nav ul li');

const home = document.querySelector('.head');
const about = document.querySelector('.aboutus');
const service = document.querySelector('.planleft2');
const portfolio = document.querySelector('.whead');
const contact = document.querySelector('.contact');

const remove = () => {
  side.style.left = '100vw';
};

const scrollList = (el) => {
  el.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'Home':
        remove();
        home.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'About':
        remove();
        about.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Services':
        remove();
        service.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Portfolio':
        remove();
        portfolio.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Contact us':
        remove();
        contact.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  });
};

menus.forEach(scrollList);
mainMenus.forEach(scrollList);

harm.addEventListener('click', () => {
  side.style.left = '15%';
});

times.addEventListener('click', () => {
  remove();
});

document.addEventListener('click', ({ target }) => {
  if (!target.closest('.sidemenu,.menualt')) {
    remove();
  }
});

const dots = document.querySelectorAll('.dot');
const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const slide3 = document.querySelector('.slide3');

dots.forEach((el, i) => {
  el.addEventListener('click', () => {
    if (i === 0) {
      slide1.classList.add('show');
      slide2.classList.remove('show');
      slide3.classList.remove('show');
      dots[0].classList.add('dotted');
      dots[1].classList.remove('dotted');
      dots[2].classList.remove('dotted');
    }
    if (i === 1) {
      slide1.classList.remove('show');
      slide2.classList.add('show');
      slide3.classList.remove('show');
      dots[0].classList.remove('dotted');
      dots[1].classList.add('dotted');
      dots[2].classList.remove('dotted');
    }
    if (i === 2) {
      slide1.classList.remove('show');
      slide2.classList.remove('show');
      slide3.classList.add('show');
      dots[0].classList.remove('dotted');
      dots[1].classList.remove('dotted');
      dots[2].classList.add('dotted');
    }
  });
});

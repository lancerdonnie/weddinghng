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

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName('mySlides');
//   var dots = document.getElementsByClassName('dot');
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }
//   slides[slideIndex - 1].style.display = 'block !important';
//   dots[slideIndex - 1].className += ' active';
// }

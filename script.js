const navMenu = (event) => {
  if (event.target.tagName === 'A') {
    menu.querySelectorAll('ul > li> a').forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
  };
};

let counter = 0;

const moveSlidesRight = () => {
  let interval = setInterval(function () {
    slider.querySelectorAll('.slide').forEach((item) => {
      if (item.style.left == '-940px') {
        clearInterval(interval);
        return;
      } else {
        counter -= 2;
        item.style.left = `${counter}px`;
      }
    });
  }, 1);
};

const moveSlidesLeft = () => {
  let interval = setInterval(function () {
    slider.querySelectorAll('.slide').forEach((item) => {
      if (item.style.left == '0px') {
        clearInterval(interval);
        return;
      } else {
        counter += 2;
        item.style.left = `${counter}px`;
      }
    });
  }, 1);
};


const portfolioMenu = (event) => {
  let random = Math.floor(Math.random() * (13 - 1) + 1);
  let htmlItem = `<div class="portfolio-grid__item"><img src="./assets/img/portfolio-img${random}.png" alt="img"></div>`;

  if (event.target.tagName === 'SPAN') {
    portfolio.querySelectorAll('.portfolio-tags__item').forEach(item => item.classList.remove('portfolio-tags__item_active'));
    event.target.classList.add('portfolio-tags__item_active');
    document.querySelector(`#portfolio > div > div > div.portfolio-grid > div:nth-child(${random})`).remove();
    document.querySelector("#portfolio > div > div > div.portfolio-grid").insertAdjacentHTML('beforeend', htmlItem);
  }
};


const portfolioBorder = (event) => {
  if (event.target.tagName === 'IMG') {

    portfolio.querySelectorAll('img').forEach(item => item.parentElement.classList.remove('portfolio-grid__item__border'));
    event.target.parentElement.classList.add('portfolio-grid__item__border');

  }
};


const showModal = (event) => {
  if (event.target.tagName === 'BUTTON') {
    event.preventDefault();

    const subject = document.querySelector('#subject').value.toString();
    const description = document.querySelector('#description').value.toString();

    if (subject == '') {
      document.querySelector("#subject-theme").innerText = 'Без темы';
    } else {
    document.querySelector("#subject-theme").innerText = subject;
    }

    if (description == '') {
      document.querySelector("#description-text").innerText = 'Без описания';
    } else {
    document.querySelector("#description-text").innerText = description;
    }

    document.querySelector('#modal').style.display = '';

  };
};
const removeModal = (event) => {
  if (event.target.tagName === 'BUTTON') {
    document.querySelector("#description-text").innerText = '';
    document.querySelector("#subject-theme").innerText = '';
    document.querySelector('#modal').style.display = 'none';

  };
};

const screenVoff = (event) => {
  if (document.querySelector(".screen-off-vertical")) {
      document.querySelector(".screen-off-vertical").remove();

  } else {
  document.querySelector(".first-slide").insertAdjacentHTML('beforeend', '<div class="screen-off-vertical"></div>');
  console.log(event.target);
  }
};
const screenHoff = (event) => {
  if (document.querySelector(".screen-off-horizontal")) {
    document.querySelector(".screen-off-horizontal").remove();

  } else {
    document.querySelector(".first-slide").insertAdjacentHTML('beforeend', '<div class="screen-off-horizontal"></div>');
    console.log(event.target);
  }
};


document.querySelector('#form-button').addEventListener('click', showModal);
document.querySelector('#close-btn').addEventListener('click', removeModal);

portfolio.querySelector('.portfolio-grid').addEventListener('click', portfolioBorder);
portfolio.querySelector('.portfolio-tags').addEventListener('click', portfolioMenu);

menu.querySelector('ul').addEventListener('click', navMenu);

slider.querySelector('.iphone-vertical').addEventListener('click', screenVoff);
slider.querySelector('.iphone-horizontal').addEventListener('click', screenHoff);

slider.querySelector('.right').addEventListener('click', moveSlidesRight);
slider.querySelector('.left').addEventListener('click', moveSlidesLeft);

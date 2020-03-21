//let clickMenuTarget = 'log';
//console.log(clickMenuTarget);
const navMenu = (event) => {

  if (event.target.tagName === 'A') {
    menu.querySelectorAll('ul > li> a').forEach(item => item.classList.remove('active'));

    //clickMenuTarget = event.target.toString().split('#')[1].toString();
    event.target.classList.add('active');
  };
};

const scrollMenu = (event) => {

  const currentPosition = window.scrollY;
  document.querySelectorAll('section > div:nth-child(1)').forEach(anchor => {

    console.log(`currPos ${currentPosition}`);
    console.log(`anchorOffsetTop ${anchor.offsetTop}`);
    console.log(`possSum ${anchor.offsetTop + anchor.offsetHeight}`);

    console.log(`getBoundingClientRect ${anchor.getBoundingClientRect().top}`);

    if (anchor.getBoundingClientRect().top <= 1) {

      menu.querySelectorAll('ul > li> a').forEach(elem => {

        //if (clickMenuTarget != elem.getAttribute('href').substring(1)) {
        elem.classList.remove('active');


        // }


        if (anchor.getAttribute('id') == elem.getAttribute('href').substring(1)) {

          elem.classList.add('active');


        }

      });
    }
  });
};


// let counter = 0;



// const moveSlidesRight = () => {

// changeCurrentItem(n + 1);
//   let interval = setInterval(function () {
//     slider.querySelectorAll('.slide').forEach((item) => {
//       if (item.style.left == '-940px') {
//         clearInterval(interval);
//         return;
//       } else {
//         counter -= 2;
//         item.style.left = `${counter}px`;
//       }
//     });
//   }, 1);

// };

// const moveSlidesLeft = () => {

//   let interval = setInterval(function () {
//     slider.querySelectorAll('.slide').forEach((item) => {
//       if (item.style.left == '0px') {
//         clearInterval(interval);
//         return;
//       } else {
//         counter += 2;
//         item.style.left = `${counter}px`;
//       }
//     });
//   }, 1);

// };


const portfolioMenu = (event) => {
  //let random = Math.floor(Math.random() * (13 - 1) + 1);
  // let htmlItem = `<div class="portfolio-grid__item"><img src="./assets/img/portfolio-img${random}.png" alt="img"></div>`;

  if (event.target.tagName === 'SPAN') {
    document.querySelectorAll('.portfolio-tags__item').forEach(item => item.classList.remove('portfolio-tags__item_active'));
    event.target.classList.add('portfolio-tags__item_active');

    let htmlItem = document.querySelector(`#portfolio > div > div > div.portfolio-grid > div:nth-child(1)`);
    console.log(htmlItem);
    //document.querySelector(`#portfolio > div > div > div.portfolio-grid > div:first-child`).remove();
    document.querySelector(`#portfolio > div > div > div.portfolio-grid > div:nth-child(1)`).remove();
    document.querySelector("#portfolio > div > div > div.portfolio-grid").append(htmlItem);
  }
};


const portfolioBorder = (event) => {
  if (event.target.tagName === 'IMG') {

    document.querySelectorAll('img').forEach(item => item.parentElement.classList.remove('portfolio-grid__item__border'));
    event.target.parentElement.classList.add('portfolio-grid__item__border');

  }
};


const showModal = (event) => {
  if (event.target.tagName === 'BUTTON') {
    event.preventDefault();

    const subject = document.querySelector('#subject').value.toString();
    const description = document.querySelector('#description').value.toString();

    if (subject === '') {
      document.querySelector("#subject-theme").innerText = 'Без темы';
    } else {
      document.querySelector("#subject-theme").innerText = subject;
    }

    if (description === '') {
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

document.querySelector('.portfolio-grid').addEventListener('click', portfolioBorder);
document.querySelector('.portfolio-tags').addEventListener('click', portfolioMenu);

document.addEventListener('scroll', scrollMenu);

menu.querySelector('ul').addEventListener('click', navMenu);


document.querySelector('.iphone-vertical-hidden').addEventListener('click', screenVoff);
document.querySelector('.iphone-horizontal-hidden').addEventListener('click', screenHoff);


// slider.querySelector('.right').addEventListener('click', moveSlidesRight);
// slider.querySelector('.left').addEventListener('click', moveSlidesLeft);


let items = document.querySelectorAll('.sitem');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('actives', direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('next', direction);
    this.classList.add('actives');
    isEnabled = true;
  });
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

document.querySelector('.left').addEventListener('click', function () {
  if (isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector('.right').addEventListener('click', function () {
  if (isEnabled) {
    nextItem(currentItem);
  }
})

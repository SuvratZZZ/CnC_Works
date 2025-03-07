/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

let cou = 0;

const set_img = function () {
  const node = document.createElement('img');
  console.log(cou);
  node.src = images[cou].url;
  node.classList.add('carousel-slide');
  const main = document.getElementById('carouselTrack');
  main.removeChild(main.childNodes[0]);
  main.appendChild(node);

  document.getElementById('caption').innerText = images[cou].caption;

  document.getElementById('carouselNav').children[cou].classList.add('active');
};

document.getElementById('prevButton').onclick = function () {
  document
    .getElementById('carouselNav')
    .children[(cou + images.length) % images.length].classList.remove('active');
  cou = cou - 1;
  cou += images.length;
  cou %= images.length;
  set_img();
};

function nextMov() {
  document
    .getElementById('carouselNav')
    .children[(cou + images.length) % images.length].classList.remove('active');
  cou = cou + 1;
  cou %= images.length;
  set_img();
}

document.getElementById('nextButton').onclick = nextMov;

for (let i = 0; i < images.length; i++) {
  const ind = document.createElement('div');
  ind.classList.add('carousel-indicator');
  document.getElementById('carouselNav').appendChild(ind);
}
set_img();

let inter = -1;

document.getElementById('autoPlayButton').onclick = function () {
  if (inter == -1) {
    document.getElementById('autoPlayButton').innerText = 'End Auto Play';
    inter = setInterval(() => {
      nextMov();
    }, 500);
  } else {
    document.getElementById('autoPlayButton').innerText = 'Start Auto Play';
    clearInterval(inter);
    inter = -1;
  }
};

/**
 * Write your challenge solution here
 */
const hands = document.getElementsByClassName('clock')[0];
const hrs = hands.children[0];
const min = hands.children[1];
const sec = hands.children[2];

const dc = document.getElementsByClassName('digital-clock')[0];

setInterval(() => {
  sec.style.setProperty(
    '--rotation',
    `${(Math.floor(Date.now() / 1000) % 60) * 6}deg`
  );
  min.style.setProperty(
    '--rotation',
    `${(Math.floor(Date.now() / (1000 * 60)) % 60) * 6}deg`
  );
  hrs.style.setProperty(
    '--rotation',
    `${(Math.floor(Date.now() / (1000 * 60 * 60)) % 12) * 30}deg`
  );
  dc.textContent = `${Math.floor(Date.now() / (1000 * 60 * 60)) % 12}:${
    Math.floor(Date.now() / (1000 * 60)) % 60
  }:${Math.floor(Date.now() / 1000) % 60}`;
}, 1000);

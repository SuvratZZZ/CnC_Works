/**
 * Write your challenge solution here
 */

const tes = document.getElementById('mainHeading');

document.getElementById('redButton').onclick = function () {
  tes.style.color = 'red';
};

document.getElementById('greenButton').onclick = function () {
  tes.style.color = 'green';
};

document.getElementById('blueButton').onclick = function () {
  tes.style.color = 'blue';
};

document.getElementById('purpleButton').onclick = function () {
  tes.style.color = 'purple';
};

document.getElementById('resetButton').onclick = function () {
  tes.style.color = 'Black';
};

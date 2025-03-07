/**
 * Write your challenge solution here
 */
/**
 * Write your challenge solution here
 */
const statu = document.getElementById('status');
const body = document.getElementById('body');
const but = document.getElementById('toggleButton');
const bulb = document.getElementById('bulb');
but.addEventListener('click', () => {
  if (but.innerText === 'Turn On') {
    but.innerText = 'Turn Off';
    statu.innerText = 'Status: On';
  } else {
    but.innerText = 'Turn On';
    statu.innerText = 'Status: Off';
  }
  body.classList.toggle('dark-mode');
  bulb.classList.toggle('off');
  // statu.append(but.innerText);
});

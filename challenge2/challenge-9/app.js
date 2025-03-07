/**
 * Write your challenge solution here
 */

function close() {
  document.getElementsByClassName('panel')[0].classList.toggle('active');
}
const did = document.getElementsByClassName('panel')[0];

document.getElementsByClassName('close-btn')[0].onclick = () => close();
document.getElementsByClassName('toggle-btn')[0].onclick = () => close();

document.addEventListener('click', (e) => {
  if (
    !did.contains(e.target) &&
    e.target != document.getElementsByClassName('toggle-btn')[0]
  ) {
    if (
      document.getElementsByClassName('panel')[0].classList.contains('active')
    )
      document.getElementsByClassName('panel')[0].classList.remove('active');
  }
});

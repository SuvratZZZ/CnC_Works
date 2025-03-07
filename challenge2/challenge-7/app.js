/**
 * Write your challenge solution here
 */
document.querySelectorAll('.accordion-item').forEach((item) => {
  const arw = item.getElementsByClassName('arrow')[0];
  item.getElementsByClassName('accordion-button')[0].onclick = function () {
    arw.classList.toggle('active');
    item
      .getElementsByClassName('accordion-content')[0]
      .classList.toggle('active');
  };
});

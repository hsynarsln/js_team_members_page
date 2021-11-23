const switchButton = document.querySelector('#switch');
const bodyElement = document.body;

switchButton.addEventListener('click', e => {
  if (e.target.parentElement.parentElement.classList.contains('switch-on')) {
    e.target.src = './images/toggle-off-solid.svg';
    bodyElement.className = 'switch-off';
  } else {
    e.target.src = './images/toggle-on-solid.svg';
    bodyElement.className = 'switch-on';
  }
});

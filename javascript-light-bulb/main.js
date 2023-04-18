const button = document.querySelector('.bulb');
const backLight = document.querySelector('body');

button.addEventListener('click', yesClick);

function yesClick(event) {
  if (button.className === 'bulb bulb-off') {
    button.className = 'bulb bulb-half-on';
    backLight.className = 'dim-back-light';
  } else if (button.className === 'bulb bulb-half-on') {
    button.className = 'bulb bulb-on';
    backLight.className = 'bright-back-light';
  } else {
    button.className = 'bulb bulb-off';
    backLight.className = 'dark-back-light';
  }
}

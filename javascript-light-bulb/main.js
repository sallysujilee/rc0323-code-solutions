const button = document.querySelector('.bulb');
const backLight = document.querySelector('body');

button.addEventListener('click', yesClick);

// function yesClick(event) {
//   if (button.className === 'bulb-on') {
//     button.className = 'bulb bulb-off';
//   } else {
//     button.className = 'bulb bulb-on';
//   }

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

//   //  const bulbOff = '.bulb-off';
//   // const bulbHalfOn = '.bulb-half-on';
//   // const bulbOn = 'bulb-on';

//   const bulbOff = document.getElementsByClassName('bulb');
//   // const bulbHalfOn = document.getElementsByClassName('bulb-half-on bulb');
//   // const bulbOn = document.getElementsByClassName('bulb-on bulb');

//   console.log(bulbOff[0].className);

//   bulbOff.className = 'bulb-half-on';
//   // bulbHalfOn.className = 'bulb-on';
//   // bulbOn.className = 'bulb-off';

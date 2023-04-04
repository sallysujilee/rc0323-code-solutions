let clickCount = 0;

const $hotButton = document.querySelector('.hot-button');

const $clickCountDisplay = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (event) {
  clickCount++;

  /*
[insert variable that you want to use].textContent
Concatenate!!!!!
*/
  $clickCountDisplay.textContent = 'Clicks: ' + clickCount;

  if (clickCount < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickCount < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickCount < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickCount < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickCount < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
});

/*
idk what you were doing with this in the past but take it as a learning lesson
let clickCount = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCountDisplay = document.querySelector('.click-count');

$hotButton.addEventListener('click', function () {
  ++hotButton;

  clickCountDisplay.textContent = clickCount;

  if (clickCount < 4) {
    hotButton.className = 'hot-button cold';
  } else if (clickCount < 7) {
    hotButton.className = 'hot-button cool';
  } else if (clickCount < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (clickCount < 13) {
    hotButton.className = 'hot-button warm';
  } else if (clickCount < 16) {
    hotButton.className = 'hot-button hot';
  } else {
    hotButton.className = 'hot-button nuclear';
  }

  console.log('Clicks :{$hotButton.classname');
});

let = 0
$hotbButton.addEventListener('click, handleHOtButtonClick);

function handleHotButtonClick(event) {
  number of CLicks++')
  let temperature;
  if (numberOfCLicks <4) {
    temperature = 'cold';
  } else if (numberOfClicks < 7) {
    temperature = 'col'
  } else {
    temerapture = 'nuclear';
  }
  $hotButton.className = 'hot-button ' + temperature;
  $clickCountDisplay.textContent = 'Clicks: ' + numberOfClicks;
*/

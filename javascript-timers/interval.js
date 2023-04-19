const heading = document.querySelector('h1');

let count = 4;
heading.textContent = count;

const timerId = setInterval(() => {
  count--;
  if (count === 0) {
    heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timerId);
  } else {
    heading.textContent = count;
  }
}, 1000);

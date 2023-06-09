let currentCount = 3;

const intervalId = setInterval(() => {
  console.log(currentCount);
  currentCount--;

  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(intervalId);
  }
}, 1000);

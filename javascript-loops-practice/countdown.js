/* exported countdown */
function countdown(number) {
  const countdownArray = [];
  for (let i = number; i >= 0; i--) {
    countdownArray.push(i);
  }
  return countdownArray;
}

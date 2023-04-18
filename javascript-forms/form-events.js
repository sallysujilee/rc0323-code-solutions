function handleFocus(event) {
  console.log(focus);
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log(blur);
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

const nameInput = document.getElementById('user-name');
const emailInput = document.getElementById('user-email');
// to read: The query selector method of the document object is being called with one argument, the id user message
const messageTextArea = document.getElementById('user-message');

nameInput.addEventListener('focus', handleFocus);
nameInput.addEventListener('blur', handleBlur);
nameInput.addEventListener('input', handleInput);

emailInput.addEventListener('focus', handleFocus);
emailInput.addEventListener('blur', handleBlur);
emailInput.addEventListener('input', handleInput);

messageTextArea.addEventListener('focus', handleFocus);
messageTextArea.addEventListener('blur', handleBlur);
messageTextArea.addEventListener('input', handleInput);

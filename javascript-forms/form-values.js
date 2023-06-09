const $contactForm = document.getElementById('contact-form');

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // .preventDefault method of the event object with no argument

  const name = $contactForm.elements.name.value;
  const email = $contactForm.elements.email.value;
  const message = $contactForm.elements.message.value;

  const contactInfo = {
    name,
    email,
    message
  };

  console.log('contactInfo:', contactInfo);

  $contactForm.reset();
});

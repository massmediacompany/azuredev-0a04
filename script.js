document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('demoButton');
  const message = document.getElementById('demoMessage');

  button.addEventListener('click', function () {
    message.textContent = 'Nice! You clicked the dummy website button.';
    message.style.color = '#1d4ed8';
  });
});

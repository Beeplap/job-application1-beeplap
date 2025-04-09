const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleButton.textContent = document.body.classList.contains('dark')
    ? 'Light Mode'
    : 'Dark Mode';
});

const form = document.querySelector('form');
const popup = document.createElement('div');
popup.className = 'popup hidden';
popup.innerText = 'Application submitted successfully!';
document.body.appendChild(popup);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    popup.classList.remove('hidden');
    popup.classList.add('show');
    setTimeout(() => {
      popup.classList.remove('show');
    }, 3000);
    form.reset();
  } else {
    alert('Please fill all the required fields.');
  }
});

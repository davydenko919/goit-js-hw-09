const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const storedState = JSON.parse(localStorage.getItem(localStorageKey)) || {};
form.elements.message.value = storedState.message || '';
form.elements.email.value = storedState.email || '';

form.addEventListener('input', () => {
  const currentState = {
    message: form.elements.message.value,
    email: form.elements.email.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(currentState));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});

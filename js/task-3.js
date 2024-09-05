const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', event => {
  // Очищення пробілів на початку і в кінці введеного тексту
  const name = event.target.value.trim();

  // Перевірка, якщо ім'я порожнє або складається тільки з пробілів
  output.textContent = name === '' ? 'Anonymous' : name;
});
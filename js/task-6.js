function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; // Очищаємо поле вводу
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); // Очищуємо попередні елементи перед створенням нових

  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = '5px';
    elements.push(div);
    size += 10; // Збільшуємо розмір кожного наступного div на 10px
  }

  boxes.append(...elements); // Додаємо всі div за одну операцію
}

function destroyBoxes() {
  boxes.innerHTML = ''; // Очищуємо вміст div#boxes
}

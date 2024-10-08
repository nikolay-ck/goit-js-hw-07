function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  createBoxes(amount);
  input.value = ''; 
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  
  boxesContainer.innerHTML = '';

  const boxElements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    boxElements.push(box);
    size += 10; 
  }
  
  boxesContainer.append(...boxElements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

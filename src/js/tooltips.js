const chestImage = document.querySelector('.chest-image-container > img');
const chestText = document.querySelector('section.chest .chest-tooltip');
const chestImageContainer = document.querySelector('.chest-image-container');

export function createItemTooltip(item) {
  const lastOcupiedItemSlot = findLastOccupiedItemSlot();

  const tooltipContainer = document.createElement('div');
  tooltipContainer.classList.add('item-tooltip', 'hidden-item-tooltip');

  const itemTypeSpan = document.createElement('span');
  itemTypeSpan.textContent = item['type'][0].toUpperCase() + item['type'].substring(1,) + ' armor';
  itemTypeSpan.style.textDecoration = 'underline';
  tooltipContainer.appendChild(itemTypeSpan);

  const armorRatingSpan = document.createElement('span');
  armorRatingSpan.textContent = 'Armor: ' + item['rating'];
  tooltipContainer.appendChild(armorRatingSpan);

  const descriptionParagraph = document.createElement('p');
  descriptionParagraph.textContent = item['description'];
  descriptionParagraph.style.fontStyle = 'italic';
  descriptionParagraph.style.color = 'darkblue';
  tooltipContainer.appendChild(descriptionParagraph);

  lastOcupiedItemSlot.appendChild(tooltipContainer);

  lastOcupiedItemSlot.addEventListener('mouseenter', showItemTooltip);
  lastOcupiedItemSlot.addEventListener('mouseleave', hideItemTooltip);
}

export function showItemTooltip(event) {
  event.target.querySelector('.item-tooltip').classList.remove('hidden-item-tooltip');
}

export function hideItemTooltip(event) {
  event.target.querySelector('.item-tooltip').classList.add('hidden-item-tooltip');
}

function findLastOccupiedItemSlot() {
  const occupiedSlots = Array.from(document.querySelectorAll('.inventory-items-list .occupied-slot'));

  return occupiedSlots.find(occupiedSlot => Array.from(occupiedSlot.children).length == 1);
}

chestImage.addEventListener('mouseenter', showChestText);
chestImageContainer.addEventListener('mouseleave', hideChestText);


function showChestText() {
  chestText.classList.remove('hidden-text');
}

function hideChestText() {
  chestText.classList.add('hidden-text');
}

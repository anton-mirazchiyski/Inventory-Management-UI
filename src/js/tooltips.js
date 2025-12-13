const chestImage = document.querySelector('.chest-image-container > img');
const chestText = document.querySelector('section.chest .chest-tooltip');
const chestImageContainer = document.querySelector('.chest-image-container');

export function createItemTooltip(item) {
  const lastOcupiedItemSlot = Array.from(document.querySelectorAll('.inventory-items-list .occupied-slot'))
                                  .reverse()[0];
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

  lastOcupiedItemSlot.addEventListener('mouseenter', () => {
    showItemTooltip(tooltipContainer);
  });

  lastOcupiedItemSlot.addEventListener('mouseleave', () => {
    hideItemTooltip(tooltipContainer);
  });
}


function showItemTooltip(tooltipContainer) {
  tooltipContainer.classList.remove('hidden-item-tooltip');
}

function hideItemTooltip(tooltipContainer) {
  tooltipContainer.classList.add('hidden-item-tooltip');
}

chestImage.addEventListener('mouseenter', showChestText);
chestImageContainer.addEventListener('mouseleave', hideChestText);


function showChestText() {
  chestText.classList.remove('hidden-text');
}

function hideChestText() {
  chestText.classList.add('hidden-text');
}

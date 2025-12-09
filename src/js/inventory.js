export function createItemTooltip(item) {
  const lastOcupiedItemSlot = Array.from(document.querySelectorAll('.inventory-items-list .occupied-slot'))
                                  .reverse()[0];
  const tooltipContainer = document.createElement('div');
  tooltipContainer.classList.add('item-tooltip');

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

  console.log(item);
}

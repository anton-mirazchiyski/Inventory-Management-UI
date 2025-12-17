import { hideItemTooltip, showItemTooltip } from "./tooltips.js";

const inventoryList = document.querySelector('.inventory ul.inventory-items-list');
const inventoryItemSlots = document.querySelectorAll('ul.inventory-items-list .item-slot');

export function moveItemToInventory(item) {
  const firstEmptySlot = document.querySelector('.inventory-items-list .empty-slot');
  const imageElement = document.createElement('img');
  imageElement.src = item['icon'];
  imageElement.alt = 'item-icon';
  firstEmptySlot.appendChild(imageElement);
  firstEmptySlot.classList.remove('empty-slot');
  firstEmptySlot.classList.add('occupied-slot');
}

let movingIcon = null, movingTooltip = null;

inventoryList.addEventListener('mousedown', (event) => {
  if (event.button == 0) {
    moveItem(event);
  }
});

inventoryList.addEventListener('mouseover', hoverInventoryItemSlot);

inventoryList.addEventListener('mouseout', hoverOutInventoryItemSlot);


function moveItem(event) {
  if (event.target.tagName == 'IMG') {
    const icon = event.target;
    const item = icon.parentElement;
    const itemTooltip = item.querySelector('.item-tooltip');

    item.removeEventListener('mouseenter', showItemTooltip);
    item.removeEventListener('mouseleave', hideItemTooltip);

    movingIcon = icon, movingTooltip = itemTooltip;

    item.classList.remove('occupied-slot');
    item.classList.add('empty-slot');
    const itemWidth = item.offsetWidth, itemHeight = item.offsetHeight;

    icon.style.maxWidth = itemWidth + 'px';
    icon.className = 'moving-icon';

    document.addEventListener('mousemove', (event) => {
      icon.style.left = (event.pageX - itemWidth / 2) + 'px';
      icon.style.top = (event.pageY - itemHeight / 2) + 'px';
    });
  }
}

function hoverInventoryItemSlot(event) {
  if (['LI', 'IMG'].includes(event.target.tagName)) {
    const inventoryItemSlot = event.target;

    if (movingIcon !== null) {
      inventoryItemSlot.style.boxShadow = '0 0 2px 2px darkblue';
    }
  }
}

function hoverOutInventoryItemSlot(event) {
  if (['LI', 'IMG'].includes(event.target.tagName)) {
    event.target.style.boxShadow = 'none';
  }
}

inventoryItemSlots.forEach(itemSlot => {

  itemSlot.addEventListener('mousedown', (event) => {
    if (movingIcon) {
      itemSlot.classList.remove('empty-slot');
      itemSlot.classList.add('occupied-slot');

      movingIcon.style.maxWidth = '100%';
      movingIcon.className = '';
      itemSlot.prepend(movingIcon);
      itemSlot.append(movingTooltip);

      itemSlot.addEventListener('mouseenter', showItemTooltip);
      itemSlot.addEventListener('mouseleave', hideItemTooltip);

      movingIcon = null, movingTooltip = null;
    }
  });
});

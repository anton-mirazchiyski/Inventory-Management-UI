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

inventoryList.addEventListener('mousedown', (event) => {
  if (event.button == 0) {
    moveItem(event);
  }
});

function moveItem(event) {
  if (event.target.tagName == 'IMG') {
    const icon = event.target;
    const item = icon.parentElement;
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

export function moveItemToInventory(item) {
  const firstEmptySlot = document.querySelector('.inventory-items-list .empty-slot');
  const imageElement = document.createElement('img');
  imageElement.src = item['icon'];
  imageElement.alt = 'item-icon';
  firstEmptySlot.appendChild(imageElement);
  firstEmptySlot.classList.remove('empty-slot');
  firstEmptySlot.classList.add('occupied-slot');
}

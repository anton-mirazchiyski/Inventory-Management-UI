const openChestButton = document.querySelector('button.chest-open-button');
const chestImage = document.querySelector('.chest-image-container > img');

openChestButton.addEventListener('click', openChest);

function openChest() {
  chestImage.src = 'assets/images/chest-opened.png';
  chestImage.alt = 'opened-chest';
}

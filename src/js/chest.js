const openChestButton = document.querySelector('button.chest-open-button');
const chestImage = document.querySelector('.chest-image-container > img');
const chestText = document.querySelector('section.chest .chest-tooltip');
const chestImageContainer = document.querySelector('.chest-image-container');

class Chest {
  chestStates = {
    closed: 'assets/images/chest-closed.png',
    opened: 'assets/images/chest-opened.png'
  };

  open() {
    chestImage.src = this.chestStates['opened'];
    chestImage.alt = 'opened-chest';
  }
}

const chest = new Chest();

openChestButton.addEventListener('click', () => {
  chest.open()
});

chestImage.addEventListener('mouseenter', showChestText);
chestImageContainer.addEventListener('mouseleave', hideChestText);


function showChestText() {
  chestText.classList.remove('hidden-text');
}

function hideChestText() {
  chestText.classList.add('hidden-text');
}

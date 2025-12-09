import { ArmorItem } from "./item.js";

const openChestButton = document.querySelector('button.chest-open-button');
const chestImage = document.querySelector('.chest-image-container > img');
const chestText = document.querySelector('section.chest .chest-tooltip');
const chestImageContainer = document.querySelector('.chest-image-container');

class Chest {
  chestStates = {
    closed: 'assets/images/chest-closed.png',
    opened: 'assets/images/chest-opened.png'
  };

  // lootCategories = ['armor', 'weapons', 'potions', 'shields'];
  lootCategories = ['armor'];

  lootRarityTypes = ['normal', 'rare'];

  open() {
    chestImage.src = this.chestStates['opened'];
    chestImage.alt = 'opened-chest';
  }

  pickRandomLootCategory() {
    return this.lootCategories[Math.floor(Math.random() * this.lootCategories.length)];
  }
}

const chest = new Chest();

openChestButton.addEventListener('click', () => {
  chest.open();
  const itemCategory = chest.pickRandomLootCategory();
  const item = createItem(itemCategory);
  console.log(item);
  showLootClaimBox(item);
});

chestImage.addEventListener('mouseenter', showChestText);
chestImageContainer.addEventListener('mouseleave', hideChestText);


function showChestText() {
  chestText.classList.remove('hidden-text');
}

function hideChestText() {
  chestText.classList.add('hidden-text');
}

function createItem(itemCategory) {
  switch(itemCategory) {
    case 'armor':
      return ArmorItem.createRandomItem();
  }
}

function showLootClaimBox(loot) {
  const lootClaimBox = document.createElement('div');
  lootClaimBox.classList.add('loot-claim-box');

  const iconContainer = document.createElement('div');
  iconContainer.classList.add('claim-item-container');
  const imageElement = document.createElement('img');
  imageElement.src = loot['icon'];
  imageElement.alt = 'item-icon';
  iconContainer.appendChild(imageElement);
  lootClaimBox.appendChild(iconContainer);

  const descriptionParagraph = document.createElement('p');
  descriptionParagraph.textContent = loot['description'];
  descriptionParagraph.classList.add('item-description');
  lootClaimBox.appendChild(descriptionParagraph);

  const buttonsContainer = document.createElement('div');
  const claimItemButton = document.createElement('button');
  claimItemButton.textContent = 'Claim Item';
  claimItemButton.classList.add('claim-item-button');
  buttonsContainer.appendChild(claimItemButton);
  lootClaimBox.appendChild(buttonsContainer);

  document.body.appendChild(lootClaimBox);
}

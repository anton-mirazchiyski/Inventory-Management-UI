import { ArmorItem, ChestArmor, HandsArmor } from "./item.js";
import { createItemTooltip } from "./inventory.js";

const openChestButton = document.querySelector('button.chest-open-button');
const chestSection = document.querySelector('section.chest');
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

  close() {
    chestImage.src = this.chestStates['closed'];
    chestImage.alt = 'closed-chest';
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
  // console.log(item);
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
      const randomArmorType = ArmorItem.armorTypes[Math.floor(Math.random() * ArmorItem.armorTypes.length)];
      switch (randomArmorType) {
        case 'chest':
          return ChestArmor.createRandomItem();
        case 'hands':
          return HandsArmor.createRandomItem();
      }
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
  claimItemButton.addEventListener('click', () => {
    moveItemToInventory(loot);
    closeLootClaimBox(lootClaimBox);
    chest.close();
    createItemTooltip(loot);
  });

  chestSection.appendChild(lootClaimBox);
}

function moveItemToInventory(item) {
  const firstEmptySlot = document.querySelector('.inventory-items-list .empty-slot');
  const imageElement = document.createElement('img');
  imageElement.src = item['icon'];
  imageElement.alt = 'inventory-item-icon';
  firstEmptySlot.appendChild(imageElement);
  firstEmptySlot.classList.remove('empty-slot');
  firstEmptySlot.classList.add('occupied-slot');
}

function closeLootClaimBox(lootClaimBox) {
  lootClaimBox.remove();
}

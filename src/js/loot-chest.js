import { ArmorItem, ChestArmor, HandsArmor, ShouldersArmor } from "./items/armor.js";
import { showLootClaimBox } from "./loot-claim-box.js";
import { getRandomArrayIndex } from "./utils.js";

const openChestButton = document.querySelector('button.chest-open-button');
const chestImage = document.querySelector('.chest-image-container > img');

class Chest {
  chestStates = {
    closed: 'assets/images/loot-chest/chest-closed.png',
    opened: 'assets/images/loot-chest/chest-opened.png'
  };

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
    return this.lootCategories[getRandomArrayIndex(this.lootCategories)];
  }
}

export const chest = new Chest();

openChestButton.addEventListener('click', () => {
  chest.open();
  const itemCategory = chest.pickRandomLootCategory();
  const item = determineChestLoot(itemCategory);
  showLootClaimBox(item);
});

function determineChestLoot(itemCategory) {
  switch(itemCategory) {
    case 'armor':
      const randomArmorType = ArmorItem.armorTypes[getRandomArrayIndex(ArmorItem.armorTypes)];
      switch (randomArmorType) {
        case 'chest':
          return ChestArmor.createRandomItem();
        case 'hands':
          return HandsArmor.createRandomItem();
        case 'shoulders':
          return ShouldersArmor.createRandomItem();
      }
  }
}

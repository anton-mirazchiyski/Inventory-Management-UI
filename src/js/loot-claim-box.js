import { moveItemToInventory } from "./inventory.js";
import { chest } from "./loot-chest.js";
import { createItemTooltip } from "./tooltips.js";

const chestSection = document.querySelector('section.chest');

export function showLootClaimBox(loot) {
  const lootClaimBox = document.createElement('div');
  lootClaimBox.classList.add('loot-claim-box');

  const closeBoxButton = document.createElement('span');
  closeBoxButton.innerHTML = '<i class="bi bi-x"></i>';
  closeBoxButton.classList.add('claim-box-close-button');
  closeBoxButton.addEventListener('click', () => {
    closeLootClaimBox(lootClaimBox);
    chest.close();
  });
  lootClaimBox.appendChild(closeBoxButton);

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

export function closeLootClaimBox(lootClaimBox) {
  lootClaimBox.remove();
}

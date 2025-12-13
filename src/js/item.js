import { getRandomItemData } from "./utils.js";

export class ArmorItem {
  static armorTypes = ['shoulders', 'chest', 'hands'];

  static armorRatings = [5, 10, 20, 35, 47];

  constructor(type, rating, icon, description) {
    this.type = type;
    this.rating = rating;
    this.icon = icon;
    this.description = description;
  }
}


export class ChestArmor extends ArmorItem {
  static armorType = 'chest';

  static icons = [
    'assets/images/armor/torso/chest-armor.png',
    'assets/images/armor/torso/abdominal-armor.png',
    'assets/images/armor/torso/chain-mail.png',
  ];

  static descriptions = [
    'It protects from devastating blows..',
    'An essential part of a warrior\'s equipment.'
  ];

  static createRandomItem() {
    const itemData = getRandomItemData(this.armorType, this.armorRatings, this.icons, this.descriptions);

    return new ChestArmor(...itemData);
  }
}


export class HandsArmor extends ArmorItem {
  static armorType = 'hands';

  static icons = [
    'assets/images/armor/hands/mailed-fist.png',
    'assets/images/armor/hands/gloves.png',
  ];

  static descriptions = [
    'Iron fists, to complement your gear.',
    'Reinforced gloves, for a stronger grip.',
    'Gloves of reinforced steel.'
  ];

  static createRandomItem() {
    const itemData = getRandomItemData(this.armorType, this.armorRatings, this.icons, this.descriptions);

    return new HandsArmor(...itemData);
  }
}


export class ShouldersArmor extends ArmorItem {
  static armorType = 'shoulders';

  static icons = [
    'assets/images/armor/shoulders/pauldrons.png',
    'assets/images/armor/shoulders/shoulder-armor.png',
  ];

  static descriptions = [
    'An essential part of a warrior\'s armor.',
    'A good protection for the shoulders.'
  ];

  static createRandomItem() {
    const itemData = getRandomItemData(this.armorType, this.armorRatings, this.icons, this.descriptions);

    return new ShouldersArmor(...itemData);
  }
}

export class ArmorItem {
  // static armorTypes = ['head', 'shoulders', 'torso', 'legs', 'hands'];
  static armorTypes = ['chest'];

  static armorRatings = [5, 10, 20, 35, 47];

  static descriptions = {
    head: ['A helm, worthy for a hero.'],
    shoulders: ['An essential part of a warrior\'s armor.'],
    torso: ['It protects from devastating blows..'],
    legs: ['A strong armor for the legs.'],
    hands: ['Iron fists, to complement your gear.']
  };

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
  ];

  static descriptions = [
    'It protects from devastating blows..',
  ];

  static createRandomItem() {
    const randomArmorRating = this.armorRatings[Math.floor(Math.random() * this.armorRatings.length)];
    const randomIcon = this.icons[Math.floor(Math.random() * this.icons.length)];
    const randomDescription = this.descriptions[Math.floor(Math.random() * this.descriptions.length)];

    return new ChestArmor(
      this.armorType,
      randomArmorRating,
      randomIcon,
      randomDescription
    );
  }
}

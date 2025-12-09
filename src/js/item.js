export class ArmorItem {
  // static armorTypes = ['head', 'shoulders', 'torso', 'legs', 'hands'];
  static armorTypes = ['torso'];

  static armorRatings = [5, 10, 20, 35, 47];

  static armorIcons = {
    torso: ['assets/images/armor/torso/chest-armor.png',]
  };

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

  static createRandomItem() {
    const randomArmorType = this.armorTypes[Math.floor(Math.random() * this.armorTypes.length)];
    const randomArmorRating = this.armorRatings[Math.floor(Math.random() * this.armorRatings.length)];

    const iconsCount = this.armorIcons[randomArmorType].length;
    const randomArmorIcon = this.armorIcons[randomArmorType][Math.floor(Math.random() * iconsCount)];

    const descriptionsCount = this.descriptions[randomArmorType].length;
    const randomItemDescription = this.descriptions[randomArmorType][Math.floor(Math.random() * descriptionsCount)];

    return new ArmorItem(
      randomArmorType,
      randomArmorRating,
      randomArmorIcon,
      randomItemDescription
    );
  }
}

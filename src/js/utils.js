export function getRandomItemData(type, armorRatings, icons, descriptions) {
  const randomArmorRating = armorRatings[getRandomArrayIndex(armorRatings)];
  const randomIcon = icons[getRandomArrayIndex(icons)];
  const randomDescription = descriptions[getRandomArrayIndex(descriptions)];

  return [type, randomArmorRating, randomIcon, randomDescription];
}

export function getRandomArrayIndex(array) {
  return Math.floor(Math.random() * array.length);
}

const equipmentButton = document.querySelector('.equipment .info button');
const equipmentSlots = document.querySelector('.equipment .equipment-slots');


equipmentButton.addEventListener('click', toggleEquipmentVisibility);

function toggleEquipmentVisibility() {
  if (equipmentButton.textContent === 'Hide') {
    equipmentButton.textContent = 'Show Equipment';
    equipmentSlots.classList.add('hidden-equipment');
  } else {
    equipmentButton.textContent = 'Hide';
    equipmentSlots.classList.remove('hidden-equipment');
  }
}

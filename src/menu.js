export default function menuTab() {
  const infoDiv = document.querySelector('.info')

  const foodTxtEl = document.createElement('p')
  foodTxtEl.textContent = 'Wagyu Fillet 9oz'
  infoDiv.appendChild(foodTxtEl)
}

export default function menuTab() {
  const infoDiv = document.querySelector('.info')

  const foodTxtEl = document.createElement('h3')
  foodTxtEl.textContent = 'SIRLOIN 12OZ'
  infoDiv.appendChild(foodTxtEl)

  const foodTxtEl2 = document.createElement('h3')
  foodTxtEl2.textContent = 'RIBEYE 12OZ'
  infoDiv.appendChild(foodTxtEl2)

  const foodTxtEl3 = document.createElement('h3')
  foodTxtEl3.textContent = 'T-BONE 20OZ'
  infoDiv.appendChild(foodTxtEl3)

  const foodTxtEl4 = document.createElement('h3')
  foodTxtEl4.textContent = 'BLACK ANGUS FILET MIGNON 10OZ'
  infoDiv.appendChild(foodTxtEl4)
}

export default function contactTab() {
  const infoDiv = document.querySelector('.info')
  const addressTxtEl = document.createElement('h1')
  const numberTxtEl = document.createElement('h3')

  addressTxtEl.className = 'address'
  addressTxtEl.textContent = '123 Fake street, City, Country, FS000'
  infoDiv.appendChild(addressTxtEl)

  numberTxtEl.className = 'tel-Num'
  numberTxtEl.textContent = '+44 7000 0000'
  infoDiv.appendChild(numberTxtEl)
}

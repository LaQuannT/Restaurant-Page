export default function pageLoad() {
  const contentEl = document.getElementById('content')
  const headerEl = document.createElement('header')
  headerEl.className = 'top-bar'
  contentEl.appendChild(headerEl)

  const getHeaderEl = document.querySelector('.top-bar')
  const headerdivEl = document.createElement('div')
  headerdivEl.className = 'options options-left'
  headerdivEl.innerHTML = '<p id="menu-link">Menu</p>'
  getHeaderEl.appendChild(headerdivEl)

  const h1El = document.createElement('h1')
  h1El.className = 'res-name'
  h1El.textContent = 'Restaurant De Steak'
  getHeaderEl.appendChild(h1El)

  const headerdivEl2 = document.createElement('div')
  headerdivEl2.className = 'options options-right'
  headerdivEl2.innerHTML =
    '<p id="about-link">About</p><p id="contacts-link">Contact</p>'
  getHeaderEl.appendChild(headerdivEl2)

  const divEl = document.createElement('div')
  divEl.classList = 'info'
  contentEl.appendChild(divEl)
}

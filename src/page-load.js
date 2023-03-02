export default function pageLoad() {
  const contentEl = document.getElementById('content')
  const headerEl = document.createElement('header')
  headerEl.className = 'top-bar'
  contentEl.appendChild(headerEl)

  const getHeaderEl = document.querySelector('.top-bar')
  const headerdivEl = document.createElement('div')
  headerdivEl.className = 'options options-left'
  headerdivEl.innerHTML = '<a href="" id="home-link">Home</a>'
  getHeaderEl.appendChild(headerdivEl)

  const h1El = document.createElement('h1')
  h1El.textContent = 'Restaurant De Steak'
  getHeaderEl.appendChild(h1El)

  const headerdivEl2 = document.createElement('div')
  headerdivEl2.className = 'options options-right'
  headerdivEl2.innerHTML =
    '<a href="" id="menu-link">Menu</a><a href="" id="contacts-link">Contacts</a>'
  getHeaderEl.appendChild(headerdivEl2)

  const divEl = document.createElement('div')
  divEl.classList = 'info'
  contentEl.appendChild(divEl)
}

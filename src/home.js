export default function homeTab() {
  const infoDiv = document.querySelector('.info')
  const h1El = document.createElement('h1')
  const textEl = document.createElement('p')
  h1El.textContent = 'A mordern Take on steak houses'
  infoDiv.appendChild(h1El)

  textEl.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  infoDiv.appendChild(textEl)
}

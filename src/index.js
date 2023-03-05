import pageLoad from './page-load'
import aboutTab from './about'
import contactTab from './contacts'
import menuTab from './menu'

pageLoad()
const infoDiv = document.querySelector('.info')
const resName = document.querySelector('.res-name')
const menuLink = document.querySelector('#menu-link')
const aboutLink = document.querySelector('#about-link')
const contactLink = document.querySelector('#contacts-link')

let links = [menuLink, aboutLink, contactLink]

links.forEach((link) => {
  link.addEventListener('click', () => {
    clearContent()
    displayContent(link.textContent)
  })
})

resName.addEventListener('click', () => {
  clearContent()
  infoDiv.style.backgroundImage = 'url(../dist/imgs/background.jpg)'
})

function clearContent() {
  infoDiv.style.backgroundImage = 'none'
  infoDiv.innerHTML = ''
}

function displayContent(element) {
  return element === 'Menu'
    ? menuTab()
    : element === 'About'
    ? aboutTab()
    : contactTab()
}

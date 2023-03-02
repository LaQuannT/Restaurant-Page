import pageLoad from './page-load'
import homeTab from './home'

pageLoad()

const homeLink = document.querySelector('#home-link')
homeLink.addEventListener('click', () => {
  homeTab()
})

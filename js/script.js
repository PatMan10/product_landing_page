function openNavDrawer() {
  const navD = document.getElementById('nav-drawer')
  const main = document.getElementById('main')
  navD.style.setProperty('width', '250px')
  main.style.setProperty('margin-left', '250px')
}

function closeNavDrawer() {
  const navD = document.getElementById('nav-drawer')
  const main = document.getElementById('main')
  navD.style.setProperty('width', '0')
  main.style.setProperty('margin-left', '0')
}

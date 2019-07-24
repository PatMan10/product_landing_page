function zol() {
  console.log(window.innerWidth)
}

function adjustYOffset() {
  setTimeout(() => {
    const diff = window.innerWidth < 601 ? 100 : 130
    const curY = window.pageYOffset
    if (curY < diff) return
    const newY = curY - diff
    window.scrollTo(0, newY)
  }, 5)
}

function openNavDrawer() {
  const navD = document.getElementById('nav-drawer')
  navD.style.setProperty('left', '0')
}

function closeNavDrawer() {
  const navD = document.getElementById('nav-drawer')
  navD.style.setProperty('left', '-250px')
}

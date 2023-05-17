const headerArea = document.querySelector("#area");

const updateElementsNavar = elementsNavar.map((data) => {
  return {
    ...data,
    openMenuImgSrc: `.${data.openMenuImgSrc}`,
    closeMenuImgSrc: `.${data.closeMenuImgSrc}`,

    logoSrc: `.${data.logoSrc}`,

    homeLink: "../index.html",

    blogsLink: "./blogs.html",

    eventsLink: "./events.html",

    projectsLink: "./projects.html",
  }
})

updateElementsNavar.map((l) => {
  const navarMobileArea = new navar(l)
  const navarElementArea = navarMobileArea.navarMobile()
  headerArea.appendChild(navarElementArea)
})
updateElementsNavar.map((l) => {
    console.log(l)
  const navarDesktopArea = new navar(l)
  const navarElementArea = navarDesktopArea.navarDesktop()
  headerArea.appendChild(navarElementArea)
})
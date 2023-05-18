const headerBlogs = document.querySelector("#blogs");

const updateelementsNavar = elementsNavarAndFooter.map((data) => {
  return {
    ...data,
    openMenuImgSrc: `../.${data.openMenuImgSrc}`,
    closeMenuImgSrc: `../.${data.closeMenuImgSrc}`,

    logoSrc: `../.${data.logoSrc}`,

    homeLink: "../../index.html",

    blogsLink: "../blogs.html",

    eventsLink: "../events.html",

    projectsLink: "../projects.html",
  }
})

updateelementsNavar.map((l) => {
  const navarMobileBlogs = new Navar(l)
  const navarElementBlogs = navarMobileBlogs.navarMobile()
  headerBlogs.appendChild(navarElementBlogs)
})
updateelementsNavar.map((l) => {
    console.log(l)
  const navarDesktopArea = new Navar(l)
  const navarElementBlogs = navarDesktopArea.navarDesktop()
  headerBlogs.appendChild(navarElementBlogs)
})
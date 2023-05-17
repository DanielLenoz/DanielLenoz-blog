const headerBlogs = document.querySelector("#blogs");

const updateElementsNavar = elementsNavar.map((data) => {
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

updateElementsNavar.map((l) => {
  const navarMobileBlogs = new navar(l)
  const navarElementBlogs = navarMobileBlogs.navarMobile()
  headerBlogs.appendChild(navarElementBlogs)
})
updateElementsNavar.map((l) => {
    console.log(l)
  const navarDesktopArea = new navar(l)
  const navarElementBlogs = navarDesktopArea.navarDesktop()
  headerBlogs.appendChild(navarElementBlogs)
})
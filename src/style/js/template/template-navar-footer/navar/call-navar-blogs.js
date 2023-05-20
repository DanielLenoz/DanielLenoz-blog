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
  };
});

updateelementsNavar.map((data) => {
  const navarMobileBlogs = new Navar(data);
  const navarElementBlogs = navarMobileBlogs.navarMobile();
  headerBlogs.appendChild(navarElementBlogs);
});
updateelementsNavar.map((data) => {
  const navarDesktopArea = new Navar(data);
  const navarElementBlogs = navarDesktopArea.navarDesktop();
  headerBlogs.appendChild(navarElementBlogs);
});

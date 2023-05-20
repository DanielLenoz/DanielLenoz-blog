const headerArea = document.querySelector("#area");

const updateelementsNavar = elementsNavarAndFooter.map((data) => {
  return {
    ...data,
    openMenuImgSrc: `.${data.openMenuImgSrc}`,
    closeMenuImgSrc: `.${data.closeMenuImgSrc}`,

    logoSrc: `.${data.logoSrc}`,

    homeLink: "../index.html",

    blogsLink: "./blogs.html",

    eventsLink: "./events.html",

    projectsLink: "./projects.html",
  };
});

updateelementsNavar.map((data) => {
  const navarMobileArea = new Navar(data);
  const navarElementArea = navarMobileArea.navarMobile();
  headerArea.appendChild(navarElementArea);
});
updateelementsNavar.map((data) => {
  const navarDesktopArea = new Navar(data);
  const navarElementArea = navarDesktopArea.navarDesktop();
  headerArea.appendChild(navarElementArea);
});

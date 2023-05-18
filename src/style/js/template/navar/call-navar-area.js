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

updateelementsNavar.map((l) => {
  const navarMobileArea = new Navar(l);
  const navarElementArea = navarMobileArea.navarMobile();
  headerArea.appendChild(navarElementArea);
});
updateelementsNavar.map((l) => {
  const navarDesktopArea = new Navar(l);
  const navarElementArea = navarDesktopArea.navarDesktop();
  headerArea.appendChild(navarElementArea);
});

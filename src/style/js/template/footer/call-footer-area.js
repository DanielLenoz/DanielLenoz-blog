const footerArea = document.querySelector("#footer-area");

const updatedElementsFooter = elementsNavarAndFooter.map((data) => {
  return {
    ...data,

    logoSrc: `.${data.logoSrc}`,
    linkedinSrc: `.${data.linkedinSrc}`,
    githubSrc: `.${data.githubSrc}`,

    homeLink: "../index.html",

    blogsLink: "./blogs.html",

    eventsLink: "./events.html",

    projectsLink: "./projects.html",
  };
});

updatedElementsFooter.map((z) => {
  const footerAreaAll = new Footer(z);
  const footerElement = footerAreaAll.createFooter();
  footerArea.appendChild(footerElement);
});

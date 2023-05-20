const footerBlogs = document.querySelector("#footer-blogs");

const updatedElementsFooter = elementsNavarAndFooter.map((data) => {
  return {
    ...data,

    logoSrc: `../.${data.logoSrc}`,
    linkedinSrc: `../.${data.linkedinSrc}`,
    githubSrc: `../.${data.githubSrc}`,

    homeLink: "../../index.html",

    blogsLink: "../blogs.html",

    eventsLink: "../events.html",

    projectsLink: "../projects.html",
  };
});

updatedElementsFooter.map((data) => {
  const footerBlogsAll = new Footer(data);
  const footerElement = footerBlogsAll.createFooter();
  footerBlogs.appendChild(footerElement);
});

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
  }
})


updatedElementsFooter.map((z) => {
    const footerBlogsAll = new Footer(z);
    const footerElement = footerBlogsAll.createFooter(); 
    footerBlogs.appendChild(footerElement);
    console.log(footerBlogsAll)
    console.log(footerBlogs)
});
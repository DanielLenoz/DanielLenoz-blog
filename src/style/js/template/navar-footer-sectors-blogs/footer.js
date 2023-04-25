// contenedor de footer
const footer = document.querySelector("footer");

//*modelo iphone */

const elementsHTMlIphones = [
  {
    imgLinkedin: "../src/img/assets/icons-redes/linkedin.svg",
    imgGithub: "../src/img/assets/icons-redes/github.svg",
    imgLogo: "../src/img/assets/icons-redes/logo_daniel.svg",

    textFooter:
      "La organización es el principio de la planeación y el nacimiento de la creación",

    linkeHome: "../index.html",
    textHome: "Home",

    linkeBlogs: "./blogs.html",
    textBlog: "Blogs",

    linkeEvents: "./events.html",
    textEvents: "Events",

    linkeProjects: "./projects.html",
    textProjects: "Projects",

    linkeContact: "#",
    textContact: "Contact",

    linkLinkedin:
      "https://www.linkedin.com/in/daniel-steven-rodriguez-verano-417472241/",
    linkGithub: "https://github.com/DanielLenoz",
  },
];

elementsHTMlIphones.forEach((elIphone) => {
  //** container footer text
  const containerFooterText = document.createElement("section");
  containerFooterText.classList.add("container_footer--text");
  const footerText = document.createElement("p");
  footerText.classList.add("footer-text");
  footerText.innerText = `${elIphone.textFooter}`;

  containerFooterText.append(footerText);
  //** footer menu
  const footerMenu = document.createElement("section");
  footerMenu.classList.add("footer_menu");

  //*home
  const aShareLinkHome = document.createElement("a");
  aShareLinkHome.classList.add("share_link");
  aShareLinkHome.setAttribute("href", elIphone.linkeHome);
  aShareLinkHome.setAttribute("aria-label", "devuelta a la pagina principal");
  aShareLinkHome.innerText = `${elIphone.textHome}`;

  //*blogs
  const aShareLinkBlogs = document.createElement("a");
  aShareLinkBlogs.classList.add("share_link");
  aShareLinkBlogs.setAttribute("href", elIphone.linkeBlogs);
  aShareLinkBlogs.setAttribute("aria-label", "area de solo blogs");
  aShareLinkBlogs.innerText = `${elIphone.textBlog}`;

  //*events
  const aShareLinkEvents = document.createElement("a");
  aShareLinkEvents.classList.add("share_link");
  aShareLinkEvents.setAttribute("href", elIphone.linkeEvents);
  aShareLinkEvents.setAttribute("aria-label", "area de solo eventos");
  aShareLinkEvents.innerText = `${elIphone.textEvents}`;

  //*projects
  const aShareLinkProjects = document.createElement("a");
  aShareLinkProjects.classList.add("share_link");
  aShareLinkProjects.setAttribute("href", elIphone.linkeProjects);
  aShareLinkProjects.setAttribute("aria-label", "area de solo proyectos");
  aShareLinkProjects.innerText = `${elIphone.textProjects}`;
  //*contact
  const aShareLinkContact = document.createElement("a");
  aShareLinkContact.classList.add("share_link");
  aShareLinkContact.setAttribute("href", elIphone.linkeContact);
  aShareLinkContact.setAttribute("aria-label", "area de contacto");
  aShareLinkContact.innerText = `${elIphone.textContact}`;

  footerMenu.append(
    aShareLinkHome,
    aShareLinkBlogs,
    aShareLinkEvents,
    aShareLinkProjects,
    aShareLinkContact
  );

  //** footer contact
  const footerContact = document.createElement("section");
  footerContact.classList.add("footer_contact");
  const contactText = document.createElement("p");
  contactText.classList.add("contact_text");
  contactText.innerText = `Contactame`;

  const containerIconsContact = document.createElement("article");
  containerIconsContact.classList.add("container_icons--contact");
  const linkLinkedin = document.createElement("a");
  linkLinkedin.setAttribute("href", elIphone.linkLinkedin);
  linkLinkedin.setAttribute("aria-label", "linke para el perfil de linkedin");
  const imgLinkedin = document.createElement("img");
  imgLinkedin.setAttribute("src", elIphone.imgLinkedin);
  imgLinkedin.setAttribute("alt", "logo de linkedin");
  linkLinkedin.appendChild(imgLinkedin);

  const linkGithub = document.createElement("a");
  linkGithub.setAttribute("href", elIphone.linkGithub);
  linkGithub.setAttribute("aria-label", "linke al perfil de github");
  const imgGithub = document.createElement("img");
  imgGithub.setAttribute("src", elIphone.imgGithub);
  imgGithub.setAttribute("alt", "logo de github");
  linkGithub.appendChild(imgGithub);

  containerIconsContact.append(linkLinkedin, linkGithub);

  footerContact.append(contactText, containerIconsContact);
  //**footer property
  const footerProperty = document.createElement("section");
  footerProperty.classList.add("footer_property");
  const imgLogo = document.createElement("img");
  imgLogo.setAttribute("src", elIphone.imgLogo);
  imgLogo.setAttribute("alt", "logo de Daniel");
  const propertyText = document.createElement("p");
  propertyText.classList.add("property_text");
  propertyText.innerText = `© 2023 Daniel`;

  footerProperty.append(imgLogo, propertyText);

  //**contatenacion del HTML */
  footer.append(containerFooterText, footerMenu, footerContact, footerProperty);
});

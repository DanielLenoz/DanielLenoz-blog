
class Navar {
  constructor({ 
    openMenuImgSrc,
    closeMenuImgSrc,
    logoSrc,
    homeLink,
    homeText,
    blogsLink,
    blogsText,
    eventsLink,
    eventsText,
    projectsLink,
    projectsText,
    contactLink,
    contactText
  }) {
    this.openMenuImgSrc = openMenuImgSrc;
    this.closeMenuImgSrc = closeMenuImgSrc;
    this.logoSrc = logoSrc;
    this.homeLink = homeLink;
    this.homeText = homeText;
    this.blogsLink = blogsLink;
    this.blogsText = blogsText;
    this.eventsLink = eventsLink;
    this.eventsText = eventsText;
    this.projectsLink = projectsLink;
    this.projectsText = projectsText;
    this.contactLink = contactLink;
    this.contactText = contactText;

  }

  navarMobile() {
    const navarMobile = document.createElement("nav");
  navarMobile.classList.add("navar--mobile");

  const menuIcon = document.createElement("div");
  menuIcon.classList.add("menu--icon");

  const imgOpen = document.createElement("img");
  imgOpen.classList.add("menu");
  imgOpen.setAttribute("src", this.openMenuImgSrc);
  imgOpen.setAttribute("alt", "menu cerrado");

  const imgClose = document.createElement("img");
  imgClose.classList.add("close");
  imgClose.classList.add("inactive");
  imgClose.setAttribute("src", this.closeMenuImgSrc);
  imgClose.setAttribute("alt", "menu abierto");
  //---------------
  const containerMenuMobile = document.createElement("div");
  containerMenuMobile.classList.add("container_menu-mobile");
  containerMenuMobile.classList.add("inactive");
  const brilloTop = document.createElement("div");
  brilloTop.classList.add("brillo-top");
  const redContainer = document.createElement("div");
  redContainer.classList.add("red_container");
  const brillobottom = document.createElement("div");
  brillobottom.classList.add("brillo-bottom");
  //----
  //*home
  const contenidoHome = document.createElement("div");
  contenidoHome.classList.add("contenido");
  const aShareLinkHome = document.createElement("a");
  aShareLinkHome.classList.add("share_link");
  aShareLinkHome.setAttribute("href", this.homeLink);
  aShareLinkHome.setAttribute("aria-label", "devuelta a la pagina principal");
  aShareLinkHome.innerText = `${this.homeText}`;

  contenidoHome.appendChild(aShareLinkHome);
  //*Blogs
  const contenidoBlogs = document.createElement("div");
  contenidoBlogs.classList.add("contenido");
  const aShareLinkBlogs = document.createElement("a");
  aShareLinkBlogs.classList.add("share_link");
  aShareLinkBlogs.setAttribute("href", this.blogsLink);
  aShareLinkBlogs.setAttribute("aria-label", "area de solo blogs");
  aShareLinkBlogs.innerText = `${this.blogsText}`;

  contenidoBlogs.appendChild(aShareLinkBlogs);
  //*events
  const contenidoEvents = document.createElement("div");
  contenidoEvents.classList.add("contenido");
  const aShareLinkEvents = document.createElement("a");
  aShareLinkEvents.classList.add("share_link");
  aShareLinkEvents.setAttribute("href", this.eventsLink);
  aShareLinkEvents.setAttribute("aria-label", "area de solo eventos");
  aShareLinkEvents.innerText = `${this.eventsText}`;

  contenidoEvents.appendChild(aShareLinkEvents);
  //*projects
  const contenidoProjects = document.createElement("div");
  contenidoProjects.classList.add("contenido");
  const aShareLinkProjects = document.createElement("a");
  aShareLinkProjects.classList.add("share_link");
  aShareLinkProjects.setAttribute("href", this.projectsLink);
  aShareLinkProjects.setAttribute("aria-label", "area de solo proyectos");
  aShareLinkProjects.innerText = `${this.projectsText}`;

  contenidoProjects.appendChild(aShareLinkProjects);
  //*contact
  const contenidoContact = document.createElement("div");
  contenidoContact.classList.add("contenido");
  const aShareLinkContact = document.createElement("a");
  aShareLinkContact.classList.add("share_link");
  aShareLinkContact.setAttribute("href", this.contactLink);
  aShareLinkContact.setAttribute("aria-label", "area de contacto");
  aShareLinkContact.innerText = `${this.contactText}`;

  contenidoContact.appendChild(aShareLinkContact);
  //----
  //** Contatenacion de todo los elementos
  redContainer.append(
    contenidoHome,
    contenidoBlogs,
    contenidoEvents,
    contenidoProjects,
    contenidoContact
  );

  containerMenuMobile.append(brilloTop, redContainer, brillobottom);
  menuIcon.append(imgOpen, imgClose);

    navarMobile.append(menuIcon, containerMenuMobile);
    
    return navarMobile
  }

  navarDesktop() {
    const navarDesktop = document.createElement("nav");
  navarDesktop.classList.add("navar--desktop");

  const containerMenuDesktop = document.createElement("div");
  containerMenuDesktop.classList.add("container_menu-desktop");
  const redContainer = document.createElement("div");
  redContainer.classList.add("red_container");
  //----
  const containerLogo = document.createElement("div");
  containerLogo.classList.add("container_logo");
  const imgLogo = document.createElement("img");
  imgLogo.setAttribute("src", this.logoSrc);
  imgLogo.setAttribute("alt", "logo de Daniel");
  const textLogo = document.createElement("p");
  textLogo.classList.add("text_logo");
  textLogo.innerText = "Blog";
  containerLogo.append(imgLogo, textLogo);
  //----
  //*home
  const contenidoHome = document.createElement("div");
  contenidoHome.classList.add("contenido");
  const aShareLinkHome = document.createElement("a");
  aShareLinkHome.classList.add("share_link");
  aShareLinkHome.setAttribute("href", this.homeLink);
  aShareLinkHome.setAttribute("aria-label", "devuelta a la pagina principal");
  aShareLinkHome.innerText = `${this.homeText}`;

  contenidoHome.appendChild(aShareLinkHome);
  //*Blogs
  const contenidoBlogs = document.createElement("div");
  contenidoBlogs.classList.add("contenido");
  const aShareLinkBlogs = document.createElement("a");
  aShareLinkBlogs.classList.add("share_link");
  aShareLinkBlogs.setAttribute("href", this.blogsLink);
  aShareLinkBlogs.setAttribute("aria-label", "area de solo blogs");
  aShareLinkBlogs.innerText = `${this.blogsText}`;

  contenidoBlogs.appendChild(aShareLinkBlogs);
  //*Events
  const contenidoEvents = document.createElement("div");
  contenidoEvents.classList.add("contenido");
  const aShareLinkEvents = document.createElement("a");
  aShareLinkEvents.classList.add("share_link");
  aShareLinkEvents.setAttribute("href", this.eventsLink);
  aShareLinkEvents.setAttribute("aria-label", "area de solo eventos");
  aShareLinkEvents.innerText = `${this.eventsText}`;

  contenidoEvents.appendChild(aShareLinkEvents);
  //*projects
  const contenidoProjects = document.createElement("div");
  contenidoProjects.classList.add("contenido");
  const aShareLinkProjects = document.createElement("a");
  aShareLinkProjects.classList.add("share_link");
  aShareLinkProjects.setAttribute("href", this.projectsLink);
  aShareLinkProjects.setAttribute("aria-label", "area de solo proyectos");
  aShareLinkProjects.innerText = `${this.projectsText}`;

  contenidoProjects.appendChild(aShareLinkProjects);
  //*contact
  const contenidoContact = document.createElement("div");
  contenidoContact.classList.add("contenido");
  const aShareLinkContact = document.createElement("a");
  aShareLinkContact.classList.add("share_link");
  aShareLinkContact.setAttribute("href", this.contactLink);
  aShareLinkContact.setAttribute("aria-label", "area de contacto");
  aShareLinkContact.innerText = `${this.contactText}`;

  contenidoContact.appendChild(aShareLinkContact);
  //*concatenacion de los elementos
  redContainer.append(
    contenidoHome,
    contenidoBlogs,
    contenidoEvents,
    contenidoProjects,
    contenidoContact
  );

  containerMenuDesktop.appendChild(redContainer);
    navarDesktop.append(containerLogo, containerMenuDesktop);
    
    return navarDesktop
  }
}
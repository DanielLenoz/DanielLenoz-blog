//navar contenido
const header = document.querySelector("header");
//*modelo iphone

const elementsHTMlIphone = [
  {
    imgOpen: "../src/img/assets/icons-template/menu_open.svg",
    imgClose: "../src/img/assets/icons-template/menu_close.svg",

    linkeHome: "../index.html",
    textHome: "Home",

    linkeBlogs: "./blogs.html",
    textBlogs: "Blogs",

    linkeEvents: "./events.html",
    textEvents: "Events",

    linkeProjects: "./projects.html",
    textProjects: "Projects",

    linkeContact: "#",
    textContact: "Contact",
  },
];

elementsHTMlIphone.forEach((elIphone) => {
  const navarMobile = document.createElement("nav");
  navarMobile.classList.add("navar--mobile");

  const menuIcon = document.createElement("div");
  menuIcon.classList.add("menu--icon");

  const imgOpen = document.createElement("img");
  imgOpen.classList.add("menu");
  imgOpen.setAttribute("src", elIphone.imgOpen);
  imgOpen.setAttribute("alt", "menu cerrado");

  const imgClose = document.createElement("img");
  imgClose.classList.add("close");
  imgClose.classList.add("inactive");
  imgClose.setAttribute("src", elIphone.imgClose);
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
  aShareLinkHome.setAttribute("href", elIphone.linkeHome);
  aShareLinkHome.setAttribute("aria-label", "devuelta a la pagina principal");
  aShareLinkHome.innerText = `${elIphone.textHome}`;

  contenidoHome.appendChild(aShareLinkHome);
  //*Blogs
  const contenidoBlogs = document.createElement("div");
  contenidoBlogs.classList.add("contenido");
  const aShareLinkBlogs = document.createElement("a");
  aShareLinkBlogs.classList.add("share_link");
  aShareLinkBlogs.setAttribute("href", elIphone.linkeBlogs);
  aShareLinkBlogs.setAttribute("aria-label", "area de solo blogs");
  aShareLinkBlogs.innerText = `${elIphone.textBlogs}`;

  contenidoBlogs.appendChild(aShareLinkBlogs);
  //*events
  const contenidoEvents = document.createElement("div");
  contenidoEvents.classList.add("contenido");
  const aShareLinkEvents = document.createElement("a");
  aShareLinkEvents.classList.add("share_link");
  aShareLinkEvents.setAttribute("href", elIphone.linkeEvents);
  aShareLinkEvents.setAttribute("aria-label", "area de solo eventos");
  aShareLinkEvents.innerText = `${elIphone.textEvents}`;

  contenidoEvents.appendChild(aShareLinkEvents);
  //*projects
  const contenidoProjects = document.createElement("div");
  contenidoProjects.classList.add("contenido");
  const aShareLinkProjects = document.createElement("a");
  aShareLinkProjects.classList.add("share_link");
  aShareLinkProjects.setAttribute("href", elIphone.linkeProjects);
  aShareLinkProjects.setAttribute("aria-label", "area de solo proyectos");
  aShareLinkProjects.innerText = `${elIphone.textProjects}`;

  contenidoProjects.appendChild(aShareLinkProjects);
  //*contact
  const contenidoContact = document.createElement("div");
  contenidoContact.classList.add("contenido");
  const aShareLinkContact = document.createElement("a");
  aShareLinkContact.classList.add("share_link");
  aShareLinkContact.setAttribute("href", elIphone.linkeContact);
  aShareLinkContact.setAttribute("aria-label", "area de contacto");
  aShareLinkContact.innerText = `${elIphone.textContact}`;

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
  header.append(navarMobile);
});
//!--------
elementsHTMlDesktop = [
  {
    logo: "../src/img/assets/icons-redes/logo_daniel.svg",

    linkeHome: "../index.html",
    textHome: "Home",

    linkeBlogs: "./blogs.html",
    textBlogs: "Blogs",

    linkeEvents: "./events.html",
    textEvents: "Events",

    linkeProjects: "./projects.html",
    textProjects: "Projects",

    linkeContact: "#",
    textContact: "Contact",
  },
];

elementsHTMlDesktop.forEach((elDesktop) => {
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
  imgLogo.setAttribute("src", elDesktop.logo);
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
  aShareLinkHome.setAttribute("href", elDesktop.linkeHome);
  aShareLinkHome.setAttribute("aria-label", "devuelta a la pagina principal");
  aShareLinkHome.innerText = `${elDesktop.textHome}`;

  contenidoHome.appendChild(aShareLinkHome);
  //*Blogs
  const contenidoBlogs = document.createElement("div");
  contenidoBlogs.classList.add("contenido");
  const aShareLinkBlogs = document.createElement("a");
  aShareLinkBlogs.classList.add("share_link");
  aShareLinkBlogs.setAttribute("href", elDesktop.linkeBlogs);
  aShareLinkBlogs.setAttribute("aria-label", "area de solo blogs");
  aShareLinkBlogs.innerText = `${elDesktop.textBlogs}`;

  contenidoBlogs.appendChild(aShareLinkBlogs);
  //*Events
  const contenidoEvents = document.createElement("div");
  contenidoEvents.classList.add("contenido");
  const aShareLinkEvents = document.createElement("a");
  aShareLinkEvents.classList.add("share_link");
  aShareLinkEvents.setAttribute("href", elDesktop.linkeEvents);
  aShareLinkEvents.setAttribute("aria-label", "area de solo eventos");
  aShareLinkEvents.innerText = `${elDesktop.textEvents}`;

  contenidoEvents.appendChild(aShareLinkEvents);
  //*projects
  const contenidoProjects = document.createElement("div");
  contenidoProjects.classList.add("contenido");
  const aShareLinkProjects = document.createElement("a");
  aShareLinkProjects.classList.add("share_link");
  aShareLinkProjects.setAttribute("href", elDesktop.linkeProjects);
  aShareLinkProjects.setAttribute("aria-label", "area de solo proyectos");
  aShareLinkProjects.innerText = `${elDesktop.textProjects}`;

  contenidoProjects.appendChild(aShareLinkProjects);
  //*contact
  const contenidoContact = document.createElement("div");
  contenidoContact.classList.add("contenido");
  const aShareLinkContact = document.createElement("a");
  aShareLinkContact.classList.add("share_link");
  aShareLinkContact.setAttribute("href", elDesktop.linkeContact);
  aShareLinkContact.setAttribute("aria-label", "area de contacto");
  aShareLinkContact.innerText = `${elDesktop.textContact}`;

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

  header.appendChild(navarDesktop);
});

//navar iconos
const menuHamberIconOpen = document.querySelector(".menu");
const menuHamberIconClose = document.querySelector(".close");
const containerMenuMobile = document.querySelector(".container_menu-mobile");

menuHamberIconOpen.addEventListener("click", openMobileMenu);
menuHamberIconClose.addEventListener("click", closeMobileMenu);

function openMobileMenu() {
  menuHamberIconOpen.classList.add("inactive");
  menuHamberIconClose.classList.remove("inactive");
  containerMenuMobile.classList.remove("inactive");
}

function closeMobileMenu() {
  menuHamberIconOpen.classList.remove("inactive");
  menuHamberIconClose.classList.add("inactive");
  containerMenuMobile.classList.add("inactive");
}

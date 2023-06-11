class Footer extends Navar {
  constructor({
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
    contactText,
    footerText,
    linkedinSrc,
    linkedinLink,
    githubSrc,
    githubLink,
  }) {
    super({
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
      contactText,
    });
    this.footerText = footerText;
    this.linkedinSrc = linkedinSrc;
    this.linkedinLink = linkedinLink;
    this.githubSrc = githubSrc;
    this.githubLink = githubLink;
  }
  createFooter() {
    const footerSecntion = document.createElement("section");
    footerSecntion.classList.add("footer");
    const containerFooterText = document.createElement("section");
    containerFooterText.classList.add("container_footer--text");
    const footerText = document.createElement("p");
    footerText.classList.add("footer-text");
    footerText.innerText = `${this.footerText}`;

    containerFooterText.append(footerText);

    const footerMenu = document.createElement("section");
    footerMenu.classList.add("footer_menu");

    const aShareLinkHome = document.createElement("a");
    aShareLinkHome.classList.add("share_link");
    aShareLinkHome.setAttribute("href", this.homeLink);
    aShareLinkHome.setAttribute("aria-label", "devuelta a la pagina principal");
    aShareLinkHome.innerText = `${this.homeText}`;

    const aShareLinkBlogs = document.createElement("a");
    aShareLinkBlogs.classList.add("share_link");
    aShareLinkBlogs.setAttribute("href", this.blogsLink);
    aShareLinkBlogs.setAttribute("aria-label", "area de solo blogs");
    aShareLinkBlogs.innerText = `${this.blogsText}`;

    const aShareLinkEvents = document.createElement("a");
    aShareLinkEvents.classList.add("share_link");
    aShareLinkEvents.setAttribute("href", this.eventsLink);
    aShareLinkEvents.setAttribute("aria-label", "area de solo eventos");
    aShareLinkEvents.innerText = `${this.eventsText}`;

    const aShareLinkProjects = document.createElement("a");
    aShareLinkProjects.classList.add("share_link");
    aShareLinkProjects.setAttribute("href", this.projectsLink);
    aShareLinkProjects.setAttribute("aria-label", "area de solo proyectos");
    aShareLinkProjects.innerText = `${this.projectsText}`;

    const aShareLinkContact = document.createElement("a");
    aShareLinkContact.classList.add("share_link");
    aShareLinkContact.setAttribute("href", this.contactLink);
    aShareLinkContact.setAttribute("aria-label", "area de contacto");
    aShareLinkContact.innerText = `${this.contactText}`;

    footerMenu.append(
      aShareLinkHome,
      aShareLinkBlogs,
      aShareLinkEvents,
      aShareLinkProjects,
      aShareLinkContact
    );

    const footerContact = document.createElement("section");
    footerContact.classList.add("footer_contact");
    const contactText = document.createElement("p");
    contactText.classList.add("contact_text");
    contactText.innerText = `Contactame`;

    const containerIconsContact = document.createElement("article");
    containerIconsContact.classList.add("container_icons--contact");
    const linkLinkedin = document.createElement("a");
    linkLinkedin.setAttribute("href", this.linkedinLink);
    linkLinkedin.setAttribute("aria-label", "linke para el perfil de linkedin");
    const imgLinkedin = document.createElement("img");
    imgLinkedin.classList.add("share_icon");
    imgLinkedin.setAttribute("src", this.linkedinSrc);
    imgLinkedin.setAttribute("alt", "logo de linkedin");
    linkLinkedin.appendChild(imgLinkedin);

    const linkGithub = document.createElement("a");
    linkGithub.setAttribute("href", this.githubLink);
    linkGithub.setAttribute("aria-label", "linke al perfil de github");
    const imgGithub = document.createElement("img");
    imgGithub.classList.add("share_icon");
    imgGithub.setAttribute("src", this.githubSrc);
    imgGithub.setAttribute("alt", "logo de github");
    linkGithub.appendChild(imgGithub);

    containerIconsContact.append(linkLinkedin, linkGithub);

    footerContact.append(contactText, containerIconsContact);

    const footerProperty = document.createElement("section");
    footerProperty.classList.add("footer_property");
    const imgLogo = document.createElement("img");
    imgLogo.classList.add("logoSrc");
    imgLogo.setAttribute("src", this.logoSrc);
    imgLogo.setAttribute("alt", "logo de Daniel");
    const propertyText = document.createElement("p");
    propertyText.classList.add("property_text");
    propertyText.innerText = `© 2023 Daniel`;

    footerProperty.append(imgLogo, propertyText);

    footerSecntion.append(
      containerFooterText,
      footerMenu,
      footerContact,
      footerProperty
    );
    return footerSecntion;
  }
}

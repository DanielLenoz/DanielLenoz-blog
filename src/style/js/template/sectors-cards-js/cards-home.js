const containerCardsBlogs = document.querySelector(".container_cards--blogs");

const events = "#88ED23";
const projects = "#0AB7B7";
const blogs = "#AA67FF";

const elementsCards = [
  {
    imgCards: "./src/img/img-blog/img-iphone/ducha-fria.jpg",
    altDescription: "Duchas Frias",
    titlesCards: "Duchas Frias",
    hashtag: "#Blogs",
    colorHashtag: blogs, //*!color delos hasthag */
    textsDescription:
      "Las duchas frías pueden fortalecer la mente y prepararla para enfrentar los desafíos de la vida, sin embargo, ¿por qué evitamos algo tan beneficioso y sencillo como tomar una ducha fría?.",
    linksButtomLeer: "./public/blogs-blog/duchas_frias.html",
    fechaCards: "29 Abril 2023",
  },
  {
    imgCards: "./src/img/img-blog/img-iphone/lectura-ligera.jpg",
    altDescription: "Un Rato De Lectura",
    titlesCards: "Un Rato De Lectura",
    hashtag: "#Blogs",
    colorHashtag: blogs, //*!color delos hasthag */
    textsDescription:
      "Aunque los videos de las redes sociales son populares hoy en día, yo prefiero el poder de la escritura para compartir historias y consejos.",
    linksButtomLeer: "./public/blogs-blog/rato_lectura.html",
    fechaCards: "28 Abril 2023",
  },
  {
    imgCards: "./src/img/img-blog/img-iphone/blog-v2.jpg",
    altDescription: "Projecto Blog V2",
    titlesCards: "Projecto Blog V2",
    hashtag: "#Projects",
    colorHashtag: projects, //*!color delos hasthag */
    textsDescription:
      "Un proyecto exitoso no solo funciona bien, también tiene que ser atractivo para los usuarios. Todo debe funcionar perfectamente y lucir atractivo a la vista para causar una buena impresión.",
    linksButtomLeer: "./public/blogs-projects/proyecto_blog_v2.html",
    fechaCards: "28 Abril 2023",
  },
  {
    imgCards: "./src/img/img-blog/img-iphone/portafolio-v2.jpg",
    altDescription: "Portafolio V2",
    titlesCards: "Portafolio V2",
    hashtag: "#Projects",
    colorHashtag: projects, //*!color delos hasthag */
    textsDescription:
      "Los proyectos pueden evolucionar como los carros, por lo que no deben ser abandonados ya que siempre hay margen para mejoras.",
    linksButtomLeer: "./public/blogs-projects/portafolio_v2.html",
    fechaCards: "28 Abril 2023",
  },
  {
    imgCards: "./src/img/img-blog/img-iphone/la-luz.jpg",
    altDescription: "Los de la luz",
    titlesCards: "Los De La Luz",
    hashtag: "#Blogs",
    colorHashtag: blogs, //*!color delos hasthag */
    textsDescription:
      "La verdad puede ser como un rayo de luz en la oscuridad o como agua en tierra seca. A los necios les puede parecer un terremoto, mientras que para los sabios de pensamiento será como un peso ligero.",
    linksButtomLeer: "./public/blogs-blog/la_luz.html",
    fechaCards: "27 Abril 2023",
  },
  {
    imgCards: "./src/img/img-blog/img-iphone/mente-cresimiento.jpg",
    altDescription: "una mente en cresimiento",
    titlesCards: "Una Mente en Cresimiento",
    hashtag: "#Blogs",
    colorHashtag: blogs, //*!color delos hasthag */
    textsDescription:
      "El crecimiento puede venir de varias formas; de manera sutil o de manera agresiva, pero siempre constante y adaptable a la mente de la persona aunque siempre duele cuando creces. ",
    linksButtomLeer: "./public/blogs-blog/mente_cresimiento.html",
    fechaCards: "26 Abril 2023",
  },
  {
    imgCards: "./src/img/img-blog/img-iphone/AI-amiga.jpg",
    altDescription: "Revolutionizing Work",
    titlesCards: "Revolutionizing Work",
    hashtag: "#Blogs",
    colorHashtag: blogs, //*!color delos hasthag */
    textsDescription:
      "la AI una revolicion tecnologia para le ser humano con el potencial de hacer trabajos complejos en segundo o solo pedierle que cree una reseta de cocina. ",
    linksButtomLeer: "./public/blogs-blog/Revolutionizing_Work.html",
    fechaCards: "26 Abril 2023",
  },
  {
    imgCards: "./src/img/img-blog/img-iphone/rios-card.jpg",
    altDescription: "blog rios sabiduria",
    titlesCards: "KNOWLEDGE´S RIVERS",
    hashtag: "#Blogs",
    colorHashtag: blogs, //*!color delos hasthag */
    textsDescription:
      "El conocimiento es como los ríos, que tienen un ancho, una profundidad, donde las personas entran y deciden hasta dónde llegar, conforme a sus principios, motivaciones y curiosidades.",
    linksButtomLeer: "./public/blogs-blog/knowledges_rivers.html",
    fechaCards: "15 Octubre 2022",
  },
  {
    imgCards: "./src/img/img-blog/img-iphone/platzi-conf-22-card.jpg",
    altDescription: "platzi conf 2022",
    titlesCards: "PLATZI CONF 22",
    hashtag: "#Events",
    colorHashtag: events, //*!color delos hasthag */
    textsDescription:
      "La Platizi Conf en Colombia, un evento lleno de conocimiento y curiosidad para cualquier persona con diferentes metas en el mundo tecnológico. un evento grandioso.",
    linksButtomLeer: "./public/blogs-events/platzi_conf_22.html",
    fechaCards: "26 Septiembre 2022",
  },
  {
    imgCards: "./src/img/img-blog/img-iphone/portafolio.jpg",
    altDescription: "proyecto portafolio",
    titlesCards: "PORTAFOLIO",
    hashtag: "Projects",
    colorHashtag: projects, //*!color delos hasthag */
    textsDescription:
      "El crecimiento personal puede llegar a ser solitario porque eres tú mismo quien empujo la piedra del esfuerzo y toma la decisión de llamar a la sabiduría.",
    linksButtomLeer: "./public/blogs-projects/portafolio.html",
    fechaCards: "3 Septiembre 2022",
  },
  {
    imgCards: "./src/img/img-blog/img-iphone/metaverso-card.jpg",
    altDescription: "metaverso blog",
    titlesCards: "EL METAVERSO",
    hashtag: "#Blog",
    colorHashtag: blogs, //*!color delos hasthag */
    textsDescription:
      "La creación de un mundo donde puedes hacer de todo, pero llegaremos a ver un metaverso como el de la película “Ready player one” en su totalidad de libertad.",
    linksButtomLeer: "./public/blogs-blog/metaverso.html",
    fechaCards: "3 Septiembre 2022",
  },
  {
    imgCards: "./src/img/img-blog/img-iphone/platzi-conf-card.jpg",
    altDescription: "platzi conf españa",
    titlesCards: "PLATZI CONF ES",
    hashtag: "#Event",
    colorHashtag: events, //*!color delos hasthag */
    textsDescription:
      "Un evento muy esperado por muchos y tuve que ver el envivo desde mi casa, pero aunque la experiencia no fue presencial me encontré con algo muy especial y raro en “Platzi Conf España”",
    linksButtomLeer: "./public/blogs-events/platzi_conf_es.html",
    fechaCards: "3 Septiembre 2022",
  },
  {
    imgCards: "./src/img/img-blog/img-iphone/proyect-blog.jpg",
    altDescription: "proyecto blog",
    titlesCards: "PROYECTO BLOG",
    hashtag: "Projects",
    colorHashtag: projects, //*!color delos hasthag */
    textsDescription:
      "Siempre me gusta hablar de historias o noticias interesantes sobre lo que leo,miro y vivo.y cree este super blog para documentar los blogs,proyectos y eventos generales que vivo.",
    linksButtomLeer: "./public/blogs-projects/proyecto_blog.html",
    fechaCards: "3 Septiembre 2022",
  },
  {
    imgCards: "./src/img/img-blog/img-iphone/first-animacion.jpg",
    altDescription: "primer proyecto de animacion",
    titlesCards: "FIRST ANIMATION",
    hashtag: "#Projects",
    colorHashtag: projects, //*!color delos hasthag */
    textsDescription:
      "Siempre he querido aprender animación en general, pero no sabia en que, hasta que en la “escuela de desarrollo web” de platzi miré varios cursos de para páginas y ahí comencé.",
    linksButtomLeer: "./public/blogs-projects/first_animacion.html",
    fechaCards: "3 Septiembre 2022",
  },
  {
    imgCards: "./src/img/img-blog/img-iphone/batata-bit.jpg",
    altDescription: "proyecto cripto moneda",
    titlesCards: "BATATA-BIT",
    hashtag: "#Projects",
    colorHashtag: projects, //*!color delos hasthag */
    textsDescription:
      "batata-bit mi primer proyecto que hice en platzi, este modelo fue inspirado en las monedas digitales que al día de hoy son muy reconocidas y pueden te valor para el mercado mundial.",
    linksButtomLeer: "./public/blogs-projects/batata_bit.html",
    fechaCards: "3 Septiembre 2022",
  },
];

elementsCards.forEach((the) => {
  const cardBlog = document.createElement("section");
  cardBlog.classList.add("card_blog");

  const containerImgCards = document.createElement("figure");
  containerImgCards.classList.add("container_img-cards");
  const pictureImg = document.createElement("picture");
  const imgCards = document.createElement("img");
  imgCards.setAttribute("src", the.imgCards);
  imgCards.setAttribute("alt", the.altDescription);
  imgCards.classList.add("img--cards");

  pictureImg.appendChild(imgCards);
  containerImgCards.appendChild(pictureImg);

  //-------
  const containerTextCards = document.createElement("article");
  containerTextCards.classList.add("container_text--cards");

  const contactTitleCards = document.createElement("div");
  contactTitleCards.classList.add("contact_title-cards");
  const titlesCard = document.createElement("h1");
  titlesCard.classList.add("titles--card");
  titlesCard.innerText = the.titlesCards;

  contactTitleCards.append(titlesCard);

  const hashtag = document.createElement("p");
  hashtag.classList.add("hashtag");
  hashtag.setAttribute("style", `color: ${the.colorHashtag}`);
  hashtag.innerText = the.hashtag;
  const textsDescriptionCards = document.createElement("p");
  textsDescriptionCards.classList.add("texts_description--cards");
  textsDescriptionCards.innerText = the.textsDescription;

  //---
  const descriptionCards = document.createElement("section");
  descriptionCards.classList.add("description-cards");

  const buttomLeer = document.createElement("a");
  buttomLeer.setAttribute("href", the.linksButtomLeer);
  buttomLeer.setAttribute("aria-label", "leer todo el blog completo");
  buttomLeer.classList.add("buttom_leer--cards");
  buttomLeer.innerText = "leer mas";
  const fechaCards = document.createElement("p");
  fechaCards.classList.add("fecha--cards");
  fechaCards.innerText = the.fechaCards;

  descriptionCards.append(buttomLeer, fechaCards);
  //**contatenacion del html */

  containerTextCards.append(
    contactTitleCards,
    hashtag,
    textsDescriptionCards,
    descriptionCards
  );

  cardBlog.append(containerImgCards, containerTextCards);
  containerCardsBlogs.appendChild(cardBlog);
});

const containerCardsBlogs = document.querySelector(".container_cards--blogs");

const events = "#88ED23";
const projects = "#0AB7B7";
const blogs = "#AA67FF";

const elementsCards = [
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

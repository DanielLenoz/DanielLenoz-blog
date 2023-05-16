
const events = "#88ED23";
const projects = "#0AB7B7";
const blogs = "#AA67FF";

const elementsCards = [
  {
    imgSrc: "./src/img/img-blog/img-iphone/ducha-fria.jpg",
    altDescription: "Duchas Frias",
    title: "Duchas Frias",
    hashtag: "#Blogs",
    colorHashtag: blogs,
    description:
      "Las duchas frías pueden fortalecer la mente y prepararla para enfrentar los desafíos de la vida, sin embargo, ¿por qué evitamos algo tan beneficioso y sencillo como tomar una ducha fría?.",
    link: "./public/blogs-blog/duchas_frias.html",
    date: "29 abril 2023",
  },
  {
    imgSrc: "./src/img/img-blog/img-iphone/lectura-ligera.jpg",
    altDescription: "Un Rato De Lectura",
    title: "Un Rato De Lectura",
    hashtag: "#Blogs",
    colorHashtag: blogs,
    description:
      "Aunque los videos de las redes sociales son populares hoy en día, yo prefiero el poder de la escritura para compartir historias y consejos.",
    link: "./public/blogs-blog/rato_lectura.html",
    date: "28 Abril 2023",
  },
  {
    imgSrc: "./src/img/img-blog/img-iphone/blog-v2.jpg",
    altDescription: "Projecto Blog V2",
    title: "Projecto Blog V2",
    hashtag: "#Projects",
    colorHashtag: projects,
    description:
      "Un proyecto exitoso no solo funciona bien, también tiene que ser atractivo para los usuarios. Todo debe funcionar perfectamente y lucir atractivo a la vista para causar una buena impresión.",
    link: "./public/blogs-projects/proyecto_blog_v2.html",
    date: "28 Abril 2023",
  },
  {
    imgSrc: "./src/img/img-blog/img-iphone/portafolio-v2.jpg",
    altDescription: "Portafolio V2",
    title: "Portafolio V2",
    hashtag: "#Projects",
    colorHashtag: projects,
    description:
      "Los proyectos pueden evolucionar como los carros, por lo que no deben ser abandonados ya que siempre hay margen para mejoras.",
    link: "/public/blogs-projects/portafolio_v2.html",
    date: "28 Abril 2023",
  },
  {
    imgSrc: "./src/img/img-blog/img-iphone/la-luz.jpg",
    altDescription: "Los de la luz",
    title: "Los de la luz",
    hashtag: "#Blogs",
    colorHashtag: blogs,
    description:
      "La verdad puede ser como un rayo de luz en la oscuridad o como agua en tierra seca. A los necios les parecer un terremoto, mientras que los sabios de pensamiento será como un peso ligero.",
    link: "./public/blogs-blog/rato_lectura.html",
    date: "27 Abril 2023",
  },
  {
    imgSrc: "./src/img/img-blog/img-iphone/mente-cresimiento.jpg",
    altDescription: "una mente en cresimiento",
    title: "una mente en cresimiento",
    hashtag: "#Blogs",
    colorHashtag: blogs,
    description:
      "El crecimiento puede venir de varias formas; de manera sutil o de manera agresiva, pero siempre constante y adaptable a la mente de la persona aunque siempre duele cuando creces.",
    link: "./public/blogs-blog/mente_cresimiento.html",
    date: "26 Abril 2023",
  },
  {
    imgSrc: "./src/img/img-blog/img-iphone/AI-amiga.jpg",
    altDescription: "Revolutionizing Work",
    title: "Revolutionizing Work",
    hashtag: "#Blogs",
    colorHashtag: blogs,
    description:
      "la AI una revolicion tecnologia para le ser humano con el potencial de hacer trabajos complejos en segundo o solo pedierle que cree una reseta de cocina.",
    link: "./public/blogs-blog/Revolutionizing_Work.html",
    date: "26 Abril 2023",
  },
  {
    imgSrc: "./src/img/img-blog/img-iphone/rios-card.jpg",
    altDescription: "KNOWLEDGE´S RIVERS",
    title: "KNOWLEDGE´S RIVERS",
    hashtag: "#Blogs",
    colorHashtag: blogs,
    description:
      "El conocimiento es como los ríos, que tienen un ancho, una profundidad, donde las personas entran y deciden hasta dónde llegar, conforme a sus principios, motivaciones y curiosidades.",
    link: "./public/blogs-blog/knowledges_rivers.html",
    date: "15 Octubre 2022",
  },
  {
    imgSrc: "./src/img/img-blog/img-iphone/platzi-conf-22-card.jpg",
    altDescription: "PLATZI CONF 22",
    title: "KPLATZI CONF 22",
    hashtag: "#Events",
    colorHashtag: events,
    description:
      "La Platizi Conf en Colombia, un evento lleno de conocimiento y curiosidad para cualquier persona con diferentes metas en el mundo tecnológico. un evento grandioso.",
    link: "./public/blogs-events/platzi_conf_22.html",
    date: "26 Septiembre 2022",
  },
  {
    imgSrc: "./src/img/img-blog/img-iphone/portafolio.jpg",
    altDescription: "proyecto portafolio",
    title: "PORTAFOLIO",
    hashtag: "#Projects",
    colorHashtag: projects,
    description:
      "El crecimiento personal puede llegar a ser solitario porque eres tú mismo quien empujo la piedra del esfuerzo y toma la decisión de llamar a la sabiduría.",
    link: "./public/blogs-projects/portafolio.html",
    date: "3 Septiembre 2022",
  },
  {
    imgSrc: "./src/img/img-blog/img-iphone/metaverso-card.jpg",
    altDescription: "EL METAVERSO blog",
    title: "EL METAVERSO",
    hashtag: "#Blogs",
    colorHashtag: blogs,
    description:
      "La creación de un mundo donde puedes hacer de todo, pero llegaremos a ver un metaverso como el de la película “Ready player one” en su totalidad de libertad.",
    link: "./public/blogs-blog/metaverso.html",
    date: "3 Septiembre 2022",
  },
  {
    imgSrc: "./src/img/img-blog/img-iphone/platzi-conf-card.jpg",
    altDescription: "PLATZI CONF ESPAÑA",
    title: "PLATZI CONF ES",
    hashtag: "#Events",
    colorHashtag: events,
    description:
      "Un evento muy esperado por muchos y tuve que ver el envivo desde mi casa, pero aunque la experiencia no fue presencial me encontré con algo muy especial y raro en “Platzi Conf España”",
    link: "./public/blogs-events/platzi_conf_es.html",
    date: "3 Septiembre 2022",
  },
  {
    imgSrc: "./src/img/img-blog/img-iphone/proyect-blog.jpg",
    altDescription: "PROYECTO BLOG",
    title: "PROYECTO BLOG",
    hashtag: "#Projects",
    colorHashtag: projects,
    description:
      "Siempre me gusta hablar de historias o noticias interesantes sobre lo que leo,miro y vivo.y cree este super blog para documentar los blogs,proyectos y eventos generales que vivo.",
    link: "./public/blogs-projects/proyecto_blog.html",
    date: "3 Septiembre 2022",
  },
  {
    imgSrc: "./src/img/img-blog/img-iphone/first-animacion.jpg",
    altDescription: "primer proyecto de animacion",
    title: "FIRST ANIMATION",
    hashtag: "#Projects",
    colorHashtag: projects,
    description:
      "Siempre he querido aprender animación en general, pero no sabia en que, hasta que en la “escuela de desarrollo web” de platzi miré varios cursos de para páginas y ahí comencé.",
    link: "./public/blogs-projects/first_animacion.html",
    date: "3 Septiembre 2022",
  },
  {
    imgSrc: "./src/img/img-blog/img-iphone/batata-bit.jpg",
    altDescription: "proyecto cripto moneda",
    title: "BATATA-BIT",
    hashtag: "#Projects",
    colorHashtag: projects,
    description:
      "batata-bit mi primer proyecto que hice en platzi, este modelo fue inspirado en las monedas digitales que al día de hoy son muy reconocidas y pueden te valor para el mercado mundial.",
    link: "./public/blogs-projects/batata_bit.html",
    date: "3 Septiembre 2022",
  },
];

const containerBlogs = document.querySelector(".blogs_container--grid");

const productListBlogs = [];

productListBlogs.push({
  image: "../img/img-cads/rios-card.jpg",
  titulo: "KNOWLEDGE´S RIVERS",
  descriptcion:
    "El conocimiento es como los ríos, que tienen un ancho, una profundidad, donde las personas entran y deciden hasta dónde llegar, conforme a sus principios, motivaciones y curiosidades.",
  link: "../html/blogs/knowledges_rivers.html",
});
productListBlogs.push({
  image: "../img/img-cads/platzi-conf-22-card.jpg",
  titulo: "PLATZI CONF 22",
  descriptcion:
    "La Platizi Conf en Colombia, un evento lleno de conocimiento y curiosidad para cualquier persona con diferentes metas en el mundo tecnológico. un evento grandioso.",
  link: "../html/events/platzi_conf_22.html",
});
productListBlogs.push({
  image: "../img/img-cads/portafolio.jpg",
  titulo: "PORTAFOLIO",
  descriptcion:
    "El crecimiento personal puede llegar a ser solitario porque eres tú mismo quien empujo la piedra del esfuerzo y toma la decisión de llamar a la sabiduría.",
  link: "../html/projects/portafolio-blog.html",
});
productListBlogs.push({
  image: "../img/img-cads/metaverso-card.jpg",
  titulo: "EL METAVERSO",
  descriptcion:
    "La creación de un mundo donde puedes hacer de todo, pero llegaremos a ver un metaverso como el de la película “Ready player one” en su totalidad de libertad.",
  link: "../html/blogs/metaverso.html",
});
productListBlogs.push({
  image: "../img/img-cads/platzi-conf-card.jpg",
  titulo: "PLATZI CONF ES",
  descriptcion:
    "Un evento muy esperado por muchos y tuve que ver el envivo desde mi casa, pero aunque la experiencia no fue presencial me encontré con algo muy especial y raro en “Platzi Conf España”",
  link: "../html/events/platzi_conf_es.html",
});
productListBlogs.push({
  image: "../img/img-cads/proyect-blog.jpg",
  titulo: "PROYECTO BLOG",
  descriptcion:
    "Siempre me gusta hablar de historias o noticias interesantes sobre lo que leo,miro y vivo.y cree este super blog para documentar los blogs,proyectos y eventos generales que vivo.",
  link: "../html/projects/proyecto-blog.html",
});
productListBlogs.push({
  image: "../img/img-cads/trabajo-animacion.jpg",
  titulo: "FIRST ANIMATION",
  descriptcion:
    "Siempre he querido aprender animación en general, pero no sabia en que, hasta que en la “escuela de desarrollo web” de platzi miré varios cursos de para páginas y ahí comencé.",
  link: "../html/projects/first-animation.html",
});
productListBlogs.push({
  image: "../img/img-cads/batata-bit.jpg",
  titulo: "BATATA-BIT",
  descriptcion:
    "batata-bit mi primer proyecto que hice en platzi, este modelo fue inspirado en las monedas digitales que al día de hoy son muy reconocidas y pueden te valor para el mercado mundial.",
  link: "../html/projects/blog_batata-bit.html",
});
productListBlogs.push({
  image: "../img/img-cads/clone-google.jpg",
  titulo: "CLONE GOOGLE",
  descriptcion:
    "Uno de mis primeros códigos Front-end en pandemia es un código sencillo pero fue uno de los que me abrieron la mente al mundo de la tecnología cuando caventura del 2020.",
  link: "../html/projects/Clone_Google.html",
});

function reproductBlogs(arrBlogs) {
  for (informacion of arrBlogs) {
    const containerCard = document.createElement("section");
    containerCard.classList.add("container_card");

    const card = document.createElement("section");
    card.classList.add("card");

    const cardImg = document.createElement("figure");
    cardImg.classList.add("card_img");
    const imgBlogs = document.createElement("img");
    imgBlogs.setAttribute("src", informacion.image);

    const contentText = document.createElement("article");
    contentText.classList.add("content_text");

    const titulo = document.createElement("h3");
    titulo.innerText = informacion.titulo;

    const text = document.createElement("p");
    text.innerText = informacion.descriptcion;

    const containerButton = document.createElement("div");
    containerButton.classList.add("container_button");

    const button = document.createElement("div");
    button.classList.add("button_leer");

    const link = document.createElement("a");
    link.innerText = "leer mas";
    link.setAttribute("href", informacion.link);

    button.appendChild(link);

    containerButton.appendChild(button);

    contentText.append(titulo, text, containerButton);

    cardImg.appendChild(imgBlogs);

    card.append(cardImg, contentText);

    containerCard.appendChild(card);

    containerBlogs.appendChild(containerCard);
  }
}

reproductBlogs(productListBlogs);

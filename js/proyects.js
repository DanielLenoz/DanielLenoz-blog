const containerProyects = document.querySelector("#proyectos");

const productListProyects = [];

productListProyects.push({
  image: "../img/img-cads/portafolio.jpg",
  titulo: "PORTAFOLIO",
  descriptcion:
    "El crecimiento personal puede llegar a ser solitario porque eres tú mismo quien empujo la piedra del esfuerzo y toma la decisión de llamar a la sabiduría.",
  link: "../html/projects/portafolio-blog.html",
});
productListProyects.push({
  image: "../img/img-cads/proyect-blog.jpg",
  titulo: "PROYECTO BLOG",
  descriptcion:
    "Siempre me gusta hablar de historias o noticias interesantes sobre lo que leo,miro y vivo. y pensé en crear este blog para documentar los blogs,proyectos y eventos generales que vivo.",
  link: "../html/projects/proyecto-blog.html",
});
productListProyects.push({
  image: "../img/img-cads/trabajo-animacion.jpg",
  titulo: "FIRST ANIMATION",
  descriptcion:
    "Siempre he querido aprender animación en general, pero no sabia en que, hasta que en la “escuela de desarrollo web” de platzi miré varios cursos de animación para páginas y ahí comencé.",
  link: "../html/projects/first-animation.html",
});
productListProyects.push({
  image: "../img/img-cads/batata-bit.jpg",
  titulo: "BATATA-BIT",
  descriptcion:
    "batata-bit mi primer proyecto que hice en platzi, este modelo fue inspirado en las monedas digitales que al día de hoy son muy reconocidas y pueden tener mucho valor para el mercado mundial.",
  link: "../html/projects/blog_batata-bit.html",
});
productListProyects.push({
  image: "../img/img-cads/clone-google.jpg",
  titulo: "CLONE GOOGLE",
  descriptcion:
    "Uno de mis primeros códigos Front-end en pandemia es un código sencillo pero fue uno de los que me abrieron la mente al mundo de la tecnología cuando comenzó la aventura del 2020.",
  link: "../html/projects/Clone_Google.html",
});

function publicarProyects(arrProyects) {
  for (informacion of arrProyects) {
    const containerCard = document.createElement("section");
    containerCard.classList.add("container_card");

    const card = document.createElement("section");
    card.classList.add("card");

    const cardImg = document.createElement("figure");
    cardImg.classList.add("card_img");
    const imgProyects = document.createElement("img");
    imgProyects.setAttribute("src", informacion.image);

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

    cardImg.appendChild(imgProyects);

    card.append(cardImg, contentText);

    containerCard.appendChild(card);

    containerProyects.appendChild(containerCard);
  }
}

publicarProyects(productListProyects);

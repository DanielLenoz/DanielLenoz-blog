const containerBlog = document.querySelector("#blogs");

const productListBlog = [];

productListBlog.push({
  image: "../img/img-cads/rios-card.jpg",
  titulo: "KNOWLEDGE´S RIVERS",
  descriptcion:
    "El conocimiento es como los ríos, que tienen un ancho, una profundidad, donde las personas entran y deciden hasta dónde llegar, conforme a sus principios, motivaciones y curiosidades.",
  link: "../html/blogs/knowledges_rivers.html",
});
productListBlog.push({
  image: "../img/img-cads/metaverso-card.jpg",
  titulo: "EL METAVERSO",
  descriptcion:
    "La creación de un mundo donde puedes hacer de todo, pero llegaremos a ver un metaverso como el de la película “Readyplayer one” en su totalidad de libertad.",
  link: "../html/blogs/metaverso.html",
});

function publicarBlog(arrBlog) {
  for (informacion of arrBlog) {
    const containerCard = document.createElement("section");
    containerCard.classList.add("container_card");

    const card = document.createElement("section");
    card.classList.add("card");

    const cardImg = document.createElement("figure");
    cardImg.classList.add("card_img");
    const imgBLog = document.createElement("img");
    imgBLog.setAttribute("src", informacion.image);

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

    cardImg.appendChild(imgBLog);

    card.append(cardImg, contentText);

    containerCard.appendChild(card);

    containerBlog.appendChild(containerCard);
  }
}

publicarBlog(productListBlog);

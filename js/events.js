const containerEvents = document.querySelector("#eventos");

const productListEvents = [];

productListEvents.push({
  image: "../img/img-cads/platzi-conf-22-card.jpg",
  titulo: "PLATZI CONF 22",
  descriptcion:
    "La Platizi Conf en Colombia, un evento lleno de conocimiento y curiosidad para cualquier persona con diferentes metas en el mundo tecnológico. un evento grandioso.",
  link: "../html/events/platzi_conf_22.html",
});
productListEvents.push({
  image: "../img/img-cads/platzi-conf-card.jpg",
  titulo: "PLATZI CONF ES",
  descriptcion:
    "Un evento muy esperado por muchos y tuve que ver el envivo desde mi casa, pero aunque la experiencia no fue presencial me encontré con algo muy especial y raro en “Platzi Conf España”.",
  link: "../html/events/platzi_conf_es.html",
});

function publicarEvents(arrEvents) {
  for (informacion of arrEvents) {
    const containerCard = document.createElement("section");
    containerCard.classList.add("container_card");

    const card = document.createElement("section");
    card.classList.add("card");

    const cardImg = document.createElement("figure");
    cardImg.classList.add("card_img");
    const imgEvents = document.createElement("img");
    imgEvents.setAttribute("src", informacion.image);

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

    cardImg.appendChild(imgEvents);

    card.append(cardImg, contentText);

    containerCard.appendChild(card);

    containerEvents.appendChild(containerCard);
  }
}

publicarEvents(productListEvents);

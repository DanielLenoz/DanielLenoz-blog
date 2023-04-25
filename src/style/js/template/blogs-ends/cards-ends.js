const containerCardsBlogs3 = document.querySelector(".container_cards--blogs");

elementsCardsAll3.slice(0, 3).forEach((the) => {
  const cardBlog3 = document.createElement("section");
  cardBlog3.classList.add("card_blog");

  const containerImgCards3 = document.createElement("figure");
  containerImgCards3.classList.add("container_img-cards");
  const pictureImg3 = document.createElement("picture");
  const imgCards3 = document.createElement("img");
  imgCards3.setAttribute("src", the.imgCards);
  imgCards3.setAttribute("alt", the.altDescription);
  imgCards3.classList.add("img--cards");

  pictureImg3.appendChild(imgCards3);
  containerImgCards3.appendChild(pictureImg3);

  //-------
  const containerTextCards3 = document.createElement("article");
  containerTextCards3.classList.add("container_text--cards");

  const contactTitleCards3 = document.createElement("div");
  contactTitleCards3.classList.add("contact_title-cards");
  const titlesCard3 = document.createElement("h1");
  titlesCard3.classList.add("titles--card");
  titlesCard3.innerText = the.titlesCards;

  contactTitleCards3.append(titlesCard3);

  const hashtag3 = document.createElement("p");
  hashtag3.classList.add("hashtag");
  hashtag3.setAttribute("style", `color: ${the.colorHashtag}`);
  hashtag3.innerText = the.hashtag;
  const textsDescriptionCards3 = document.createElement("p");
  textsDescriptionCards3.classList.add("texts_description--cards");
  textsDescriptionCards3.innerText = the.textsDescription;

  //---
  const descriptionCards3 = document.createElement("section");
  descriptionCards3.classList.add("description-cards");

  const buttomLeer3 = document.createElement("a");
  buttomLeer3.setAttribute("href", the.linksButtomLeer);
  buttomLeer3.setAttribute("aria-label", "leer todo el blog completo");
  buttomLeer3.classList.add("buttom_leer--cards");
  buttomLeer3.innerText = "leer mas";
  const fechaCards3 = document.createElement("p");
  fechaCards3.classList.add("fecha--cards");
  fechaCards3.innerText = the.fechaCards;

  descriptionCards3.append(buttomLeer3, fechaCards3);
  //**contatenacion del html */

  containerTextCards3.append(
    contactTitleCards3,
    hashtag3,
    textsDescriptionCards3,
    descriptionCards3
  );

  cardBlog3.append(containerImgCards3, containerTextCards3);
  containerCardsBlogs3.appendChild(cardBlog3);
});

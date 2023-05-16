class CardBlog {
  constructor({
    imgSrc,
    altDescription,
    title,
    hashtag,
    colorHashtag,
    description,
    link,
    date,
  }) {
    this.imgSrc = imgSrc;
    this.altDescription = altDescription;
    this.title = title;
    this.hashtag = hashtag;
    this.colorHashtag = colorHashtag;
    this.description = description;
    this.link = link;
    this.date = date;
    return this.createCard()
  }

  createCard() {
    const cardBlog = document.createElement("section");
    cardBlog.classList.add("card_blog");

    const containerImgCards = document.createElement("figure");
    containerImgCards.classList.add("container_img-cards");
    const pictureImg = document.createElement("picture");
    const imgCards = document.createElement("img");
    imgCards.setAttribute("src", this.imgSrc);
    imgCards.setAttribute("alt", this.altDescription);
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
    titlesCard.innerText = this.title;

    contactTitleCards.append(titlesCard);

    const hashtag = document.createElement("p");
    hashtag.classList.add("hashtag");
    hashtag.setAttribute("style", `color: ${this.colorHashtag}`);
    hashtag.innerText = this.hashtag;
    const textsDescriptionCards = document.createElement("p");
    textsDescriptionCards.classList.add("texts_description--cards");
    textsDescriptionCards.innerText = this.description;

    //---
    const descriptionCards = document.createElement("section");
    descriptionCards.classList.add("description-cards");

    const buttomLeer = document.createElement("a");
    buttomLeer.setAttribute("href", this.link);
    buttomLeer.setAttribute("aria-label", "leer todo el blog completo");
    buttomLeer.classList.add("buttom_leer--cards");
    buttomLeer.innerText = "leer mas";
    const fechaCards = document.createElement("p");
    fechaCards.classList.add("fecha--cards");
    fechaCards.innerText = this.date;

    descriptionCards.append(buttomLeer, fechaCards);
    //**contatenacion del html */

    containerTextCards.append(
      contactTitleCards,
      hashtag,
      textsDescriptionCards,
      descriptionCards
    );

    cardBlog.append(containerImgCards, containerTextCards);

    return cardBlog;
  }
}
const containerCardsBlogs = document.querySelector(".container_cards--blogs");

const events = "#88ED23";
const projects = "#0AB7B7";
const blogs = "#AA67FF";
const elementsCards = [
  {
    imgSrc: "../src/img/img-blog/img-iphone/ducha-fria.jpg",
    altDescription: "Duchas Frias",
    title: "Duchas Frias",
    hashtag: "#Blogs",
    colorHashtag: blogs,
    description:
      "Las duchas frías pueden fortalecer la mente y prepararla para enfrentar los desafíos de la vida, sin embargo, ¿por qué evitamos algo tan beneficioso y sencillo como tomar una ducha fría?.",
    link: "../public/blogs-blog/duchas_frias.html",
    date: "29 abril 2023",
  },
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
]
elementsCards.map((e) => {
  containerCardsBlogs.appendChild(new CardBlog(e))
  console.log(new CardBlog(e))
})

const updatedElementsCards = elementsCards.map(card => {
  return {
    ...card,
    imgSrc: `../${card.imgSrc}`,
    link: `../${card.link}`
  }
});

updatedElementsCards.map((a) => {
  containerCardsBlogs.appendChild(new CardBlog(a))
  console.log(new CardBlog(a))
})

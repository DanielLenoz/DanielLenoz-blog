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


// const updatedElementsCards = elementsCards.map(card => {
//   return {
//     ...card,
//     imgSrc: `../${card.imgSrc}`,
//     link: `../${card.link}`
//   }
// });

// updatedElementsCards.map((a) => {
//   containerCardsBlogs.appendChild(new CardBlog(a))
//   console.log(new CardBlog(a))
// })


// console.log(search("#Blog"))
// const search = (query) => elementsCards.filter((hashtag) => hashtag.hashtag.includes(query));
// search("#Events").forEach((b) => {
  
//   containerCardsBlogs.appendChild(new CardBlog(b))
//   console.log(new CardBlog(b))
// })


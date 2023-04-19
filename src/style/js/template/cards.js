const containerCardsBlogs = document.querySelector('.container_cards--blogs')

const elementsCards = [
    {
        imgCards: './src/img/img-blog/img-iphone/platzi-conf-22-card.jpg',
        titlesCards: 'PLATZI CONF 22',
        hashtag: '#platzo',
        colorHashtag:"green",
        textsDescription: 'La Platizi Conf en Colombia, un evento lleno de conocimiento y curiosidad para cualquier persona con diferentes metas enel mundo tecnológico. un evento grandioso.',
        linksButtomLeer: '#',
        fechaCards:'12 agosto 2023',
    }
]

elementsCards.forEach((the) => {
    const cardBlog = document.createElement("section");
    cardBlog.classList.add("card_blog");

    const containerImgCards = document.createElement("figure");
    containerImgCards.classList.add("container_img-cards");
    const pictureImg = document.createElement("picture");
    const imgCards = document.createElement("img");
    imgCards.classList.add("img--cards");
    imgCards.setAttribute('src', the.imgCards)

    pictureImg.appendChild(imgCards);
    containerImgCards.appendChild(pictureImg);

    //-------
    const containerTextCards = document.createElement("article");
    containerTextCards.classList.add("container_text--cards");

    const contactTitleCards = document.createElement("div");
    contactTitleCards.classList.add("contact_title-cards");
    const titlesCard = document.createElement("h1");
    titlesCard.classList.add("titles--card");
    titlesCard.innerText = `${the.titlesCards}`

    contactTitleCards.append(titlesCard);

    const hashtag = document.createElement("p");
    hashtag.classList.add("hashtag");
    hashtag.setAttribute('style', `color: ${the.colorHashtag}`);
    hashtag.innerText = `${the.hashtag}`;
    const textsDescriptionCards = document.createElement("p");
    textsDescriptionCards.classList.add("texts_description--cards");
    textsDescriptionCards.innerText = `${the.textsDescription}`;

    //---
    const descriptionCards = document.createElement("section");
    descriptionCards.classList.add("description-cards");

    const buttomLeer = document.createElement("a");
    buttomLeer.classList.add("buttom_leer--cards");
    buttomLeer.innerText = "leer mas";
    buttomLeer.setAttribute('href', the.linksButtomLeer);
    const fechaCards = document.querySelector("p");
    fechaCards.classList.add("fecha--cards")
    fechaCards.innerText = `${the.fechaCards}`

    descriptionCards.append(buttomLeer, fechaCards);
    //**contatenacion del html */

    containerTextCards.append(contactTitleCards,hashtag,textsDescriptionCards,descriptionCards)

    cardBlog.append(containerImgCards, containerTextCards);
    containerCardsBlogs.appendChild(cardBlog);
})
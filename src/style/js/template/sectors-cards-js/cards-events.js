const containerCardsBlogs2 = document.querySelector(".container_cards--blogs")



const search = (query) => { 
    return elementsCardsAll2.filter(hashtag => {
        return hashtag.hashtag.includes(query)
    })
}

search("#Blog").forEach((the) => {
    const cardBlog2 = document.createElement("section");
    cardBlog2.classList.add("card_blog");

    const containerImgCards2 = document.createElement("figure");
    containerImgCards2.classList.add("container_img-cards");
    const pictureImg2 = document.createElement("picture");
    const imgCards2 = document.createElement("img");
    imgCards2.setAttribute('src', the.imgCards)
    imgCards2.classList.add("img--cards");

    pictureImg2.appendChild(imgCards2);
    containerImgCards2.appendChild(pictureImg2);

    //-------
    const containerTextCards2 = document.createElement("article");
    containerTextCards2.classList.add("container_text--cards");

    const contactTitleCards2 = document.createElement("div");
    contactTitleCards2.classList.add("contact_title-cards");
    const titlesCard2 = document.createElement("h1");
    titlesCard2.classList.add("titles--card");
    titlesCard2.innerText = the.titlesCards;

    contactTitleCards2.append(titlesCard2);

    const hashtag2 = document.createElement("p");
    hashtag2.classList.add("hashtag");
    hashtag2.setAttribute('style', `color: ${the.colorHashtag}`);
    hashtag2.innerText = the.hashtag;
    const textsDescriptionCards2 = document.createElement("p");
    textsDescriptionCards2.classList.add("texts_description--cards");
    textsDescriptionCards2.innerText = the.textsDescription;

    //---
    const descriptionCards2 = document.createElement("section");
    descriptionCards2.classList.add("description-cards");

    const buttomLeer2 = document.createElement("a");
    buttomLeer2.setAttribute('href', the.linksButtomLeer);
    buttomLeer2.classList.add("buttom_leer--cards");
    buttomLeer2.innerText = "leer mas";
    const fechaCards2 = document.createElement("p");
    fechaCards2.classList.add("fecha--cards")
    fechaCards2.innerText = the.fechaCards;

    descriptionCards2.append(buttomLeer2, fechaCards2);
    //**contatenacion del html */

    containerTextCards2.append(contactTitleCards2,hashtag2,textsDescriptionCards2,descriptionCards2)

    cardBlog2.append(containerImgCards2, containerTextCards2);
    containerCardsBlogs2.appendChild(cardBlog2);
})
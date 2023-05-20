const containerCardsEnd = document.querySelector("#card-end");

const updatedElementsCardsEnd = elementsCards.map((card) => {
  return {
    ...card,
    imgSrc: `../.${card.imgSrc}`,
    link: `../.${card.link}`,
  };
});

updatedElementsCardsEnd.slice(0, 3).map((data) => {
  containerCardsEnd.appendChild(new CardBlog(data));
});

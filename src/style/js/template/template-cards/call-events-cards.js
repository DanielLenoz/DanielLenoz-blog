const containerCardsEvents = document.querySelector("#Events");

const updatedElementsCardsEvents = elementsCards.map((card) => {
  return {
    ...card,
    imgSrc: `.${card.imgSrc}`,
    link: `.${card.link}`,
  };
});

const search = (query) =>
  updatedElementsCardsEvents.filter((hashtag) =>
    hashtag.hashtag.includes(query)
  );
search("#Events").map((data) => {
  containerCardsEvents.appendChild(new CardBlog(data));
});

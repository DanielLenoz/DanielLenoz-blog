const containerCardsProjects = document.querySelector("#Projects");

const updatedElementsCardsProjects = elementsCards.map((card) => {
  return {
    ...card,
    imgSrc: `.${card.imgSrc}`,
    link: `.${card.link}`,
  };
});

const search = (query) =>
  updatedElementsCardsProjects.filter((hashtag) =>
    hashtag.hashtag.includes(query)
  );
search("#Projects").map((data) => {
  containerCardsProjects.appendChild(new CardBlog(data));
});

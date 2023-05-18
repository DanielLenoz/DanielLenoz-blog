const containerCardsBlogs = document.querySelector("#Blogs");

const updatedElementsCardsBlogs = elementsCards.map((card) => {
  return {
    ...card,
    imgSrc: `.${card.imgSrc}`,
    link: `.${card.link}`,
  };
});

const search = (query) =>
  updatedElementsCardsBlogs.filter((hashtag) =>
    hashtag.hashtag.includes(query)
  );
search("#Blogs").map((e) => {
  containerCardsBlogs.appendChild(new CardBlog(e));
});

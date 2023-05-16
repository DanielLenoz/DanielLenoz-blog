const containerCardsBlogs = document.querySelector("#Blogs");

const updatedElementsCardsBlogs = elementsCards.map(card2 => {
  return {
    ...card2,
    imgSrc: `../${card2.imgSrc}`,
    link: `../${card2.link}`
  }
});

const search = (query) => updatedElementsCardsBlogs.filter((hashtag) => hashtag.hashtag.includes(query));
search("#Blogs").map((a) => {
  console.log(a)
  containerCardsBlogs.appendChild(new CardBlog(a))
})
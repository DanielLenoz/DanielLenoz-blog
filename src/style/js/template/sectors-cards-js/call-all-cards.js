
const containerCardsAll = document.querySelector("#allCard");

elementsCards.map((e) => {
  containerCardsAll.appendChild(new CardBlog(e))
})


const containerCardsAll = document.querySelector("#allCard");

// const containerCardsEnd = document.querySelector("#End");

elementsCards.map((e) => {
  containerCardsAll.appendChild(new CardBlog(e))
})

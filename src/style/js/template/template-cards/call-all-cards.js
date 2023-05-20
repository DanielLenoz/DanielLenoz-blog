const containerCardsAll = document.querySelector("#allCard");

elementsCards.map((data) => {
  containerCardsAll.appendChild(new CardBlog(data));
});

const containerCardsBlogs = document.querySelector(".container_cards--blogs");


elementsCards.forEach((card) => {
  containerCardsBlogs.appendChild(card.createCard());
})
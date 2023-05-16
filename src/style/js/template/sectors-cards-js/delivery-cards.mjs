import { CardBlog } from "./creator-card.mjs";
import { elementsCards } from "./content-cards.mjs";

const containerCardsBlogs = document.querySelector(".container_cards--blogs");

elementsCards.map((e) => {
  containerCardsBlogs.appendChild(new CardBlog(e))
  console.log(new CardBlog(e))
})

// const updatedElementsCards = elementsCards.map(card => {
//   return {
//     ...card,
//     imgSrc: `../${card.imgSrc}`,
//     link: `../${card.link}`
//   }
// });

// updatedElementsCards.map((a) => {
//   containerCardsBlogs.appendChild(new CardBlog(a))
//   console.log(new CardBlog(a))
// })
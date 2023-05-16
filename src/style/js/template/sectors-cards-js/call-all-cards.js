
const containerCardsAll = document.querySelector("#allCard");
// const containerCardsBlogs = document.querySelector("#Blogs");
// const containerCardsEvents = document.querySelector("#Events");
// const containerCardsProjects = document.querySelector("#Projects");
// const containerCardsEnd = document.querySelector("#End");

elementsCards.map((e) => {
  containerCardsAll.appendChild(new CardBlog(e))
})
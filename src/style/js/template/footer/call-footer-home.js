const footer = document.querySelector("#footer-home");

elementsNavarAndFooter.map((data) => {
  const footer1 = new Footer(data);
  const footerElement = footer1.createFooter(); // Llamada correcta de la función
  footer.appendChild(footerElement);
});

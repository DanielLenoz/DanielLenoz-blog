const footer = document.querySelector("#footer-home");

elementsNavarAndFooter.map((i) => {
    const footer1 = new Footer(i);
  const footerElement = footer1.createFooter(); // Llamada correcta de la función
    footer.appendChild(footerElement);
    console.log(footer)
    console.log(footer1)
});
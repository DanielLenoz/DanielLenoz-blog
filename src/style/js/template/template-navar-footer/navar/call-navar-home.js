const headerHome = document.querySelector("header");

elementsNavarAndFooter.map((data) => {
  const navarMobile = new Navar(data);
  const navarElement = navarMobile.navarMobile(); // Llamada correcta de la función
  headerHome.appendChild(navarElement);
});
elementsNavarAndFooter.map((data) => {
  const navarDesktop = new Navar(data);
  const navarElement = navarDesktop.navarDesktop(); // Llamada correcta de la función
  headerHome.appendChild(navarElement);
});

const headerHome = document.querySelector("header");

elementsNavarAndFooter.map((i) => {
    const navarMobile = new Navar(i);
  const navarElement = navarMobile.navarMobile(); // Llamada correcta de la función
  headerHome.appendChild(navarElement);
});
elementsNavarAndFooter.map((f) => {
    const navarDesktop = new Navar(f);
  const navarElement = navarDesktop.navarDesktop(); // Llamada correcta de la función
  headerHome.appendChild(navarElement);
})

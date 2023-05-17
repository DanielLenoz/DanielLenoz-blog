const headerHome = document.querySelector("#home");

elementsNavar.map((i) => {
    const navarMobile = new navar(i);
  const navarElement = navarMobile.navarMobile(); // Llamada correcta de la función
  headerHome.appendChild(navarElement);
});
elementsNavar.map((f) => {
    const navarDesktop = new navar(f);
  const navarElement = navarDesktop.navarDesktop(); // Llamada correcta de la función
  headerHome.appendChild(navarElement);
})
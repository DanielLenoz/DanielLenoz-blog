const header = document.querySelector("header");

elementsNavar.map((i) => {
    const navarMobile = new navar(i);
  const navarElement = navarMobile.navarMobile(); // Llamada correcta de la función
  header.appendChild(navarElement);
});
elementsNavar.map((f) => {
    const navarDesktop = new navar(f);
  const navarElement = navarDesktop.navarDesktop(); // Llamada correcta de la función
  header.appendChild(navarElement);
})
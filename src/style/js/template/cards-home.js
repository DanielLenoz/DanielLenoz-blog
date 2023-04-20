const containerCardsBlogs = document.querySelector('.container_cards--blogs')

const events = "#88ED23";
const projects = "#0AB7B7";
const blogs = "#AA67FF";

const elementsCards = [
    {
        imgCards: './src/img/img-blog/img-iphone/rios-card.jpg',
        titlesCards: 'KNOWLEDGE´S RIVERS',
        hashtag: '#Blogs',
        colorHashtag: blogs,//*!color delos hasthag */
        textsDescription: 'El conocimiento es como los ríos, que tienen un ancho, una profundidad, donde las personas entran y deciden hasta dónde llegar, conforme a sus principios, motivaciones y curiosidades.',
        linksButtomLeer: '#',
        fechaCards: '12 agosto 2023',
    },
    {
        imgCards: './src/img/img-blog/img-iphone/platzi-conf-22-card.jpg',
        titlesCards: 'PLATZI CONF 22',
        hashtag: '#Events',
        colorHashtag: events,//*!color delos hasthag */
        textsDescription: 'La Platizi Conf en Colombia, un evento lleno de conocimiento y curiosidad para cualquier persona con diferentes metas en el mundo tecnológico. un evento grandioso.',
        linksButtomLeer: '#',
        fechaCards: '12 agosto 2023',
    },
    {
        imgCards: './src/img/img-blog/img-iphone/portafolio.jpg',
        titlesCards: 'PORTAFOLIO',
        hashtag: '#Blog',
        colorHashtag: blogs,//*!color delos hasthag */
        textsDescription: 'El crecimiento personal puede llegar a ser solitario porque eres tú mismo quien empujo la piedra del esfuerzo y toma la decisión de llamar a la sabiduría.',
        linksButtomLeer: '#',
        fechaCards: '12 agosto 2023',
    },
    {
        imgCards: './src/img/img-blog/img-iphone/metaverso-card.jpg',
        titlesCards: 'EL METAVERSO',
        hashtag: '#Blog',
        colorHashtag: blogs,//*!color delos hasthag */
        textsDescription: 'La creación de un mundo donde puedes hacer de todo, pero llegaremos a ver un metaverso como el de la película “Ready player one” en su totalidad de libertad.',
        linksButtomLeer: '#',
        fechaCards: '12 agosto 2023',
    },
    {
        imgCards: './src/img/img-blog/img-iphone/platzi-conf-card.jpg',
        titlesCards: 'PLATZI CONF ES',
        hashtag: '#Event',
        colorHashtag: events,//*!color delos hasthag */
        textsDescription: 'Un evento muy esperado por muchos y tuve que ver el envivo desde mi casa, pero aunque la experiencia no fue presencial me encontré con algo muy especial y raro en “Platzi Conf España”',
        linksButtomLeer: '#',
        fechaCards: '12 agosto 2023',
    },
    {
        imgCards: './src/img/img-blog/img-iphone/proyect-blog.jpg',
        titlesCards: 'PROYECTO BLOG',
        hashtag: '#Blog',
        colorHashtag: blogs,//*!color delos hasthag */
        textsDescription: 'Siempre me gusta hablar de historias o noticias interesantes sobre lo que leo,miro y vivo.y cree este super blog para documentar los blogs,proyectos y eventos generales que vivo.',
        linksButtomLeer: '#',
        fechaCards: '12 agosto 2023',
    },
    {
        imgCards: './src/img/img-blog/img-iphone/trabajo-animacion.jpg',
        titlesCards: 'FIRST ANIMATION',
        hashtag: '#Projects',
        colorHashtag: projects,//*!color delos hasthag */
        textsDescription: 'Siempre he querido aprender animación en general, pero no sabia en que, hasta que en la “escuela de desarrollo web” de platzi miré varios cursos de para páginas y ahí comencé.',
        linksButtomLeer: '#',
        fechaCards: '12 agosto 2023',
    },
    {
        imgCards: './src/img/img-blog/img-iphone/batata-bit.jpg',
        titlesCards: 'BATATA-BIT',
        hashtag: '#Projects',
        colorHashtag: projects,//*!color delos hasthag */
        textsDescription: 'batata-bit mi primer proyecto que hice en platzi, este modelo fue inspirado en las monedas digitales que al día de hoy son muy reconocidas y pueden te valor para el mercado mundial.',
        linksButtomLeer: '#',
        fechaCards: '12 agosto 2023',
    },
    {
        imgCards: './src/img/img-blog/img-iphone/clone-google.jpg',
        titlesCards: 'CLONE GOOGLE',
        hashtag: '#Projects',
        colorHashtag: projects,//*!color delos hasthag */
        textsDescription: 'Uno de mis primeros códigos Front-end en pandemia es un código sencillo pero fue uno de los que me abrieron la mente al mundo de la tecnología cuando caventura del 2020.',
        linksButtomLeer: '#',
        fechaCards: '12 agosto 2023',
    },
]

elementsCards.forEach((the) => {
    const cardBlog = document.createElement("section");
    cardBlog.classList.add("card_blog");

    const containerImgCards = document.createElement("figure");
    containerImgCards.classList.add("container_img-cards");
    const pictureImg = document.createElement("picture");
    const imgCards = document.createElement("img");
    imgCards.setAttribute('src', the.imgCards)
    imgCards.classList.add("img--cards");

    pictureImg.appendChild(imgCards);
    containerImgCards.appendChild(pictureImg);

    //-------
    const containerTextCards = document.createElement("article");
    containerTextCards.classList.add("container_text--cards");

    const contactTitleCards = document.createElement("div");
    contactTitleCards.classList.add("contact_title-cards");
    const titlesCard = document.createElement("h1");
    titlesCard.classList.add("titles--card");
    titlesCard.innerText = the.titlesCards;

    contactTitleCards.append(titlesCard);

    const hashtag = document.createElement("p");
    hashtag.classList.add("hashtag");
    hashtag.setAttribute('style', `color: ${the.colorHashtag}`);
    hashtag.innerText = the.hashtag;
    const textsDescriptionCards = document.createElement("p");
    textsDescriptionCards.classList.add("texts_description--cards");
    textsDescriptionCards.innerText = the.textsDescription;

    //---
    const descriptionCards = document.createElement("section");
    descriptionCards.classList.add("description-cards");

    const buttomLeer = document.createElement("a");
    buttomLeer.setAttribute('href', the.linksButtomLeer);
    buttomLeer.classList.add("buttom_leer--cards");
    buttomLeer.innerText = "leer mas";
    const fechaCards = document.createElement("p");
    fechaCards.classList.add("fecha--cards")
    fechaCards.innerText = the.fechaCards;

    descriptionCards.append(buttomLeer, fechaCards);
    //**contatenacion del html */

    containerTextCards.append(contactTitleCards,hashtag,textsDescriptionCards,descriptionCards)

    cardBlog.append(containerImgCards, containerTextCards);
    containerCardsBlogs.appendChild(cardBlog);
})
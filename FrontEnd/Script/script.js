import { fetchWorks, getCategories } from "./api.js";

const init = async () => {
  // Recuperation des works
  const works = await fetchWorks();

  afficherWorks(works);

  // Recuperation des categories
  const categories = await getCategories();


  afficherCategories(categories, works);
}

init();

function afficherWorks(works) {
    const container = document.querySelector(".gallery");
    if (!container) {
        console.error("Élément .gallery introuvable !");
        return;
    }

    container.innerHTML = "";  // Vide le conteneur

    for (let i = 0; i < works.length; i++) {
        const work = works[i];
        console.log("Work :", work);

        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = work.imageUrl;
        img.alt = work.title;

        const caption = document.createElement("figcaption");
        caption.textContent = work.title;

        figure.appendChild(img);
        figure.appendChild(caption);
        container.appendChild(figure);
    }
}


// Chargement des catégories et génération des boutons
const afficherCategories = async (categories, works) => {
const menu = document.getElementById("category-menu");

const btnAll = document.createElement("button");
btnAll.textContent = "Tous";
btnAll.dataset.id = 'all';
menu.appendChild(btnAll);

categories.forEach(category => {
  const btn = document.createElement("button");
  btn.textContent = category.name;
  btn.dataset.id = category.id;
  menu.appendChild(btn);

  btn.addEventListener("click", (e) => {
      console.log('click')
      const id = parseInt(e.target.dataset.id);
      // TODO gerer le cas du 'all'
      if (id === 'all') {
        // alors j'affiche tout mes works
      }
      // sinon je filtre
      const worksFiltered = works.filter(work => work.categoryId === id)

      console.log({worksFiltered})

      afficherWorks(worksFiltered);
    
  });
});

};

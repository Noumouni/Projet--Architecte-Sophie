 fetch("http://localhost:5678/api/works")
  .then(response => {
    console.log("Réponse brute :", response);
    return response.json();
  })
  .then(data => {
    console.log("Données JSON :", data);
    afficherWorks(data);
  })
  .catch(error => console.error("Erreur FETCH :", error));

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
//Récuperations des catégories en provenance du backend



 // Récupération des catégories depuis le backend
const getCategories = async () => {
  try {
    const response = await fetch("http://localhost:5678/api/categories");
    if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories :", error);
    return [];
  }
};

let allWorks = [];

// Chargement des catégories et génération des boutons
const loadCategories = async () => {
  const categories = await getCategories();
  const menu = document.getElementById("category-menu");

  const h3 = document.createElement("h3");
  h3.textContent = " Mes Projets";
  menu.appendChild(h3);

  const btnAll = document.createElement("button");
  btnAll.textContent = "Tous";
  btnAll.dataset.id = 0;
  menu.appendChild(btnAll);

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat.name;
    btn.dataset.id = cat.id;
    menu.appendChild(btn);
  });

  menu.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const id = parseInt(e.target.dataset.id);
      displayWorks(id);
    }
  });
};

// Récupération et affichage des travaux
const loadWorks = async () => {
  const res = await fetch("http://localhost:5678/api/works");
  allWorks = await res.json();
  displayWorks(0);
};

// Affichage des travaux filtrés
const displayWorks = (categoryId) => {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  const filtered = categoryId === 0
    ? allWorks
    : allWorks.filter(w => w.categoryId === categoryId);

  filtered.forEach(work => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = work.imageUrl;
    img.alt = work.title;

    const caption = document.createElement("figcaption");
    caption.textContent = work.title;

    figure.appendChild(img);
    figure.appendChild(caption);
    gallery.appendChild(figure);
  });
};

// Initialisation
loadCategories();
loadWorks();





 
      

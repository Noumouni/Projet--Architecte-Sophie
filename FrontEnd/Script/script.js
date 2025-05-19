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


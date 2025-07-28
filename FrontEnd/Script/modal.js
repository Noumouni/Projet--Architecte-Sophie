import { deleteWork } from "./api.js";


let modal = null;
const openModal = function (e) {
  e.preventDefault();
  const target = document.querySelector(e.target.getAttribute("href"));
  target.style.display = null;
  target.removeAttribute("aria-hidden");
  target.setAttribute("aria-modal", "true");
  modal = target;
  modal.addEventListener("click", closeModal);
  modal.querySelector(".js-modal-close").addEventListener("click", closeModal);
};

const closeModal = function (e) {
  if (modal === null) return;
  e.preventDefault();
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  modal.removeAttribute("aria-modal");
  modal.removeEventListener("click", closeModal);

  modal
    .querySelector(".js-modal-close")
    .removeEventListener("click", closeModal);
  modal = null;
};

document.querySelectorAll(".js-modal").forEach((a) => {
  a.addEventListener("click", openModal);
});

/********Transmetre les images  à la Modale  */

export function initModal(works) {
  afficherWorksDansModale(works);
}

/***Affiche les données dans la modale */

function afficherWorksDansModale(works) {
  const modalWrapper = document.getElementById("gallerie-modal");
  const token = localStorage.getItem("token");
  console.log("token utilisé", token);
  // Affiche les images(boucle)
  works.forEach((work) => {
    const figure = document.createElement("figure");
    figure.classList.add("figure-modale");
    const img = document.createElement("img");
    img.src = work.imageUrl;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash-can");

    deleteBtn.appendChild(trashIcon);
    figure.appendChild(img);
    figure.appendChild(deleteBtn);
    modalWrapper.appendChild(figure);

    // Événement de suppression au clic sur la poubelle
    deleteBtn.addEventListener("click", async (event) => {
      event.preventDefault(); // pour enpêcher le réchargement de la page
      deleteWork(work.id )
      //géré les erreurs 
     // const confirmation = confirm(
        //"Voulez- vous vraiment suprrimer cette photo ? "
     // );
      //if (!confirmation) return;

      /* Déplacer le fetch dans le fichier api, utilise async await au lieu de then / catch */

   

 

      /* utiliser deleteWork(work.id) dans un try catch , dans le try tu auras la logique de suppression d'element dans la gallery et dans la gallery homepage */
      /* Astuce: créer une variable workFiltered dans lequel tu aruas tout les works sauf celui supprimé et utilise tes methodes d'affichage de
       works pour les réafficher dans la gallery / homepage*/
    });
  });
}

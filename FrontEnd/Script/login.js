// recuperation des éléments du DOM
// On récupère le formulaire et les éléments HTML nécessaires
const form = document.getElementById("loginForm"); // Le formulaire de connexion
const emailInput = document.getElementById("emailInput"); // Champ email
const passwordInput = document.getElementById("passwordInput"); // Champ mot de passe
const errorMessage = document.getElementById("errorMessage"); // Zone pour afficher les erreurs

// On écoute la soumission du formulaire
form.addEventListener("submit", async function (event) {
  event.preventDefault(); // Empêche le rechargement automatique de la page (comportement par défaut)

  // On récupère les valeurs saisies par l’utilisateur dans les champs
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
});

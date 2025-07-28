export const fetchWorks = async () => {
   try {
      const response = await fetch("http://localhost:5678/api/works")

      const data = await response.json();

      return data;
   } catch (error) {
 console.error("Erreur lors de la récupération des works :", error);
  return [];   }
}

export const getCategories = async () => {
try {
  const response = await fetch("http://localhost:5678/api/categories");
  if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);
  return await response.json();
} catch (error) {
  console.error("Erreur lors de la récupération des catégories :", error);
  return [];
}
};

export const addWork = async (worksFormData) => {

  try {
    // On envoie une requête POST à l’API avec les identifiants
    const response = await fetch("http://localhost:5678/api/users/login", {
      method: "POST", // Méthode HTTP POST pour envoyer les données
      headers: {
        "Content-Type": "application/json", // Le corps sera au format JSON
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }), // On transforme les données JS en JSON pour les envoyer
    });

    // Si la réponse est un succès (code 200)
    if (response.ok) {
      const data = await response.json(); // On lit le corps de la réponse (avec userId et token)

      // On stocke le token et l’ID utilisateur dans le localStorage
      localStorage.setItem("token", data.token); // Sert pour les futures requêtes protégées
      localStorage.setItem("userId", data.userId); // Peut servir pour identifier l’utilisateur connecté

      // On redirige l’utilisateur vers la page d’accueil
      window.location.href = "index.html";
    }
    // Si l’authentification a échoué (mauvais identifiants)
    else if (response.status === 401 || response.status === 404) {
      errorMessage.textContent = "Email ou mot de passe incorrect"; // Message d’erreur affiché à l’utilisateur
    }
    // Si une autre erreur se produit
    else {
      errorMessage.textContent = "Une erreur est survenue. Réessayez.";
    }
  } catch (error) {
    // Si la requête n’arrive même pas au serveur (ex : coupure internet)
    errorMessage.textContent = "Erreur de connexion au serveur.";
    console.error("Erreur réseau :", error); // Pour aider au débogage
  }
}



export const deleteWork = async (workId) => {
  // Rajout du fetch qui supprime un element en utilisant try catch

  try{
    const response = await fetch(`http://localhost:5678/api/works/${workId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        
          if (response.ok) {
            figure.remove(); // Supprimer du DOM
          } else if (response.status === 401) {
            alert("Non autorisé : vérifiez votre connexion.");
          } else {
            alert("Échec de la suppression.");
          }
        }
        catch (error){
          console.error("Erreur réseau :", error);
          alert("Erreur lors de la requête."); 
}

}

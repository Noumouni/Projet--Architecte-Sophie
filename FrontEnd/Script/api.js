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


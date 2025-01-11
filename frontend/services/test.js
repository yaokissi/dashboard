/*export const getLigue1Fixtures = async () => {
    try {
        const response = await fetch(
            "https://v3.football.api-sports.io/fixtures?league=61&season=2023&timezone=Europe/Paris",
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": "495960dfb2eb60a0896d019ace0565a6", // Remplace par ta clé API
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const data = await response.json();
        console.log("Liste des matchs :", data.response);
        return data.response; // Renvoie uniquement les matchs
    } catch (error) {
        console.error("Erreur lors de la récupération des matchs :", error);
        return [];
    }
};

getLigue1Fixtures();
*/


/*
// Service for getting all football competitions

export const getCompetitions = async () => {
  try {
    const response = await fetch("https://v3.football.api-sports.io/leagues", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "495960dfb2eb60a0896d019ace0565a6", // Utilisation de la variable pour la clé
      },
    });

    // Vérifie si la réponse est valide
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json(); // Lit et convertit la réponse en JSON

    // Affiche uniquement les noms des ligues
    data.response.forEach((item) => {
      console.log("Nom de la ligue :", item.league.name);
    });
  } catch (error) {
    // Gestion des erreurs
    console.error("Erreur lors de l'appel API :", error);
  }
};

// Appel de la fonction
getCompetitions();
*/
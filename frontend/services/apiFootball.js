


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

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();

    return data.response.map((item) => ({
      id: item.league.id,
      name: item.league.name,
      emblem: item.league.logo,
    }));
  } catch (error) {
    console.error("Erreur lors de l'appel API :", error);
    return []; // Retourne un tableau vide en cas d'erreur
  }
};




// Service for getting all league fixtures

export const getLigue1Fixtures = async () => {
    try {
        const response = await fetch(
            "https://v3.football.api-sports.io/fixtures?league=61&season=2023&timezone=Europe/Paris",
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": "495960dfb2eb60a0896d019ace0565a6",
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const data = await response.json();

        // Mapper les données pour simplifier leur utilisation
        return data.response.map((match) => ({
            date: new Date(match.fixture.date).toLocaleDateString("fr-FR", {
                weekday: "short",
                day: "numeric",
                month: "short",
            }),
            time: new Date(match.fixture.date).toLocaleTimeString("fr-FR", {
                hour: "2-digit",
                minute: "2-digit",
            }),
            homeTeam: match.teams.home.name,
            homeLogo: match.teams.home.logo,
            awayTeam: match.teams.away.name,
            awayLogo: match.teams.away.logo,
        }));
    } catch (error) {
        console.error("Erreur lors de la récupération des matchs :", error);
        return [];
    }
};

/*
export const getLigue1Fixtures = async () => {
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

// service for getting 3 next games

const API_URL = "https://v3.football.api-sports.io";
const API_KEY = "495960dfb2eb60a0896d019ace0565a6";

export const getNextFixtures = async () => {
    try {
        const response = await fetch(`${API_URL}/fixtures?league=61&season=2023&next=3&timezone=Europe/Paris`, {
            method: "GET",
            headers: {
                "x-rapidapi-key": API_KEY,
            },
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }

        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error("Erreur lors de la récupération des prochains matchs :", error);
        throw error;
    }
};


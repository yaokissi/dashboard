<script>
import NextDaysProgramCard from './NextDaysProgramCard.vue';
import { logout } from "../../services/api.js";
import { getCompetitions } from "../../services/apiFootball.js";
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

export default {
  components: {
    NextDaysProgramCard,
  },
  props: {
    userName: {
      type: String,
      required: true,
    },
  },
  setup() {
    const router = useRouter();
    const competitions = ref([]); // Pour stocker les données des compétitions
    const nextMatches = ref([]);

    const fetchCompetitions = async () => {
      console.log("Appel de la fonction fetchCompetitions");
      try {
        const data = await getCompetitions(); // Récupère les données de l'API
        console.log("Réponse de l'API :", data);
        competitions.value = data; // Met à jour la valeur
      } catch (error) {
        console.error("Erreur lors de la récupération des compétitions :", error);
      }
    };



    const handleLogout = () => {
      logout();
      router.push('/login');
    };

    onMounted(() => {
      console.log('Composant monté, appel de fetchCompetitions');
      fetchCompetitions();

    });

    return {
      handleLogout,
      competitions,

    };
  },
};
</script>


<template>
    <body>
        <header>
        <h1>Dash<span class="text-blue-600">board</span></h1>
        <h2 class="text-base text-gray-500 font-bold mt-10 uppercase">Main Categories</h2>
        <div class="sports--categories mt-2 w-25 flex justify-evenly">
            <article>
                <i class="fi fi-br-football" style="color: white; font-size: 30px;" ></i>
                <p class="text-sm">Football</p>
            </article>
            <article>
                <i class="fi fi-br-basketball" style=" color: white; font-size: 30px;" ></i>
                <p class="text-sm">Basketball</p>
            </article>
        </div>
        <div class="sports--categories mt-2 w-25 flex justify-evenly">
            <article>
                <i class="fi fi-br-tennis" style=" color: white; font-size: 30px;" ></i>
                <p class="text-sm">Tennis</p>
            </article>
            <article>
                <i class="fi fi-br-rugby" style=" color: white; font-size: 30px;" ></i>
                <p class="text-sm">Rugby</p>
            </article>
        </div>
        <div class="football--leagues mt-10">
            <h2 class="text-base text-gray-500 mb-2 font-bold uppercase">Leagues</h2>

          <!-- competitions -->
          <article v-for="competition in competitions" :key="competition.id" class="flex items-center mb-4">
            <img
                :src="competition.emblem || 'https://via.placeholder.com/30'"
                alt="Emblème de la ligue"
                width="30"
                class="mr-3"
            />
            <p class="font-bold">{{ competition.name }}</p>
          </article>

        </div>
    </header>

    <div class="main">
        <section class="league--image-container">
          <div class="profil--details pt-5 flex justify-between w-90">
            <h2 class="text-white p-5"> Hello {{ userName }}</h2>
            <button title="Se déconnecter" @click="handleLogout" class=" cursor-pointer p-5 mr-5 rounded-full border-none text-white ">
              <i class="fi fi-br-power cursor-pointer rounded-full" style="color: red; font-size: 20px;" ></i>
            </button>
          </div>
          <h2 class=" slogan text-6xl font-bold text-neutral-50">Le meilleur <br> de l'actualité sport</h2>
        </section>
        <section class="league--games-container">
            <article>
                <p class="text-center">14 . Sep</p>
                <div class="teams">
                    <div>
                        <img src="../assets/Paris_Saint-Germain_Logo.svg.png" height="25" alt="logo du paris st germain">
                        <p>PSG</p>
                    </div>
                    <p>VS</p>
                    <div>
                        <img src="../assets/Logo_Olympique_de_Marseille.svg.png"  height="30" alt="logo de l'olympique de marseille">
                         <p>OM</p>
                    </div>
                </div>
                <p class="text-center">21 : 00</p>
                <p  class="text-center mt-5">Parc des princes</p>
            </article>
        </section>

        <div class="league--next-day-games--container">
          <!-- c'est ici que je veux utiliser mon composant NextDaysProgramCard -->
            <NextDaysProgramCard></NextDaysProgramCard>
        </div>
    </div>
    </body>

</template>

<style lang="scss" scoped>
body{
    display: flex;
    font-family: "Kanit", sans-serif;
}
header {
    background-color: #1a1a21;
    color: white;
    font-family: "Kanit", sans-serif;
    width: 20%;
    height: 100vh;
    padding-left: 10px;
}
h1 {
  font-family: "Kanit", sans-serif;
  font-weight: 700;
  font-style: italic;
}
.sports--categories article{
    padding: 30px;
    display: block;
    text-align: center;
    background-color: #0e0e13;
    width: 60px;
    border-radius: 20px;
    cursor: pointer;

&:hover {
    background-color: grey;
    color: white;
}
}
.football--leagues {
  overflow: auto;

  height: 50vh;
}
.football--leagues article{

    width: 100%;
  font-size: 15px;

}
.main {
    background-color: #191920;
    height: 100vh;
    width: 80%;
}
.slogan {
  padding-top: 50px;
   padding-left: 50px;
   background: #B7DEED;
background: linear-gradient(to right, #B7DEED 0%, #71CEEF 25%, #21B4E2 75%, #B7DEED 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

}
.league--image-container{
    background-image: url('../assets/liga.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 50vh;
    width: 100%;
}
.league--games-container article{
    /* glassmorphisme */
    background: rgba( 14, 14, 19, 0);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    /* */
    color: white;
    padding: 20px;
    margin-top: -40px;
    margin-left: 25px;
    width: 25%;
    border-radius: 25px;

    .teams {
        display: flex;
        justify-content: space-evenly;
        padding: 20px;
    }
}
.league--next-day-games--container{

}

</style>
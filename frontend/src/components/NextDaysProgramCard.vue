<script>
import {getLigue1Fixtures} from "../../services/apiFootball.js";
import {ref, onMounted} from "vue";

export default {
setup() {
  const games = ref([]);

  const fetchGames = async  () => {
    try {
      const data = await getLigue1Fixtures();
      console.log ("réponse de l'API", data);
      games.value = data;
    } catch (error){
      console.error("Erreur lors de la récupération des matchs")
    }
  };
  onMounted( () =>{
    console.log('Composant monté, appel de fetchGames');
    fetchGames();
    console.log("Données des matchs récupérées :", games.value);
  })
    return {
    fetchGames,
      games,
    }
  }
}
</script>

<template>
   <h2 class=" text-base text-gray-500 mt-5 mb-5 ml-10 font-bold uppercase">Ligue 1 - <span class="allGamesLabel"> All Games </span> </h2>

  <div class="all--sesason--fixtures--container">
    <section v-if="games.length > 0" class="next-days-program" v-for="(game, index) in games" :key="index">
      <div class="dates">
        <p class="hours text-3xl font-bold">{{ game.time }}</p>
        <p class="day text-slate-600">{{ game.date }}</p>
      </div>
      <div>
        <img :src="game.homeLogo" height="50" :alt="`Logo de ${game.homeTeam}`" />
        <p class="text-center">{{ game.homeTeam }}</p>
      </div>
      <p>VS</p>
      <div>
        <img :src="game.awayLogo" height="50" :alt="`Logo de ${game.awayTeam}`" />
        <p class="text-center">{{ game.awayTeam }}</p>
      </div>
    </section>
    <p v-else>Aucun match disponible pour le moment.</p>
  </div>

</template>

<style lang="scss">
.all--sesason--fixtures--container {
  overflow: auto;

  height: 15vh;
}
.next-days-program{
   display: flex;
   justify-content: space-around;
     /* glassmorphisme */
     background: rgba( 14, 14, 19, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    /* */
   color: white;
   border-radius: 30px;
   padding: 20px;
   align-items: center;


     
      span{
      font-size: 20px;
      text-transform:capitalize;
      }
      img{
         display: block;
         margin-left: auto;
         margin-right: auto;
      }
.dates {
      
      padding: 5px;
   
   }   
}
</style>
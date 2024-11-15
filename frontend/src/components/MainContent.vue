<script>
import NextDaysProgramCard from './NextDaysProgramCard.vue'
export default {
  components: {
    NextDaysProgramCard
  }
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
            <article>
               <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Ligue1_logo.png" width="30" alt="ligue 1 logo" title="ligue 1 logo"> 
               <p class="font-bold">Ligue 1</p>
            </article>
        </div>
    </header>
   
    <div class="main">
        <section class="league--image-container">
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

.football--leagues article{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
}
.main {
    background-color: #191920;
    height: 100vh;
    width: 80%;
}
.slogan {
   padding-top: 150px;
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
<script>

</script>

<template>
   <h2 class=" text-base text-gray-500 mt-5 mb-5 ml-10 font-bold uppercase">Ligue 1 - <span class="allGamesLabel"> All Games </span> </h2>    
   <section class="next-days-program">
         <div class="dates">
            <p class="hours text-3xl font-bold">21 : 00</p>
            <p class="day text-slate-600">13 Sep</p> 
         </div>
         <div>
            <img src="../assets/Paris_Saint-Germain_Logo.svg.png" height="50" alt="logo du paris st germain">
            <p class="text-center">Paris Saint Germain</p>
         </div>
            <p>VS</p>
         <div>
            <img src="../assets/Logo_Olympique_de_Marseille.svg.png"  height="60" alt="logo de l'olympique de marseille">
            <p class="text-center">Olympique de Marseille</p>
         </div>
   </section>
</template>

<style lang="scss">
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
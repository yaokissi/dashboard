<script setup>
import { onMounted } from 'vue';
import MainContent from '../components/MainContent.vue'

/* */
onMounted(() => {
  fetch('https://replay.sportsdata.io/api/v3/nba/stats/json/boxscore/20767?key=827c29db402f4861a7ebdf5f0f443a62')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
})
</script>

<template>
 <MainContent></MainContent>
</template>

<style>

</style>

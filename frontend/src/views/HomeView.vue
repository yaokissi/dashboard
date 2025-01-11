<script>
import {defineComponent, onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';
import MainContent from '../components/MainContent.vue';


export default defineComponent({
  components: {
    MainContent,
  },

  setup() {
    const router = useRouter();
    const userName = ref('')

    onMounted(() => {
      const token = localStorage.getItem('token');
      const firstName = localStorage.getItem('firstName');

      if (!token) {
        alert('Vous devez être connecté pour accéder à cette page.');
        router.push('/login');
      } else if (firstName) {
        userName.value = firstName;
      }
    });

    return {
      userName,
    };
  },
});
</script>

<template>
  <div>
    <MainContent :userName="userName"/>
  </div>
</template>

<style>

</style>

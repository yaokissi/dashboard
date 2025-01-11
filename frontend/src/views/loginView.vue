<template>
  <div class="max-w-md mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-6">Connexion</h1>

    <form @submit.prevent="handleLogin" class="space-y-4">
      <div>
        <label for="email" class="block font-medium mb-1">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div>
        <label for="password" class="block font-medium mb-1">Mot de passe</label>
        <input
          id="password"
          v-model="password"
          type="password"
          required
          class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
      >
        Se connecter
      </button>
    </form>

    <div v-if="errorMessage" class="mt-4 text-red-500">
      {{ errorMessage }}
    </div>
  </div>
</template>
<style>

</style>
<script>
import { ref } from 'vue';
import { login } from '../../services/api.js';
import { useRouter } from 'vue-router';


export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const router = useRouter();


    const handleLogin = async () => {
      try {
        const response = await login({ email: email.value, password: password.value});

        if (response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('firstName', response.firstName);
          router.push('/');
        }
        console.log('Utilisateur connecté avec succès', response);


      } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        errorMessage.value = 'Email / mot de passe incorrect';
      }
    };

    return {
      email,
      password,
      errorMessage,
      handleLogin,
    };
  },
};
</script>

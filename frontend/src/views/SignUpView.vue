<template>
    <div class="max-w-md mx-auto mt-10">
      <h1 class="text-2xl font-bold mb-6">Créer un compte</h1>
  
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label for="firstName" class="block font-medium mb-1">Prénom</label>
          <input
            id="firstName"
            v-model="firstName"
            type="text"
            required
            class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
  
        <div>
          <label for="lastName" class="block font-medium mb-1">Nom</label>
          <input
            id="lastName"
            v-model="lastName"
            type="text"
            required
            class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
  
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
  
        <div>
          <label for="confirmPassword" class="block font-medium mb-1">Confirmer le mot de passe</label>
          <input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            required
            class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
          <div v-if="password !== confirmPassword" class="text-red-500 text-sm mt-1">
            Les mots de passe ne correspondent pas.
          </div>
        </div>
  
        <button
          type="submit"
          :disabled="password !== confirmPassword"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
        >
          S'inscrire
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const firstName = ref('');
      const lastName = ref('');
      const email = ref('');
      const password = ref('');
      const confirmPassword = ref('');
  
      const handleSubmit = () => {
        if (password.value === confirmPassword.value) {
          // Traiter le formulaire ici (envoyer les données, etc.)
          console.log('Formulaire soumis avec succès:', {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value
          });
        } else {
          console.error('Les mots de passe ne correspondent pas.');
        }
      };
  
      return {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        handleSubmit
      };
    }
  };
  </script>
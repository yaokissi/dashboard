<template>
  <div class="max-w-md mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-6">Créer un compte</h1>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="firstName" class="block font-medium mb-1">Prénom</label>
        <input
            id="firstName"
            v-model="form.firstName"
            type="text"
            required
            class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div>
        <label for="lastName" class="block font-medium mb-1">Nom</label>
        <input
            id="lastName"
            v-model="form.lastName"
            type="text"
            required
            class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div>
        <label for="email" class="block font-medium mb-1">Email</label>
        <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div>
        <label for="password" class="block font-medium mb-1">Mot de passe</label>
        <input
            id="password"
            v-model="form.password"
            type="password"
            required
            class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div>
        <label for="confirmPassword" class="block font-medium mb-1">Confirmer le mot de passe</label>
        <input
            id="confirmPassword"
            v-model="form.confirmPassword"
            type="password"
            required
            class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
        />

        <div v-if="form.password !== form.confirmPassword" class="text-red-500 text-sm mt-1">
          Les mots de passe ne correspondent pas.
        </div>

        <div v-if="!isPasswordValid && form.password" class="text-red-500 text-sm mt-1">
          Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.
        </div>
      </div>

      <button
          type="submit"
          :disabled="form.password !== form.confirmPassword || !isPasswordValid || isLoading"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
      >
        <span v-if="isLoading">Chargement...</span>
        <span v-else>S'inscrire</span>
      </button>
    </form>

    <p v-if="errorMessage" class="text-red-500 text-sm mt-3">{{ errorMessage }}</p>
    <p v-if="successMessage" class="text-green-500 text-sm mt-3">{{ successMessage }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { register } from '../../services/api.js';
import { useRouter } from 'vue-router';

export default {
  setup() {

    const form = ref({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    const isLoading = ref(false);
    const errorMessage = ref('');
    const successMessage = ref('');
    const router = useRouter();

    // Regex to validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,}$/;

    // verify if password is valid
    const isPasswordValid = computed(() => passwordRegex.test(form.value.password));

    // function to handle form submission
    const handleSubmit = async () => {
      //  check if passwords match
      if (form.value.password !== form.value.confirmPassword) {
        errorMessage.value = 'Les mots de passe ne correspondent pas.';
        return;
      }

      if (!isPasswordValid.value) {
        errorMessage.value =
            'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.';
        return;
      }

      isLoading.value = true;
      errorMessage.value = '';
      successMessage.value = '';

      try {
        // send request to register user
        await register({
          firstName: form.value.firstName,
          lastName: form.value.lastName,
          email: form.value.email,
          password: form.value.password,
        });

        successMessage.value = 'Inscription réussie ! Vous allez être redirigé.';
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      } catch (error) {
        // handle error
        if (error.response && error.response.data) {
          errorMessage.value = error.response.data.message;
        } else {
          errorMessage.value = 'Une erreur est survenue. Veuillez réessayer.';
        }
      } finally {
        isLoading.value = false;
      }
    };

    return {
      form,
      isLoading,
      errorMessage,
      successMessage,
      isPasswordValid,
      handleSubmit,
    };
  },
};
</script>

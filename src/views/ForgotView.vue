<template>
  <h2 class=" bg-primary py-10 text-white text-center font-bold text-3xl mb-8 leading-loose">忘記密碼</h2>
  <div class=" max-w-lg mx-auto w-5/6">
    <form @submit.prevent="forgotPsd(email)">
      <p class="mb-4">
        <input :disabled="loading" v-model="email" required
          class="focus:ring-2 disabled:text-stone-400 block w-full text-xl text-stone-700 border-none py-6 px-10 rounded-full ring-primary bg-gray-100"
          placeholder="信箱" type="email">
      </p>
      <div class=" flex justify-end items-center space-x-6">
        <button :disabled="loading" class="text-md font-bold hover:opacity-80 text-white bg-primary py-4 px-8 rounded-full"
          type="submit">
          <span v-if="!loading">送出email</span>
          <span v-else><i class='bx bx-loader-alt bx-spin' ></i></span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useForgotPsd } from '../composable/useAuth'

const { forgotPsd, loading } = useForgotPsd()
const email = ref('')
</script>
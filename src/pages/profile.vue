<script setup>
import { definePage } from 'vue-router/auto'
definePage({
  meta: {
    requiresAuth: true
  }
})
</script>

<template>
  <h2 class=" bg-primary py-10 text-white text-center font-bold text-3xl mb-8 leading-loose">個人資訊</h2>
  <div class="max-w-lg mx-auto w-5/6">
    <form @submit.prevent>
      <ul class=" mb-10">
        <li>
          <label class="block text-lg" for="username">使用者名稱</label>
          <input minlength="1" maxlength="10" required class="focus:ring-2 disabled:text-stone-400 block w-full text-xl text-stone-700 border-none py-6 px-10 rounded-full ring-primary bg-gray-100" type="text" id="username" :placeholder="'(null)'">
        </li>
      </ul>
      <div class="text-right">
        <button class="text-md font-bold hover:opacity-80 text-white bg-primary py-4 w-24 rounded-full" type="submit">
          <span>修改</span>
          <!-- <span><i class='bx bx-loader-alt bx-spin' ></i></span> -->
        </button>
      </div>
    </form>
  </div>
</template>

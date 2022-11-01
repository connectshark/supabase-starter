<template>
  <h1 class=" text-center leading-loose py-4 text-primary font-bold text-3xl">Welcome Supabase Starter</h1>
  <div class="mx-auto max-w-md">
    <div class="w-5/6 mx-auto p-6 rounded-lg bg-stone-200">
      <p>ID: {{ store.id }}</p>
      <p>Email: {{ store.email }}</p>
    </div>
    <div class="w-5/6 mx-auto p-6 text-right">
      <router-link v-if="!store.id" class=" bg-primary p-3 rounded-lg text-white" to="/login">登入</router-link>
    </div>
  </div>
    <div class="p-10 bg-slate-200">
      <div class="mx-auto max-w-md space-x-7">
        <router-link class=" bg-primary p-3 rounded-lg text-white" to="/new">新增照片</router-link>
        <router-link class=" bg-primary p-3 rounded-lg text-white" to="/gallery">畫廊</router-link>
        <router-link class=" bg-primary p-3 rounded-lg text-white" to="/profile">個人資料</router-link>

      </div>
    </div>

</template>


<script setup>
import { useUserStore } from '../stores/user'

const store = useUserStore()
</script>
<script setup>
import { useUserStore } from '../stores/user'

const store = useUserStore()
</script>

<template>
    <h1 class=" text-3xl">Welcome Supabase Starter</h1>
    <p v-if="!store.id">
      <router-link class=" underline" to="/auth">去登入/註冊</router-link>
    </p>
    <p>
      <router-link class=" underline border-2 border-stone-600 p-1 m-1" to="/gallery">gallery</router-link>
      <router-link class=" underline border-2 border-stone-600 p-1 m-1" to="profile">profile</router-link>
    </p>
  
</template>

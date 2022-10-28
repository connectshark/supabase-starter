<template>
  <header class=" text-white bg-stone-900">
    <div class=" w-5/6 mx-auto max-w-lg flex items-center justify-between">
      <h1 class=" font-bold leading-loose text-xl">
        <router-link to="/">Supabase Starter</router-link>
      </h1>
      <div>
        <button v-if="store.id" class=" hover:underline" @click="signout">登出</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '../stores/user'
import supabase from '../supabase'

const store = useUserStore()
const route = useRoute()
const router = useRouter()

const signout = async () => {
  const { error } = await supabase.auth.signOut()
  store.id = ''
  if (route.meta?.requiresAuth) {
    router.push('/auth')
  }
}
</script>
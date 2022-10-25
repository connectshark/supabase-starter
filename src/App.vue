<script setup>
import { onMounted } from 'vue';
import HeaderWrapper from './components/HeaderWrapper.vue'
import { useUserStore } from './stores/user'
import supabase from './supabase'

const store = useUserStore()

onMounted(async () => {
  const { data: { user } } = await supabase.auth.getUser()
  if (user) {
    store.id = user.id
  }
})
</script>

<template>
  <HeaderWrapper/>
  <main class="text-stone-700 w-5/6 mx-auto max-w-lg py-5">
    <router-view />
  </main>
</template>

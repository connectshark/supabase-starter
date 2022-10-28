<script setup>
import HeaderWrapper from './components/HeaderWrapper.vue'
import { onBeforeMount } from 'vue'
import { useUserStore } from './stores/user'
import supabase from './supabase'

const store = useUserStore()

onBeforeMount(async () => {
  const { data: { user } } = await supabase.auth.getUser()
  if (user) {
    store.id = user.id
  }
})
</script>

<template>
  <HeaderWrapper/>
  <main class="text-stone-700">
    <router-view />
  </main>
</template>

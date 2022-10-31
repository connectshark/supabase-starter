<script setup>
import HeaderWrapper from './components/HeaderWrapper.vue'
import { useGetUser } from './composable/useAuth'

useGetUser()
</script>

<template>
  <HeaderWrapper/>
  <main class="text-stone-700">
    <router-view />
  </main>
</template>

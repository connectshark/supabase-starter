<script setup>
import { onBeforeMount } from 'vue'
import { useUserStore } from './stores/user'
import supabase from './supabase'

const store = useUserStore()


onBeforeMount(async () => {
  const { data } = await supabase.auth.getUser()
  store.id = data.user.id
})
</script>

<template>
  <router-view />
</template>

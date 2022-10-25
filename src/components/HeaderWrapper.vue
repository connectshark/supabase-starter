<template>
  <header class=" text-white bg-stone-900">
    <div class=" w-5/6 mx-auto max-w-lg flex items-center justify-between">
      <h1 class=" font-bold leading-loose text-xl">
        <router-link to="/">Supabase Starter</router-link>
      </h1>
      <div>
        <span class=" inline-block mx-2">{{ store.id ? 'Hi' : 'login?' }}</span>
        <button v-if="store.id" class=" ring-2 ring-white inline-block mx-2" @click="signout">登出</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useUserStore } from '../stores/user'
import supabase from '../supabase'

const store = useUserStore()

const signout = async () => {
  const { error } = await supabase.auth.signOut()
  store.id = ''
}
</script>
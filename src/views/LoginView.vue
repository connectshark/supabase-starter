<template>
  <main class="min-h-screen relative">
    <a class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#00B901] text-white p-4 rounded-2xl text-4xl hover:opacity-80 transition-opacity" :href="url">LINE登入</a>
  </main>
</template>


<script setup>
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL
const VERTIFY = `hello`
const url = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&state=${VERTIFY}&scope=profile%20openid%20email`
</script>
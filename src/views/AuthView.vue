<template>
  <main class=" pt-10">
    <div class=" w-5/6 max-w-lg rounded-xl mx-auto border border-stone-700">
    <ul class=" flex items-center justify-evenly">
      <li class="p-3 w-1/2 text-center">
        <p>login</p>
      </li>
      <li class="w-1/2 p-3 text-center">
        <p>signup</p>
      </li>
    </ul>
    <form @submit.prevent="loginWithFB">
      <p>
        <input type="email">
      </p>
      <input type="submit" value="登入">
    </form>
    <form @submit.prevent="handlerSignup">

    </form>

    </div>
  </main>
</template>


<script setup>
import supabase from '../supabase'

const handlerLogin = () => {}
const handlerSignup = () => {}

const loginWithFB = async () => {
  let { user, error } = await supabase.auth.signInWithOAuth({
    provider: 'facebook',
    options: {
      redirectTo: 'http://192.168.9.142:8000/callback/'
    }
  })
}
</script>
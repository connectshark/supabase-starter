<template>
  <h2 class=" bg-primary py-10 text-white text-center font-bold text-3xl mb-8 leading-loose">{{ isLogin ? '登入' : '註冊'}}</h2>
  <div class=" max-w-lg mx-auto w-5/6">
    <div class=" text-center mb-4">
      <button :disabled="loginLoading" type="button" @click="loginWithFB">
        <div class="bg-[#4267B2] inline-block align-middle rounded text-center text-white text-4xl">
          <IconFacebook />
        </div>
        <span class="ml-2 inline-block align-middle">用FB登入</span>
      </button>

    </div>
    <form v-if="isLogin" class="mb-4" @submit.prevent="handlerLogin">
      <p class="mb-4">
        <input :disabled="loginLoading" v-model="loginData.email" required
          class="focus:ring-2 disabled:text-stone-400 block w-full text-xl text-stone-700 border-none py-6 px-10 rounded-full ring-primary bg-gray-100"
          placeholder="信箱" type="email">
      </p>
      <p class="mb-4">
        <input :disabled="loginLoading" v-model="loginData.password" required
          class="focus:ring-2 disabled:text-stone-400 block w-full text-xl text-stone-700 border-none py-6 px-10 rounded-full ring-primary bg-gray-100"
          placeholder="密碼" type="password">
      </p>
      <div class=" flex justify-end items-center space-x-6">
        <span class=" text-amber-600" v-if="loginError">好像哪裡出錯了</span>
        <button :disabled="loginLoading" class=" text-stone-600 hover:underline" type="button">忘記密碼?</button>
        <button :disabled="loginLoading" class="text-md font-bold hover:opacity-80 text-white bg-primary py-4 w-24 rounded-full"
          type="submit">
          <span v-if="!loginLoading">登入</span>
          <span v-else><i class='bx bx-loader-alt bx-spin' ></i></span>
        </button>
      </div>
    </form>
    <form v-else class="mb-4" @submit.prevent="handlerSignup">
      <p class="mb-4">
        <input :disabled="signupLoading" v-model="signupData.email" required
          class="focus:ring-2 disabled:text-stone-400 block w-full text-xl text-stone-700 border-none py-6 px-10 rounded-full ring-primary bg-gray-100"
          placeholder="信箱" type="email">
      </p>
      <p class="mb-4">
        <input :disabled="signupLoading" v-model="signupData.password" required
          class="focus:ring-2 disabled:text-stone-400 block w-full text-xl text-stone-700 border-none py-6 px-10 rounded-full ring-primary bg-gray-100"
          placeholder="密碼" type="password">
      </p>
      <div class=" flex justify-end items-center space-x-6">
        <span class=" text-amber-600" v-if="signupError">好像哪裡出錯了</span>
        <button :disabled="signupLoading" class="text-md font-bold hover:opacity-80 text-white bg-primary py-4 w-24 rounded-full"
          type="submit">
          <span v-if="!signupLoading">註冊</span>
          <span v-else><i class='bx bx-loader-alt bx-spin' ></i></span>
        </button>
      </div>
    </form>
    <div class="text-center">
      <p class="text-stone-600 mb-4">{{ isLogin ? '還沒有帳號' : '有帳號了'}}？ <button @click="isLogin = !isLogin" class=" underline" type="button">{{ isLogin ? '立刻註冊' : '前往登入'}}</button></p>
      <p>
        <router-link class=" underline" to="/">回首頁</router-link>
      </p>
    </div>
  </div>
</template>


<script setup>
import { reactive, ref, watch } from 'vue'
import supabase from '../supabase'
import IconFacebook from '../components/icons/IconFacebook.vue'
import { useLogin, useSignUp } from '../composable/useAuth'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const store = useUserStore()

const isLogin = ref(true)

const router = useRouter()
const loginData = reactive({
  email: 'bobhus394@gmail.com',
  password: '222111'
})
const signupData = reactive({
  email: 'hello@mail.com',
  password: '222111'
})

const { loading: loginLoading, login, error: loginError, success: loginSuccess } = useLogin()
const { loading: signupLoading, signup, error: signupError, success: signupSuccess } = useSignUp()
const handlerLogin = () => {
  login({
    email: loginData.email,
    password: loginData.password
  })
}

const route = useRoute()
watch(loginSuccess, user => {
  const path = route.query?.redirect ? route.query.redirect : '/'
  store.id = user.id
  router.push(path)
})
watch(signupSuccess, user => {
  store.id = user.id
  router.push('/profile')
})

const handlerSignup = () => {
  signup({
    email: signupData.email,
    password: signupData.password
  })
}

const loginWithFB = async () => {
  const path = import.meta.env.VITE_CALLBACK_URL + '/callback/'
  await supabase.auth.signInWithOAuth({
    provider: 'facebook',
    options: {
      redirectTo: path
    }
  })
}
</script>
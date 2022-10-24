<script setup>
import { reactive, watch } from 'vue'
import { useProfile } from '../composable/useProfile'
import { useUserStore } from '../stores/user'
import supabase from '../supabase'

const store = useUserStore()
const { list, loading, reload } = useProfile({ id: store.id })

const formData = reactive({
  website: '',
  username: ''
})

watch(loading , value => {
  if (!value) {
    formData.username = list.value[0].username
    formData.website = list.value[0].website
  }
})

const submitHandler = async () => {
  const { error } = await supabase
    .from('profiles')
    .update({
      website: formData.website,
      username: formData.username
    })
    .eq('id', store.id)
  if (!error) {
    formData.username = ''
    formData.website = ''
    reload()
  }
}
</script>

<template>
  <h1 class=" text-white text-3xl">Profile</h1>
  <form v-if="!loading" class=" p-4 rounded-xl bg-white" @submit.prevent="submitHandler">
    <h2>使用者名稱:</h2>
    <p>
      <label for="username">{{ list[0].username }}</label>
    </p>
    <p>
      <input type="text" v-model="formData.username" id="username" placeholder="username">
    </p>
    
    <h2>網站:</h2>
    <p>
      <label for="website">{{ list[0].website ? list[0].website : 'null'}}</label>  
    </p>
    <p>
      <input type="url" v-model="formData.website" id="website" placeholder="website">
    </p>
    <p>
      <input class=" ring-2 ring-slate-600 p-3 rounded-lg" type="submit" value="修改">
    </p>
  </form>
</template>
